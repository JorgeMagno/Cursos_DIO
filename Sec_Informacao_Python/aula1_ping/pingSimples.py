#importando o módulo os
import os

#recebendo IP ou nome do host a ser pingado
ipHost = input("Digite o IP ou Host: ")

#realizando o ping no ip ou nome fornecido antes
os.system("ping -c 10 {}".format(ipHost))