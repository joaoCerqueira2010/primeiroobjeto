function nome_aluno(){

let aluno = {

nome :'joao cerqueira',
idade : 15,
altura: 1.80,
nota  : 9.5,


};
//alert(aluno.nome);

document.getElementById('nome_aluno').textContent = 'nome: '+  aluno.nome
document.getElementById('idade_aluno').textContent = 'idade: '+ aluno.idade
document.getElementById('altura_aluno').textContent = 'altura: '+ aluno.altura
document.getElementById('nota_aluno').textContent = 'nota final: '+ aluno.nota
}