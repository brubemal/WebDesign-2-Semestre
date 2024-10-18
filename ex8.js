let produto = {
    "nome":"Banana",
    "preco":"20",
    "quantidade":"30",
    calcularTotal : function(){
        return this.preco * this.quantidade;
    }
}
console.log(produto.calcularTotal());