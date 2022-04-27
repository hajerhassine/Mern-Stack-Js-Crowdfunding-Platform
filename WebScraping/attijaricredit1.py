
from unittest import result
import requests
from bs4 import BeautifulSoup
import csv 
from itertools import zip_longest
import pandas as pd
import json



list_credit=[]


result = requests.get("http://www.attijaribank.com.tn/Fr/Pack_Startup__11_599")

src=result.content
# print(src)

soup = BeautifulSoup(src,"lxml")
# print(soup)

credit_titles=soup.find("h1",{"class":"titre_page"})
credit_descriptions=soup.find("ul",{"class":"liste1 margin_top10"})

# print(credit_titles)
# print(credit_descriptions)
# print(img)


attijari_credit_one={
    'Credit_Name':credit_titles.text,
    'Description':credit_descriptions.text,
    
}

list_credit.append(attijari_credit_one)
with open('attijaricredit1.json', 'w') as f:     
    json.dump(list_credit, f)      
    




