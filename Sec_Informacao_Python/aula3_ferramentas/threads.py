from threading import Thread
import time

def carro(velocidade, motorista):
    trajeto = 0
    while trajeto <= 100:
        print('Carro com motorista {} no Km {} \n'.format(motorista, trajeto))
        trajeto += velocidade
        time.sleep(0.5)

t_carro1 = Thread(target=carro, args=[20, 'Magno'])
t_carro2 = Thread(target=carro, args=[25, 'Jorge'])

t_carro1.start()
t_carro2.start()