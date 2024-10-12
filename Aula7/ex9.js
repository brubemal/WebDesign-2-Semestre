function verificarEmail(email) {

    let possuiArroba = email.includes("@");
    let possuiPonto = email.includes(".");
    let posArroba = email.indexOf("@");
    let posPonto = email.indexOf(".");


    return possuiArroba && possuiPonto && posPonto > posArroba;
}


console.log(verificarEmail("email@teste.com"));   
console.log(verificarEmail("email@testecom"));     
console.log(verificarEmail("emailteste.com"));      
console.log(verificarEmail("email@teste.com"));     
