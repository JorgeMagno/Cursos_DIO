function retornaSaldo(arr, saldo){
    return arr.reduce((acc, currentValue) => acc - currentValue, saldo);
}

const compras = [20, 38, 50, 77];

console.log(retornaSaldo(compras, 500));