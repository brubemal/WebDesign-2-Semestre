let numeros = [10, 20 ,30 ,40 ,50];
function somaArray(array){
    let soma = 0;
    for(let i of numeros){
        soma += i;
    }
    return soma;
}
console.log(somaArray(numeros));