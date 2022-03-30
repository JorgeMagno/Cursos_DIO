import json
from urllib.request import urlopen

url = 'https://ipinfo.io/json'
resposta = urlopen(url)
dados = json.load(resposta)

ip = dados['ip']
org = dados['org']
regiao = dados['region']
pais = dados['country']

print('Detalhes do IP Externo:\n'
      'IP: {}\n'
      'Org: {}\n'
      'Região: {}\n'
      'País: {}\n'.format(ip,org,regiao,pais))