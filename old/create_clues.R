library(stringr)
library(rvest)
library(tidyverse)
library(here)
library(httr)
library(jsonlite)
library(purrr)
library(combinat)
library(jsonlite)


word_list = read_csv("word_list.txt", col_names = FALSE)$X1[1:50]



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
	
	
	
	out = c(out1, out1b, out2, out2b)
	out = out[!grepl("%", out)]
	return(unique(out))
}

cluefile = here("clues_50.csv")

if(FALSE){
for (i in (length(word_list)-1):1) {
	for (j in (i+1):length(word_list)) {
		if (j%%20==0){ 	
			print(c(i,j))
		}
		clues = try(reverse_dictionary(word_list[i], word_list[j]))
		if (length(clues)>0){
			connections= tibble(i=i, j=j, word1=word_list[i], word2=word_list[j], clue=clues)
			write_csv(connections, cluefile, append=TRUE)
		}
	}
}}


clues = read_csv(cluefile, col_names=c("i", "j", "word1", "word2", "clue")) %>%  filter(!str_detect(clue, "\\s"))



## Remove exact duplicates of rows
clues = clues[order(clues$i, clues$j),]
clues = distinct(clues)

# Function to check if a string contains any 3-letter subword of a given word
contains_3_letter_subword <- function(string, word) {
	subwords <- unique(unlist(lapply(1:(nchar(word) - 2), function(i) substr(word, i, i + 2))))
	any(sapply(subwords, function(subword) any(str_detect(string, subword))))
}

# Filter out rows where "clue" contains any 3-letter subword of word1 or word2
filtered_clues <- clues %>%
	filter(!sapply(clue, contains_3_letter_subword, word1) & 
				 	!sapply(clue, contains_3_letter_subword, word2))



## Remove any clues that work for more than one pair of words
reused_clues = unique(filtered_clues %>% get_dupes(clue) %>% pull(clue))

uniqueclues = filtered_clues[!filtered_clues$clue %in% reused_clues,]


### Remove any clues that aren't in my list of common words or is less than 2 letters. 

# Read the content of the file google-10000-english-no-swears.txt into a vector
english_words <- readLines("google-10000-english-no-swears.txt")

# Filter uniqueclues to include only clues that are present in english_words
uniqueclues <- uniqueclues %>%
	filter(clue %in% english_words)


## write out the unique clues 
cluefile = here("clues_50_unique.csv")
write_csv(uniqueclues, cluefile, append=FALSE)










# Iterate through each (i, j) pair in uniqueclues
for (k in 1:nrow(uniqueclues)) {
  i <- uniqueclues$i[k]
  j <- uniqueclues$j[k]
  word1 <- uniqueclues$word1[k]
  word2 <- uniqueclues$word2[k]
  
  # Filter clues for the current (i, j) pair
  ij_clues <- uniqueclues %>%
    filter(i == !!i & j == !!j) %>%
    pull(clue)
  
  # Display the (i, j) pair and corresponding clues with numbers
  cat("Pair:", i, "-", j, "\n")
  cat("Words:", word1, "-", word2, "\n")
  cat("Clues:\n")
  for (clue_num in 1:length(ij_clues)) {
    cat(clue_num, ": ", ij_clues[clue_num], "\n")
  }
  cat("0: None of the clues\n")
  
  # Prompt user to input the number associated with the best clue
  cat("Enter the number associated with the best clue (or '0' for none): ")
  selected_clue_num <- scan(n = 1, quiet = TRUE)
  
  # If '0' is entered or the input is NA, set selected_clue to NA
  if (is.na(selected_clue_num) || selected_clue_num == 0) {
    selected_clue <- NA
  } else {
    # Retrieve the selected clue based on the entered number
    selected_clue <- ij_clues[selected_clue_num]
  }
  
  # Append the selected clue to selected_clues dataframe
  selected_clues <- rbind(selected_clues, data.frame(i = i, j = j, word1 = word1, word2 = word2, selected_clue = selected_clue), stringsAsFactors = FALSE)
}

# Save the selected clues to a new file (you can modify the file path and format as needed)
write.csv(selected_clues, file = "selected_clues.csv")




## List the words that are connected with each word
unique_j_list <- uniqueclues %>% group_by(i) %>%
	summarize(unique_j = list(unique(j)))
	
unique_i_list <- uniqueclues %>% group_by(j) %>%
	summarize(unique_i = list(unique(i)))


# View the resulting list
unique_j_list$unique_j
unique_i_list$unique_i


nodes = full_join(unique_j_list, unique_i_list, by = join_by(i==j))

nodes$connected_to=NA

for(i in nodes$i) {
	nodes$connected_to[i] = list(sort(unique(c(nodes[i,]$unique_j[[1]], nodes[i,]$unique_i[[1]]))))
}

nodes = nodes %>% select(nodes=i, connected_to)


# Function to find overlaps within each subset of nodes
find_overlaps <- function(subset) {
	print(paste("Processing subset:", toString(unique(subset$nodes))))
	
	if (length(subset) < 2) {
		print("Subset has fewer than 2 nodes")
		return(NULL)  # Return NULL for subsets with fewer than 2 nodes
	}
	
	overlaps <- tryCatch({
		combn(subset$connected_to, 2, function(pair) {
			intersect(pair[[1]], pair[[2]])
		}, simplify = FALSE)  # Set simplify = FALSE to handle empty results
	}, error = function(e) {
		print(paste("Error in subset:", toString(unique(subset$nodes))))
		NULL
	})
	
	# Filter out NULL elements and combine overlaps
	unique(unlist(Filter(Negate(is.null), overlaps)))
}



# Generate all combinations of 3 nodes from 50
all_subsets <- combn(1:50, 3)

# Convert each column of the result to a subset
subsets <- lapply(seq_len(ncol(all_subsets)), function(i) nodes[all_subsets[, i], ])

# Find overlaps within each subset
subset_overlaps <- map(subsets, find_overlaps)













# Define the number of sets
num_sets <- 20  # Change this to the desired number of sets

# List to store game data sets
gameDataSets <- list()

# Function to check if a word is repeated in both rowWords and columnWords
check_word_repetition <- function(rowWords, colWords) {
	any(sapply(rowWords, function(x) x %in% colWords))
}

# Function to create a single game data set
create_game_data_set <- function() {
	repeat {
		# randomly select a subset for rowwords
		row_id <- sample.int(dim(all_subsets)[2], 1)
		
		# randomly select 3 overlapping words to go with these rowwords
		col_ids <- sample(subset_overlaps[[row_id]], 3)
		
		# get row and column words
		rowWords <- word_list[all_subsets[, row_id]]
		colWords <- word_list[col_ids]
		
		# Check if any word is repeated in both rowWords and columnWords
		if (!check_word_repetition(rowWords, colWords)) {
			break
		}
	}
	
	# List to store the resulting clues
	result_clues <- list()
	
	# Iterate over each combination of row and column words
	for (rowWord in rowWords) {
		for (colWord in colWords) {
			# Filter clues for the current combination
			filtered_clue <- uniqueclues %>%
				filter((word1 == rowWord & word2 == colWord) | (word1 == colWord & word2 == rowWord))
			
			# Append the filtered clue to the result list
			result_clues[[paste(rowWord, colWord, sep = "_")]] <- filtered_clue[1, ]
		}
	}
	
	# Create a list to store the JSON structure for the current set
	json_data <- list()
	
	# Add columnWords to the JSON structure
	json_data$columnWords <- colWords
	
	# Add rowWords to the JSON structure
	json_data$rowWords <- rowWords
	
	# Initialize a list to store correctAnswers
	correct_answers <- list()
	# Iterate over each combination of words
	for (rowWord in rowWords) {
		answers_for_combination <- list()
		for (colWord in colWords) {
			# Extract the clue for the current combination
			current_clue <- result_clues[[paste(rowWord, colWord, sep = "_")]]$clue
			
			# Append the correct answers to correctAnswers list
			answers_for_combination[[length(answers_for_combination) + 1]] <- current_clue
		}
		correct_answers[[length(correct_answers) + 1]] <- unlist(answers_for_combination)
	}
	
	# Add correctAnswers to the JSON structure
	json_data$correctAnswers <- correct_answers
	
	# Return the JSON data for the current set
	return(json_data)
}

# Generate multiple sets of game data
for (i in 1:num_sets) {
	gameDataSets[[i]] <- create_game_data_set()
}

# Serialize the game data sets
json_output <- toJSON(gameDataSets, pretty = TRUE)

# Print the JSON output
cat(json_output)
