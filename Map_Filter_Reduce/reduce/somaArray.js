function somaArray(arr){
    return arr.reduce((acc, currentValue) => acc + currentValue, 0);
}

const array = [2, 3, 5, 7];

console.log(somaArray(array));