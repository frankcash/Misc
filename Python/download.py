import requests
import re
from bs4 import BeautifulSoup

#url = "http://fc14.ifca.ai/papers/fc14_submission_152.pdf"

#r = requests.get(url)
#with open("test.pdf", "wb") as pdf:
#    try:
#        pdf.write(r.content)
#    finally:
#        pdf.close

origin = requests.get("http://freehaven.net/anonbib")
soup=BeautifulSoup(origin.text)

results = soup.find_all(href=re.compile("(http).*(pdf)"))

for link in results:
    url = (link.get('href'))
    r = requests.get(url)
    print url
    fileForUrl = url.split('/')[-1]
    with open(fileForUrl, "wb") as pdf:
        try:
            pdf.write(r.content)
        finally:
            pdf.close
