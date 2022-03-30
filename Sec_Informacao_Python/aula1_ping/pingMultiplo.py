#importando o módulo os
import os, time

#abrindo arquivo
with open('hosts.txt') as file:
    #criando lista contendo as linhas do arquivo
    dump = file.read().splitlines()

    #pingando os endereços contidos no arquivo
    for ip in dump:
        print('#' * 60)
        os.system("ping -c 10 {}".format(ip))
        time.sleep(2)