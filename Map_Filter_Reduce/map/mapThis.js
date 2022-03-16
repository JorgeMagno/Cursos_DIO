const dobro = {
    valor:2,
};

let arr = [2, 3, 5, 7]

arr.map(function(elemento){
    return console.log(elemento * this.valor);
 }, dobro);
