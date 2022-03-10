function compara(a, b){

    /* validando números */
    if (isNaN(a) || isNaN(b)) return console.log("Defina dois números");

    if (a === null || b === null) return console.log("Operação inválida! Um dos valores é nulo.");

    var soma = a + b;
    
    if (a === b && soma < 10) console.log(`Os números ${a} e ${b} são iguais. A soma é ${soma}, sendo menor que 10 e 20.`)
    else if (a === b && soma > 10 && soma < 20) console.log(`Os números ${a} e ${b} são iguais. A soma é ${soma}, sendo maior que 10 e menor que 20.`)
    else if (a === b && soma > 20) console.log(`Os números ${a} e ${b} são iguais. A soma é ${soma}, sendo maior que 10 e 20.`)

    else if (a !== b && soma < 10) console.log(`Os números ${a} e ${b} não são iguais. A soma é ${soma}, sendo menor que 10 e 20.`)
    else if (a !== b && soma > 10 && soma < 20) console.log(`Os números ${a} e ${b} não são iguais. A soma é ${soma}, sendo maior que 10 e menor que 20.`)
    else console.log(`Os números ${a} e ${b} não são iguais. A soma é ${soma}, sendo maior que 10 e 20.`)

}

compara(0,12);