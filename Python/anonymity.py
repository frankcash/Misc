import requests
import re
from bs4 import BeautifulSoup
import subprocess


origin = requests.get("http://freehaven.net/anonbib")
soup=BeautifulSoup(origin.text)

results = soup.find_all(href=re.compile("(http).*(pdf)"))
requests.adapters.HTTPAdapter(max_retries=3)
for link in results:
    url = (link.get('href'))
    url = url.strip()
    try:
        r = requests.get(url)
        fileForUrl = url.split('/')[-1]
        with open(fileForUrl, "wb") as pdf:
            try:
                pdf.write(r.content)
            finally:
                pdf.close
    except:
        print "oops"
        bashCommand = "rm " + fileForUrl
        process = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)
    finally:
        print url
