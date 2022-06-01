library(tidyverse)
library(rvest)
library(writexl)

library(readxl)
kodlar <- read_excel("content/posts/05_2022_yks_puan hesaplama/kodlar.xlsx",sheet = "dic")

meslek_kontenjan <- matrix(NA,ncol=3)
for (i in 1:480){
  e.kod <- kodlar$id[i]
  content <- read_html(paste("https://yokatlas.yok.gov.tr/netler-tablo.php?b=",
                             e.kod,sep=""))
  my1 <- content |> html_elements("a[href*='.php?y=']") |> html_attr('href')
  my2 <- content |> html_elements("a[href*='.php?y=']") |> html_text2()

  if(length(my1)>0){meslek_kontenjan <- rbind(meslek_kontenjan,cbind(e.kod,my1,my2))}
}

for (i in 481:745){
  e.kod <- kodlar$id[i]
  content <- read_html(paste("https://yokatlas.yok.gov.tr/netler-onlisans-tablo.php?b=",
                             e.kod,sep=""))
  my1 <- content |> html_elements("a[href*='.php?y=']") |> html_attr('href')
  my2 <- content |> html_elements("a[href*='.php?y=']") |> html_text2()
  if(length(my1)>0){meslek_kontenjan <- rbind(meslek_kontenjan,cbind(e.kod,my1,my2))}
}

meslek_kontenjan <- meslek_kontenjan[-1,]
meslek_kontenjan <- as.data.frame(meslek_kontenjan)
write_xlsx(meslek_kontenjan,"content/posts/05_2022_yks_puan hesaplama/meslek_kont.xlsx")


content <- read_html("https://yokatlas.yok.gov.tr/netler-tablo.php?b=19502")
tables <- content %>% html_table(fill = TRUE)
second_table <- tables[[1]][-1,]
fullData16 <- second_table
fullData16[,1] <- 19001
tt <- colnames(fullData16)
tt[1] <- "kod"
tt[6] <- "obp"
tt[7] <- "puan"

colnames(fullData16) <- tt

#---------------------------------------
content <- read_html("https://yokatlas.yok.gov.tr/netler-tablo.php?b=10003")
tables <- content %>% html_table(fill = TRUE)
second_table <- tables[[1]][-1,]
fullData13 <- second_table
fullData13[,1] <- 10003
pp <- colnames(fullData13)
pp[1] <- "kod"
pp[6] <- "obp"
pp[7] <- "puan"
colnames(fullData13) <- pp
#--------------------------------------
content <- read_html("https://yokatlas.yok.gov.tr/netler-tablo.php?b=10019")
tables <- content %>% html_table(fill = TRUE)
second_table <- tables[[1]][-1,]
fullData19 <- second_table
fullData19[,1] <- 10019
qq <- colnames(fullData19)
qq[1] <- "kod"
qq[6] <- "obp"
qq[7] <- "puan"
colnames(fullData19) <- qq
# önlisans----------------------------
content <- read_html("https://yokatlas.yok.gov.tr/netler-onlisans-tablo.php?b=30001")
tables <- content %>% html_table(fill = TRUE)
second_table <- tables[[1]][-1,]
fullDataTYT <- second_table
fullDataTYT[,1] <- 30001
ww <- colnames(fullDataTYT)
ww[1] <- "kod"
ww[6] <- "obp"
ww[7] <- "puan"
colnames(fullDataTYT) <- ww

# Kodlar--------------------------------------------------------------

for (i in 1:480){
  e.kod <- kodlar$id[i]
  content <- read_html(paste("https://yokatlas.yok.gov.tr/netler-tablo.php?b=",e.kod,sep=""))
  tables <- content %>% html_table(fill = TRUE)
  second_table <- tables[[1]][-1,]
  if(dim(second_table)[2]==16){
    colnames(second_table) <- tt
    second_table[,1] <- e.kod
    fullData16 <- rbind(fullData16,second_table)
  }else if(dim(second_table)[2]==13){
    colnames(second_table) <- pp
    second_table[,1] <- e.kod
    fullData13 <- rbind(fullData13,second_table)
  }else{
    colnames(second_table) <- qq
    second_table[,1] <- e.kod
    fullData19 <- rbind(fullData19,second_table)
  }

}

for (i in 481:745){
  e.kod <- kodlar$id[i]
  content <- read_html(paste("https://yokatlas.yok.gov.tr/netler-onlisans-tablo.php?b=",e.kod,sep=""))
  tables <- content %>% html_table(fill = TRUE)
  second_table <- tables[[1]][-1,]
  colnames(second_table) <- ww
  second_table[,1] <- e.kod
  fullDataTYT <- rbind(fullDataTYT,second_table)
}
saveRDS(list(SAYEA=fullData16,SOZ=fullData19,DIL=fullData13,TYT=fullDataTYT),"fulldata.rda")
fullData<-readRDS("fulldata.rda")





