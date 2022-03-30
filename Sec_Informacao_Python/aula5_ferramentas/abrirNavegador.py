import webbrowser
from tkinter import *

root = Tk( )
root.title('Abrir Navegador')
root.geometry('300x300')

def abrirGoogle():
    webbrowser.open('www.google.com')

mygoogle = Button(root, text='Abrir o Google', command=abrirGoogle).pack(pady=20)
root.mainloop()