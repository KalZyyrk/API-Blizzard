import os
import requests
from dotenv import load_dotenv
load_dotenv()


def getAccessToken():
    res = requests.post('https://oauth.battle.net/token', data={'grant_type': 'client_credentials', }, auth=(
        os.environ["CLIENT-ID"], os.environ["CLIENT-SECRET"]))
    return res.json()['access_token']


token = getAccessToken()
