function retornePar(arr){
    return arr.filter(function(elemento){
        return elemento % 2 === 0;
    });
}

let arr = [2, 3, 5, 7, 14, 34, 20];

console.log(retornePar(arr));