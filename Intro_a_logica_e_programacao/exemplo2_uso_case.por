programa
{
	
	funcao inicio()
	{
		escreva("1 - Netflix \n2 - HBO Max \n3 - Amazon Prime Video \n4 - Sair")
		inteiro menu = 0
		escreva("\nDigite sua opção: ")
		leia(menu)

		escolha(menu)
		{
			caso 1:
			escreva("Abrindo Netflix!")
			pare

			caso 2:
			escreva("Abrindo HBO Max!")
			pare

			caso 3:
			escreva("Abrindo Prime Video!")
			pare

			caso 4:
			escreva("Saindo do menu...")
			pare

			caso contrario:
			escreva("Você tem que escolher uma das opções acima")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 178; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */