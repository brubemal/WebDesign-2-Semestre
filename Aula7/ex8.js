
function qtdVog(texto) {
    let count = 0
    let vogais = "aeiou"
    for(let i=0;i<texto.length;i++){
        if(vogais.includes(texto[i]))
        count++;
    }
    return count;
}
console.log(qtdVog("Brubemal"));