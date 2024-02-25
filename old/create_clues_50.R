library(rvest)
library(tidyverse)
library(here)
library(httr)
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
}
