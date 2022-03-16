function validaArray(arr, num){

    if (!arr && !num) throw new ReferenceError('Algum parâmetro faltando.');

    if (typeof num !== "number") throw new TypeError('O Número deve ser do tipo number.');

    if (typeof arr !== "object") throw new TypeError('O Array deve ser do tipo objeto.');

    if (arr.length !== num) throw new RangeError("O tamanho do array é diferente do número indicado.");

    return arr;
}

try {
    console.log(validaArray([25,2], 4))
  } catch (e) {
    if(e instanceof TypeError){ 
        console.log(e.message);
    } 
    else if(e instanceof ReferenceError){
        console.log(e.message);
    } 
    else if(e instanceof RangeError){
        console.log(e.message);
    } 
    else {
        console.log('Outro tipo de erro!');
    }
  }