import os
import requests
from dotenv import load_dotenv
load_dotenv()


data = {
    'grant_type': 'client_credentials',
}

res = requests.post('https://oauth.battle.net/token', data=data, auth=(
    os.environ["CLIENT-ID"], os.environ["CLIENT-SECRET"]))
response = res.json()

print(response)
