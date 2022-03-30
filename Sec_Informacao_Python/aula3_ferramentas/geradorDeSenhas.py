import random, string

tamanho = int(input("Digite o tamanho da senha: "))

chars = string.ascii_letters + string.digits + 'çÇ!@#$%&*()_-+='
rnd = random.SystemRandom()

#criação da senha
print(''.join(rnd.choice(chars) for i in range(tamanho)))