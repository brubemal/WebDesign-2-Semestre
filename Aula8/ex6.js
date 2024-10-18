let aluno = {
    "nome":"Bruno",
    "Idade":18,
    "Curso":"Engenharia da Computação",
    "Matricula":248037,
    mostraInformações: function(){
        return this.nome + "\n" +  this.Idade + "\n" + this.Curso + "\n" + this.Matricula;
    }
};
console.log(aluno.mostraInformações());

