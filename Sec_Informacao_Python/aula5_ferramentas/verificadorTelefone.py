import phonenumbers
from phonenumbers import geocoder

fone = input('Digite o número ex(+5588999999999): ')
fone_number = phonenumbers.parse(fone)

print(geocoder.description_for_number(fone_number, 'pt'))

