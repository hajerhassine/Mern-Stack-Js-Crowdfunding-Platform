
from unittest import result
import requests
from bs4 import BeautifulSoup
import csv 
from itertools import zip_longest
import pandas as pd
import json


list_credit=[]

result = requests.get("http://www.wifakbank.com/particuliers/financement/tamouil-hajiet.php")

src=result.content
# print(src)

soup = BeautifulSoup(src,"lxml")
# print(soup)

credit_titles=soup.find("b",{"class":"uppercase1"})
credit_descriptions=soup.find("ul",{"class":"bg-particulier"})
img=soup.find("img",{"id":"logo_dark_img"})


name=img['alt']
link="http://www.wifakbank.com/images/logo.png"
with open(name+'.png','wb') as f:
    im=requests.get(link)
    f.write(im.content)

wifak_credit_one={
    'Credit_Name':credit_titles.text,
    'Description':credit_descriptions.text,
    'link':link
}

list_credit.append(wifak_credit_one)
with open('wifakcredit1.json', 'w') as f:     
    json.dump(list_credit, f)










