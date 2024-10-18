let array = [10,25,5, 30, 40, 3, 9];
function maiorNum(num){
    let maior = 0;
    for(let i of array){
        if(i > maior){
            maior = i;
        }
    }
    return maior;
}
console.log(maiorNum(array));