library(tidyverse)
library(rvest)
library(writexl)

library(readxl)
kodlar <- read_excel("content/posts/05_2022_yks_puan hesaplama/kodlar.xlsx",sheet = "dic")

content <- read_html("https://yokatlas.yok.gov.tr/netler-tablo.php?b=19001")
tablesSay <- content %>% html_table(fill = TRUE)
second_tableSay <- tablesSay[[1]][-1,]

content <- read_html("https://yokatlas.yok.gov.tr/netler-tablo.php?b=10001")
tablesEa <- content %>% html_table(fill = TRUE)
second_tableEa <- tablesEa[[1]][-1,]

content <- read_html("https://yokatlas.yok.gov.tr/netler-tablo.php?b=10009")
tablesSoz <- content %>% html_table(fill = TRUE)
second_tableSoz <- tablesSoz[[1]][-1,]

content <- read_html("https://yokatlas.yok.gov.tr/netler-tablo.php?b=10003")
tablesDil <- content %>% html_table(fill = TRUE)
second_tableDil <- tablesDil[[1]][-1,]

finalColnames <- colnames(second_tableSay)
finalColnames[1] <- "ProgramKodu"
finalColnames[6] <- "OBP"
finalColnames[7] <- "Puan"
finalColnames[17] <- colnames(second_tableEa)[14]
finalColnames[18] <- colnames(second_tableEa)[15]
finalColnames[19] <- colnames(second_tableEa)[16]
finalColnames[20] <- colnames(second_tableSoz)[13]
finalColnames[21] <- colnames(second_tableSoz)[16]
finalColnames[22] <- colnames(second_tableSoz)[17]
finalColnames[23] <- colnames(second_tableSoz)[18]
finalColnames[24] <- colnames(second_tableSoz)[19]
finalColnames[25] <- colnames(second_tableDil)[13]
finalColnames[26] <- "PuanTuru"
finalColnames[27] <- "BoluMKodu"


puanData <- matrix(NA, ncol=27)
colnames(puanData) <- finalColnames
puanData <- as.data.frame(puanData)

for (i in 1:dim(kodlar)[1]){
  e.kod <- kodlar$id[i]
  if(kodlar$PuanTuru[i]=="TYT"){
    content <- read_html(paste("https://yokatlas.yok.gov.tr/netler-onlisans-tablo.php?b=",e.kod,sep=""))
    t.data <- content %>% html_table(fill = TRUE)
    e.table <- t.data[[1]][-1,]
    progKod <- content |> html_elements("a[href*='.php?y=']") |> html_attr('href')
    if (length(progKod>0)){
      this.temp <- as.data.frame(matrix(ncol=27,nrow=length(progKod)))
      this.temp[,1:12] <- e.table
      this.temp[,1] <- progKod
      this.temp[,26] <- "TYT"
      this.temp[,27] <- e.kod
      colnames(this.temp) <- finalColnames
      puanData <- rbind(puanData,this.temp)
    }
  }else{
    content <- read_html(paste("https://yokatlas.yok.gov.tr/netler-tablo.php?b=",e.kod,sep=""))
    t.data <- content %>% html_table(fill = TRUE)
    e.table <- t.data[[1]][-1,]
    progKod <- content |> html_elements("a[href*='.php?y=']") |> html_attr('href')
    if (length(progKod>0)){
      this.temp <- as.data.frame(matrix(ncol=27,nrow=length(progKod)))
      if (kodlar$PuanTuru[i]=="SAY"){
        this.temp[,1:16] <- e.table[,1:16]
        this.temp[,1] <- progKod
        this.temp[,26] <- "SAY"
        this.temp[,27] <- e.kod
        colnames(this.temp) <- finalColnames
        puanData <- rbind(puanData,this.temp)
      }else if (kodlar$PuanTuru[i]=="EA"){
        this.temp[,1:13] <- e.table[,1:13]
        this.temp[,17:19] <- e.table[,14:16]
        this.temp[,1] <- progKod
        this.temp[,26] <- "EA"
        this.temp[,27] <- e.kod
        colnames(this.temp) <- finalColnames
        puanData <- rbind(puanData,this.temp)
      }else if (kodlar$PuanTuru[i]=="SÖZ"){
        this.temp[,1:12] <- e.table[,1:12]
        this.temp[,20] <- e.table[,13]
        this.temp[,18:19] <- e.table[,14:15]
        this.temp[,21:24] <- e.table[,16:19]
        this.temp[,1] <- progKod
        this.temp[,26] <- "SÖZ"
        this.temp[,27] <- e.kod
        colnames(this.temp) <- finalColnames
        puanData <- rbind(puanData,this.temp)
      }else{
        this.temp[,1:12] <- e.table[,1:12]
        this.temp[,25] <- e.table[,13]
        this.temp[,1] <- progKod
        this.temp[,26] <- "DİL"
        this.temp[,27] <- e.kod
        colnames(this.temp) <- finalColnames
        puanData <- rbind(puanData,this.temp)
      }
    }
  }
}

write_xlsx(puanData, "C:/DevRSA/D3/content/posts/05_2022_yks_puan hesaplama/puanData.xlsx")

################

puanData <- read_excel("content/posts/05_2022_yks_puan hesaplama/puanData.xlsx")

puanData$stuType=NA

for (i in 1:length(puanData$ProgramKodu)){
  if(puanData$PuanTuru[i]=="TYT"){
    page <- read_html(paste("https://yokatlas.yok.gov.tr/content/onlisans-dynamic/3070.php?y=",
                            puanData$ProgramKodu[i],sep = ""))
  }else{
    page <- read_html(paste("https://yokatlas.yok.gov.tr/content/lisans-dynamic/1070.php?y=",
                            puanData$ProgramKodu[i],sep = ""))
  }
  this.stuType <- page |> html_table(fill=TRUE)
  this.stuType <- this.stuType[[1]][this.stuType[[1]][,1]=="Öğrenim Durumu",][2]
  puanData$stuType[i] <- this.stuType
}


# saveRDS(puanData,"C:/DevRSA/D3/content/posts/05_2022_yks_puan hesaplama/puanData.rda")
test <- readRDS("C:/DevRSA/D3/content/posts/05_2022_yks_puan hesaplama/puanData.rda")

test$stuType <- as.character(test$stuType)

write_xlsx(test, "C:/DevRSA/D3/content/posts/05_2022_yks_puan hesaplama/puanData.xlsx")
