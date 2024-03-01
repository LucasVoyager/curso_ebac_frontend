"use strict";

var alunos = ['Lucas', 'Gustavo', 'Julia', 'Paula', 'Gomes'];
var alunosAdicionaNotas = alunos.map(function (item) {
  return {
    nome: item,
    nota: 6
  };
});
alunosAdicionaNotas.push({
  nome: "Carlos",
  nota: 5
}, {
  nome: "Augusto",
  nota: 4.5
}, {
  nome: "Tarcila",
  nota: 4
});
var filtraNotas = function filtraNotas(aluno) {
  return aluno.nota >= 6;
};
var alunosAprovados = alunosAdicionaNotas.filter(filtraNotas);
console.log(alunosAprovados);