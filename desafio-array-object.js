// ============================================================
//   DESAFIOS (para quem já terminou as atividades 02 e 02-2) – Arrays e Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Acessar e alterar elementos de array
// ------------------------------------------------------------
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
// a) Acesse o primeiro e o terceiro elemento e exiba com console.log().
// b) Substitua o segundo elemento por 'abacaxi' usando atribuição direta.

// → Seu código aqui:
console.log(frutas[0], frutas[2])
frutas[1] = "abacaxi"
console.log(frutas)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Criar novos arrays por seleção
// ------------------------------------------------------------
const letras1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// a) Crie um novo array contendo apenas o primeiro, o terceiro e o sexto elementos.
// b) Crie outro array que contenha os dois últimos elementos.
// Observação: Utilize o valor de um array dentro de outro, exemplo: array2[array1[3], array[5]]

// → Seu código aqui:

let letrasb = [letras1[0], letras1[2], letras1[5]]
let letrasc = [letras1[4], letras1[5]]
console.log(letras1, letrasb, letrasc)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Batata?
// ------------------------------------------------------------
const letras2 = ['a', 'b', 'c', 'd', 'e', 't'];
// a) Crie um novo array que retorne a palavra "batata" ao ser exibido no console.
let batata = ["batata"]
console.log(batata)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Objetos: acessar e adicionar propriedades
// ------------------------------------------------------------
const pessoa = { 
  nome: 'Junin',
  idade: 22,
  endereco: {
    cidade: 'Porto Alegre',
    rua: 'Avenida Brasil'
  } 
};
// a) Acesse e exiba a propriedade 'nome' e 'cidade' do objeto 'pessoa'.
// b) Adicione uma nova propriedade 'curso' com valor 'Programação' ao objeto 'pessoa'.

// → Seu código aqui:
//a
console.log(pessoa.nome, pessoa.endereco.cidade);
//b
pessoa.curso = "programação"
console.log(pessoa)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e arrays dentro de objetos
// ------------------------------------------------------------
const perfil = {
  usuario: 'ana123',
  dados: { 
    nome: 'Ana',
    idade: 19,
    interesses: ['música', 'fotografia', 'viagens']
  }
};
// a) Exiba o nome da pessoa cadastrada em 'perfil'.
// b) Exiba o segundo interesse da pessoa.
// c) Altere o primeiro interesse para 'arte' por atribuição direta.
// d) Exiba o nome, a idade e a lista de interesse da pessoa.

// → Seu código aqui:

//a
console.log(perfil.usuario)
//b
console.log(perfil.dados.interesses[1])
//c
perfil.dados.interesses[0] = "arte"
//d
console.log(perfil.usuario, perfil.dados.idade, perfil.dados.interesses)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Criar um catálogo (array de objetos e objeto indexado)
// ------------------------------------------------------------
// Crie um array 'produtos' contendo 3 produtos, onde cada produto é um objeto contendo:
//    id(number), nomeDoProduto(string) e preço(number).
// Crie um objeto 'catalogo' onde as chaves são os ids dos produtos (1, 2, 3)
//    e os valores são o nome dos produtos correspondentes.

// → Seu código aqui:

//a
let produtos = [
  produto1 = {
    id: 895623,
    nomeDoProduto: "Computador",
    preco: 350.99
  },
  produto2 = {
    id: 789456,
    nomeDoProduto: "Marca texto",
    preco: 7.50
  },
  produto3 = {
    id: 124578,
    nomeDoProduto: "Mesa",
    preco: 1500.00
  },
];

//b
let catalogo = {
  chave1: produtos[0].id,
  nome: produtos[0].nomeDoProduto,
  chave2: produtos[1].id,
  nome2: produtos[1].nomeDoProduto,
  chave3: produtos[2].id,
  nome3: produtos[2].nomeDoProduto,
}
console.log(catalogo)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Estrutura composta: tarefas simples
// ------------------------------------------------------------
// Defina um array de tarefas com 3 objetos: { id, titulo, concluida(boolean) }.
// a) Marque a tarefa de id 2 como concluída por atribuição direta.
// b) Crie um novo array contendo apenas as tarefas que não estão concluídas
// c) Exiba o título de todas as tarefas do objeto.
// d) Exiba o título de todas as tarefas do array.

// → Seu código aqui:

let tarefas = [
  obj1 = {
    id: 895623,
    titulo: "matematica",
    concluida: true,
  },
  obj2 = {
    id: 215487,
    titulo: "fisica",
    concluida: false,
  },
  obj3 = {
    id: 756823,
    titulo: "quimica",
    concluida: true,
  },
];

//a
tarefas[1].concluida = true
//b
let tarefasIncompletas = [tarefas[2]]
//c
console.log(obj1.titulo,
obj2.titulo,
obj3.titulo)
//d
console.log(tarefas[0].titulo,
tarefas[1].titulo,
tarefas[2].titulo)




console.log("_______________________________");