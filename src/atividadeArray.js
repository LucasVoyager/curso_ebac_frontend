const alunos = ['Lucas', 'Gustavo', 'Julia', 'Paula', 'Gomes']

const alunosAdicionaNotas = alunos.map(function(item) {
    return {
        nome: item,
        nota: 6,
    }
})

alunosAdicionaNotas.push({
    nome: "Carlos",
    nota: 5
}, {
    nome: "Augusto",
    nota: 4.5
}, {
    nome: "Tarcila",
    nota: 4
})

const filtraNotas = aluno => aluno.nota >= 6;

const alunosAprovados = alunosAdicionaNotas.filter(filtraNotas)


console.log(alunosAprovados);