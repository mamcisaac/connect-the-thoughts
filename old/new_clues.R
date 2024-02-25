library(httr)
library(jsonlite)
# 
# test = GET("http://api.conceptnet.io/query?start=/c/en/fly&rel=/r/SimilarTo")
# out = fromJSON(rawToChar(test$content))$edges
# out$end$label

res = GET("https://api.datamuse.com/words?ml=look+man&max=10")

out = fromJSON(rawToChar(res$content))

out$word


res2 = GET("https://api.datamuse.com/words?ml=adult+partner&max=15")
fromJSON(rawToChar(res2$content))$word

res2 = GET("https://api.datamuse.com/words?rel_syn=partner&max=10")
fromJSON(rawToChar(res2$content))$word

res = GET(paste("https://api.datamuse.com/words?ml=", "man", "+", "look", "+", paste(c(word1_expanded[1], word2_expanded[1]), collapse="+"), "&v=enwiki&max=10", sep=""))


