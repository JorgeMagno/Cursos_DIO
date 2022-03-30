import hashlib

str = input('Digite o que deseja codificar: ')
while True:
    menu = int(input('Escolha o tipo de Hash:\n'
                 '1 - MD5\n'
                 '2 - SHA1\n'
                 '3 - SHA256\n'
                 '4 - SHA512\n'))

    if menu == 1:
        resultado = hashlib.md5(str.encode('utf-8'))
        print('MD5: {}'.format(resultado.hexdigest()))
        break
    elif menu == 2:
        resultado = hashlib.sha1(str.encode('utf-8'))
        print('SHA1: {}'.format(resultado.hexdigest()))
        break
    elif menu == 3:
        resultado = hashlib.sha256(str.encode('utf-8'))
        print('SHA256: {}'.format(resultado.hexdigest()))
        break
    elif menu == 4:
        resultado = hashlib.sha512(str.encode('utf-8'))
        print('SHA512: {}'.format(resultado.hexdigest()))
        break
    else:
        print("Tente Novamente!")