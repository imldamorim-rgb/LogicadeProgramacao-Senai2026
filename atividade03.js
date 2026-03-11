// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js

// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


let todasInformacoes = require('readline-sync');


// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.


// → Seu código aqui:


console.log("iniciando o programa...")
console.info("Info: Está atividade é sobre Input e Output.")
console.warn("Aviso: Sempre inicie o programa com node e o nome do arquivo.")
console.error("Erro: Você não prestou atenção.")


console.log("_______________________________");




// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."


// → Seu código aqui:


const nomeUsuario = todasInformacoes.question('Digite seu nome: ')
const idadeUsuario = todasInformacoes.questionInt('Digite sua idade: ')
console.log(`Olá, ${nomeUsuario}! Você tem ${idadeUsuario} anos.`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().


// → Seu código aqui:


const nomeFicha = todasInformacoes.question('Digite seu nome: ')
const idadeFicha = todasInformacoes.questionInt('Digite sua idade:')
const cidadeFicha = todasInformacoes.question('Digite sua cidade: ')
//
ficha = {
    nome: 'Manuela',
    idade: 12,
    cidade: 'Curitiba'
}
//
console.table(ficha)



console.log("_______________________________");



// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.


// → Seu código aqui:

const maiorIdade = todasInformacoes.keyInYN('Voce possui mais de 18 anos?')
const gostaFisica = todasInformacoes.keyInYN('Voce gosta de Fisica?')
//
console.log(`O usuário é maior de idade? ${maiorIdade} e gosta de Fisica? ${gostaFisica}`)


console.log("_______________________________");




// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().


// → Seu código aqui:


console.log('Informe 3 comidas favoritas')
    let comida1 = todasInformacoes.question('Comida Favorita: ')
    let comida2 = todasInformacoes.question('Comida Favorita: ')
    let comida3 = todasInformacoes.question('Comida Favotita: ')
//
console.log('Informe 3 comidas favoritas')
const comidasFavoritas = [comida1, comida2, comida3]
//
console.table(comidasFavoritas)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().


// → Seu código aqui:

let cadastroPessoal = {
    nome: todasInformacoes.question("Informe seu nome: "),
    profissao: todasInformacoes.question("Informe sua profissao: "),
    cidade: todasInformacoes.question("Informe sua cidade: ")
}
//
console.table(`Me chamo ${cadastroPessoal.nome}. Profissao: ${cadastroPessoal.profissao} e moro na cidade de: ${cadastroPessoal.cidade}.`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.


// → Seu código aqui:


let pessoa1 = {
   nome: todasInformacoes.question('Nome: '),
   idade: todasInformacoes.questionInt('Idade: '),
   endereco: {
       cidade: todasInformacoes.question('Cidade:'),
       rua: todasInformacoes.question('Rua:'),
       numero: todasInformacoes.questionInt('Numero:')
   }
}


let pessoa2 = {
   nome: todasInformacoes.question('Nome: '),
   idade: todasInformacoes.questionInt('Idade: '),
   endereco: {
       cidade: todasInformacoes.question('Cidade:'),
       rua: todasInformacoes.question('Rua:'),
       numero: todasInformacoes.questionInt('Numero:')
   }
}


let pessoa3 = {
   nome: todasInformacoes.question('Nome: '),
   idade: todasInformacoes.questionInt('Idade: '),
   endereco: {
       cidade: todasInformacoes.question('Cidade:'),
       rua: todasInformacoes.question('Rua:'),
       numero: todasInformacoes.questionInt('Numero:')
   }
}


let listaDeUsuarios = [pessoa1, pessoa2, pessoa3]
//
console.table(listaDeUsuarios)
//
console.log(listaDeUsuarios[1].nome, listaDeUsuarios[1].idade)
console.log(listaDeUsuarios[2].endereco)
console.log(listaDeUsuarios[0].nome, listaDeUsuarios[0].endereco.rua)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.


// → Seu código aqui:

let usuario1 = {
       nome: todasInformacoes.question('Nome: '),
       nota1: todasInformacoes.questionInt('Nota 1: '),
       nota2: todasInformacoes.questionInt('Nota 2: '),
       nota3: todasInformacoes.questionInt('Nota 3: ')
    }

let usuario2 = {
    nome: todasInformacoes.question('Nome: '),
    nota1: todasInformacoes.questionInt('Nota 1: '),
    nota2: todasInformacoes.questionInt('Nota 2: '),
    nota3: todasInformacoes.questionInt('Nota 3: ')
}

let usuario3 = {
    nome: todasInformacoes.question('Nome: '),
    nota1: todasInformacoes.questionInt('Nota 1: '),
    nota2: todasInformacoes.questionInt('Nota 2: '),
    nota3: todasInformacoes.questionInt('Nota 3: ')
}

let turma = [usuario1, usuario2, usuario3]

console.table(turma)

console.log(turma[1].nome, turma[1].nota1)
console.log(turma[2].nome, turma[2].nota2)
console.log(turma[0].nome, turma[0].nota3)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".


// → Seu código aqui:

let produto = {
    produtoNome: todasInformacoes.question('Nome: '),
    categoria: todasInformacoes.question('Categoria: '),
    preco: todasInformacoes.questionFloat('Preco: '),
    quantidade: todasInformacoes.questionInt('Quantidade em estoque: '),
    disponivel: todasInformacoes.keyInYN('Esta disponivel para venda? ')
}

console.table(produto)
console.log(`Produto: ${produto.produtoNome} | Categoria: ${produto.categoria} | Estoque: ${produto.quantidade} un.`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

// → Seu código aqui:

let medicamento1 = {
    nome: todasInformacoes.question('Nome: '),
    preco: todasInformacoes.questionFloat('Preco: '),
    estoque: todasInformacoes.keyInYN('Em estoque? ')
}

let medicamento2 = {
    nome: todasInformacoes.question('Nome: '),
    preco: todasInformacoes.questionFloat('Preco: '),
    estoque: todasInformacoes.keyInYN('Em estoque? ')
}

let estoqueFarmacia = []

estoqueFarmacia.push(medicamento1, medicamento2)

console.table(estoqueFarmacia)
console.log(estoqueFarmacia[1].nome, estoqueFarmacia[1].preco)
console.log(estoqueFarmacia[0].nome, estoqueFarmacia[0].estoque)


console.log("_______________________________");