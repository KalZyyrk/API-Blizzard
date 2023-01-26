import requests

data =  {
    'grant_type': 'client_credentials',
}

response = requests.post('https://oauth.battle.net/token', data=data, auth=('3eed7c34c7b842c1bfdd3c6e0b8a2f20', 'u75xKWYV0HNAr4cajpUE7WzsHNnOhWnU'))

print(response)