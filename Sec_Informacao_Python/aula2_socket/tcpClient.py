import socket, sys

def main():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0)
    except socket.error as e:
        print("Conexão falhou!")
        print(e)
        sys.exit()
    print("Socket criado!")

    host = input("Digite endereço a ser conectado: ")
    port = input("Digite a porta: ")

    try:
        s.connect((host, int(port)))
        print("Cliente conectado com sucesso em {} porta {}".format(host, port))
        s.shutdown(2)
    except socket.error as e:
        print("Não foi possível conectar ao host {}".format(host))
        print(e)
        sys.exit()

if __name__ == "__main__":
    main()