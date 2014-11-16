import requests, json
from pprint import pprint

link = "http://api.eia.gov/series/?api_key=3720CC94ABB0B8AF8F1D9A1B790F1F27&series_id=PET.MCRFP"
name = "FL"#we will only need to change this part for any other state.
end = "1.M"

myUrl = link + name + end
foo = 'http://api.eia.gov/series/?api_key=3720CC94ABB0B8AF8F1D9A1B790F1F27&series_id=PET.MCRFPFL1.M'
data = requests.get(myUrl).json()

print data['series'][0][u'data']
#[0]
