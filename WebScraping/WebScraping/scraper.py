from unittest import result
import requests
from bs4 import BeautifulSoup
import csv 
from itertools import zip_longest

credit_title=[]

#2nd step use requests to fetch the url 
result = requests.get("https://www.biat.tn/biat/Fr/credits-immobiliers_62_60")

#3rd step save page content/markup 
src=result.content
# print(src)

#4th step create soup object to parse content
soup = BeautifulSoup(src,"lxml")
# print(soup)

#5th step find the elements containing info we need 
credit_titles=soup.find_all("h2",{"class":"title_news"})
print(credit_titles)

#6th step loop over returned lists to extract needed info into other lists

for i in range(len(credit_titles)):
        credit_title.append(credit_titles[i].text)
print(credit_title) 

#7th step create csv file and fill it with values
file_list=[credit_title]
exported=zip_longest(*file_list)
with open("E:/WebScraping/credits.csv","w" , newline="") as myfile:
    wr=csv.writer(myfile)
    wr.writerow(["Credit Name" ])
    wr.writerows(exported)






    
    


