import itertools

str = input("Digite o que deseja permutar: ")
resultado = itertools.permutations(str, len(str))

for i in resultado:
    print(''.join(i))