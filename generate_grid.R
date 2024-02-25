library(stringr)
library(rvest)
library(tidyverse)
library(here)
library(httr)
library(jsonlite)
library(purrr)
library(combinat)
library(jsonlite)


word_list = read_csv("word_list.txt", col_names = FALSE)$X1
english_words <- readLines("google-10000-english-no-swears.txt")

# Function to check if a string contains any 3-letter subword of a given word
contains_3_letter_subword <- function(string, word) {
	subwords <- unique(unlist(lapply(1:(nchar(word) - 2), function(i) substr(word, i, i + 2))))
	any(sapply(subwords, function(subword) any(str_detect(string, subword))))
}

reverse_dictionary = function(word1, word2) {
	url1 = paste("https://onelook.com/reverse-dictionary.shtml?s=", word1, "%20", word2, sep="")
	out1 = (read_html_live(url1)  %>% html_elements("table"))[1] %>% html_elements(".ressyn") %>% html_attr("thesw")
	
	url1b = paste("https://api.datamuse.com/words?ml=", word1, "%20", word2, "&max=10", sep="")
	res1b = GET(url1b)
	out1b = fromJSON(rawToChar(res1b$content))
	out1b = out1b$word
	
	
	url2 = paste("https://onelook.com/reverse-dictionary.shtml?s=", word2, "%20", word1, sep="")
	out2 = (read_html_live(url2)  %>% html_elements("table"))[1] %>% html_elements(".ressyn") %>% html_attr("thesw")	
	
	url2b = paste("https://api.datamuse.com/words?ml=", word2, "%20", word1, "&max=10", sep="")
	res2b = GET(url2b)
	out2b = fromJSON(rawToChar(res2b$content))
	out2b = out2b$word
	
	# Combine
	out = unique(c(out1, out1b, out2, out2b))
	
	# Filter to single words
	out = out[!grepl("%", out)]
	
	# Filter to include only clues that are present in english_words
	out <- out[out %in% english_words]
	
	# Filter out "clue"s containing any 3-letter subword of word1 or word2
	out <- out[!sapply(out, contains_3_letter_subword, word1) & !sapply(out, contains_3_letter_subword, word2)]
	
	return(out)
}

manual_check = function(game_grid) {

	# Get unique word pairs
	unique_pairs <- unique(game_grid[, c("word1", "word2")])
	
	correct_answers = c()
	
	# Iterate through each unique pair
	for (k in 1:nrow(unique_pairs)) {
		word1 <- unique_pairs$word1[k]
		word2 <- unique_pairs$word2[k]
		ijclues <- game_grid %>% filter(`word1` == unique_pairs$word1[k] & `word2` == unique_pairs$word2[k])
		
		# Display the (i, j) pair and corresponding clues with numbers
		print(cbind(unique(unique_pairs[,1]), (unique(unique_pairs[,2]))))
		cat("Words:", word1, "-", word2, "\n")
		cat("Clues:\n")
		for (clue_num in 1:dim(ijclues)[1]) {
			cat(clue_num, ": ", ijclues$clue[clue_num], "\n")
		}
		cat("0: None of the clues\n")
		
		# Prompt user to input the number associated with the best clue or a custom clue
		selected_clue_input <- readline(prompt = "Enter the number associated with the best clue (or '0' for none) or enter a custom clue: ")
		
		# Check if the input is a number
		if (grepl("^\\d+$", selected_clue_input)) {
			selected_clue_num <- as.integer(selected_clue_input)
			
			# Retrieve the selected clue based on the entered number
			if (selected_clue_num == 0) {
				selected_clue <- NA
				return(NA)
			} else {
				selected_clue <- ijclues$clue[selected_clue_num]
			}
		} else {
			# Use the input as the selected clue
			selected_clue <- selected_clue_input
		}
		
		correct_answers = c(correct_answers, selected_clue)
	}
	
	return(correct_answers)
}
	
create_grid = function(row_words_in=c(NA, NA, NA), col_words_in=c(NA, NA, NA)) {

	valid_game = FALSE
	mikes_happy= FALSE
	
	while (!mikes_happy){
	while (!valid_game){
		
		row_words = row_words_in
		col_words = col_words_in
		sum_na_rows = sum(is.na(row_words_in))
		sum_na_cols = sum(is.na(col_words_in))
		
		if(sum_na_rows>0){row_words[is.na(row_words)] = sample(word_list, sum_na_rows)}
		if(sum_na_cols>0){col_words[is.na(col_words)] = sample(word_list, sum_na_cols)}
	
		game_grid = tibble(word1=NULL, word2=NULL, clue=NULL)
		
		for(i in 1:3){
			for (j in 1:3) {
				game_grid = rbind(game_grid, tibble(word1=row_words[i], word2=col_words[j], clue= reverse_dictionary(row_words[i], col_words[j])))
			}
		}
		if (dim(unique(game_grid[, c(1,2)]))[1]==9 | sum_na_rows + sum_na_rows ==0){valid_game=TRUE}
	}
	correct_answers <- manual_check(game_grid)
	if (!any(is.na(correct_answers))){mikes_happy=TRUE}
	}
	
	
	# Create a list to store the JSON structure for the current set
	json_data <- list()
	
	# Add columnWords to the JSON structure
	json_data$columnWords <- col_words
	
	# Add rowWords to the JSON structure
	json_data$rowWords <- row_words
	
	# Add correctAnswers to the JSON structure
	json_data$correctAnswers <- list(correct_answers[1:3], correct_answers[4:6], correct_answers[7:9])
	
	# Write the JSON data to the file
	write(toJSON(json_data, pretty=TRUE), "game_grids.json", append=TRUE)
	write(",", "game_grids.json", append=TRUE)
	
}

create_grid(row_words_in = c("front", "respect", NA), col_words_in = c("ship", "show", NA))
