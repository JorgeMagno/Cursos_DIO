import socket

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

print("Socket cliente criado!")

host = 'localhost'
port = 5433

mensagem = "Olá, server!"

try:
    print(mensagem)
    s.sendto(mensagem.encode(), (host, 5432))

    dados, server =  s.recvfrom(4096)
    print("Resposta Server: {}".format(dados.decode()))
finally:
    print("Fechando conexão!")
    s.close()