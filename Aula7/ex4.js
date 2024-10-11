function emailFacens(primeiroNome, nomedoMeio, ultimoNome){
    return primeiroNome + "." + ultimoNome + "@facens.br";
}

let result = emailFacens("Bruno","Bertolini","Maluf");
console.log(result.toLowerCase())