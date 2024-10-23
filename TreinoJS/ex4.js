let numeros = [1,2,3,4,5,6,7,8,9,10]
function Impares(array)
{
    for(let i of array) {
        if(i % 2 != 0)
            console.log(i)
    }
}
console.log(Impares(numeros))