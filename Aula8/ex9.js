let endereco = {
    rua: "Rua Exemplo",
    numero: 123,
    bairro: "Bairro Exemplo",
    cidade: "Cidade Exemplo"
};

for (let propriedade in endereco) {
    console.log(`${propriedade}: ${endereco[propriedade]}`);
}
