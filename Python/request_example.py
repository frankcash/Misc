import requests

r = requests.get("https://github.com/")

print(r.status_code)

