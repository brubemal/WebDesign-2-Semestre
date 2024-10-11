let texto = "Disciplina de Programação para Web";

function inverterTexto(texto) {
    let textoInvertido = ''; 

    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i]; 
    }

    return textoInvertido; 
}

let textoInvertido = inverterTexto(texto);
console.log(textoInvertido);
