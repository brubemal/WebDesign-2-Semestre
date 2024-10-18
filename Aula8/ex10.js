let aluno = {
    "nome":"Bruno",
    "Idade":18,
    "Curso":"Engenharia da Computação",
    "Matricula":248037,
    mostraInformações: function(){
        if(aluno.Idade >= 18){
            return this.nome + "\n" +  this.Idade + "\n" + this.Curso + "\n" + this.Matricula;
        }
        else{
            console.log("Não permitido menores de 18 anos")
        }
    }
};
console.log(aluno.mostraInformações())