from bs4 import BeautifulSoup
import urllib
import urllib2

url = "http://www.portal.state.pa.us/portal/server.pt/community/2014/21611/february_2014_warn_notices/1725222"

content = urllib2.urlopen(url).read()
soup = BeautifulSoup(content)

for link in soup.find_all('a'):
    print(link.get('href'))

for table in soup.find_all('tr'):
    print(link.get_text())
