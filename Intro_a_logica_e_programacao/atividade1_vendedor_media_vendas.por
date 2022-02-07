programa
{
	
	funcao inicio()
	{
		inteiro venda_jan, venda_fev, venda_mar, venda_abr
		real media_vendas
		cadeia vendedor

		escreva("Digite o nome do vendedor: ")
		leia(vendedor)
		escreva("Digite o número de vendas em Janeiro: ")
		leia(venda_jan)
		escreva("Digite o número de vendas em Fevereiro: ")
		leia(venda_fev)
		escreva("Digite o número de vendas em Março: ")
		leia(venda_mar)
		escreva("Digite o número de vendas em Abril: ")
		leia(venda_abr)

		media_vendas = (venda_jan+venda_fev+venda_mar+venda_abr)/4

		escreva("O vendedor " + vendedor + " teve como média de vendas " + media_vendas)
		
		escreva("\n Vendas em Janeiro: " + venda_jan)
		escreva("\n Vendas em Fevereiro: " + venda_fev)
		escreva("\n Vendas em Março: " + venda_mar)
		escreva("\n Vendas em Abril: " + venda_abr)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 594; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */