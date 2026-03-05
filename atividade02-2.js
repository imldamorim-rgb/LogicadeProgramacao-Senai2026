// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
const aluno = {
    nome: "Augusto",
    idade: 17,
    curso: "Desenvolvimento de Sistemas"
}
console.log(aluno.nome)
//
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
const informações = {
    cidade: 'Jaraguá do Sul',
    rua: 'Jones Chiodini'
}
informações.endereco = 'R. Jones Chiodini - Vila Nova - 253 '
console.log(informações.cidade)
//
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
aluno.habilidades = ["dormir", "Fritar ovo", "jogar videogame"]
console.log(aluno.habilidades[0])
//
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:
let números = [9.5, 10, 5.6, 8]
números.aluno = 'Victoria Alencar'

console.log(`Nome do aluno: ${números.aluno}, Sua notas: ${números}.`)
//
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
const nomeParentesco = {
    nomePrincipal: 'Catia',
    Parentesco: 'irmã'
}
nomeParentesco.responsavel = 'Maisa'
console.log(`Nome do responsável: ${nomeParentesco.responsavel}`)
nomeParentesco.responsavel = 'Carla'
console.log(`Nome do responsável: ${nomeParentesco.responsavel}`)
//
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// d) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
let listaDeAlunos = [aluno]
const aluno2 = {
    nome: "Alceu",
    idade: 47,
    curso: "Contabilidade"
}
const aluno3 = {
    nome: "Gabriela",
    idade: 21,
    curso: "Enfermagem"
}
listaDeAlunos.push(aluno2, aluno3)
console.log(listaDeAlunos[1])
//
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:
let listaDeAlunos2 = [
    {
        nome: "Leticia",
        idade: 18,
        notas: [2, 8.5, 9, 4.7]
    },
    {
        nome: "Jamilly",
        idade: 17,
        notas: [5, 6, 3.5, 9]
    },
    {
        nome: "Lucas",
        idade: 16,
        notas: [9, 10, 9, 8.5]
    }
]
console.log(listaDeAlunos2)
//
console.log("_______________________________");
