function verPalindromo(texto) {
    let textoInvertido = ''; 

    
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i]; 
    }

    if (textoInvertido === texto) {
        console.log("É um palíndromo");
    } else {
        console.log("Não é um palíndromo");
    }
}

verPalindromo("radar");  
verPalindromo("teste");  
