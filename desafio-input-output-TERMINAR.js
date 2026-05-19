// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
    let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:

// let cadastro = {
//     nome: lerTeclado.question(`Informe seu nome: `),
//     idade: lerTeclado.questionInt(`Informe seua idade: `),
//     profissao: lerTeclado.question(`Informe sua profissao: `),
//     cidade: lerTeclado.question(`Informe sua cidade: `),
//     gostaJS: lerTeclado.keyInYN(`Gosta de JavaScript?  `),
//     comida: [lerTeclado.question(`Informe suas comidas favoritas: `)],
//     pessoas: {
//         nome: lerTeclado.question(`Informe o nome da pessoa com que mora: `),
//         idade: lerTeclado.questionInt(`Informe a idade desta pessoa: `),
//     }
// }

// console.table(cadastro)
// console.log(`Nome: ${cadastro.nome}. 
// Idade: ${cadastro.idade} anos. 
// Profissão: ${cadastro.profissao} em ${cadastro.cidade}. 
// Gosta de JS: ${cadastro.gostaJS}
// Comidas Favoritas: ${cadastro.comida}
// Pessoa com quem mora: ${cadastro.pessoas.nome}`)


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e cidade de cada uma).
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

// let pessoa1 = {
//     nome: lerTeclado.question(`Digite seu nome: `),
//     idade: lerTeclado.question(`Digite sua idade: `),
//     cidade: lerTeclado.question(`Informe sua cidade: `)
// }

// let pessoa2 = {
//     nome: lerTeclado.question(`Digite seu nome: `),
//     idade: lerTeclado.question(`Digite sua idade: `),
//     cidade: lerTeclado.question(`Informe sua cidade: `)
// }

// let amigos = [pessoa1, pessoa2]
// console.table(amigos)

// console.log(amigos[1].nome, amigos[1].idade)
// console.log(amigos[1].cidade)
// console.log(amigos[0].nome)


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:

// apelido = lerTeclado.question(`Digite seu apelido: `)
// jogoFavorito = lerTeclado.question(`Qual seu jogo favorito: `)
// hTotaisJogadas = lerTeclado.questionFloat(`Horas totais jogadas: `)
// jogaTime = lerTeclado.keyInYN(`Joga em time? `)

// let perfil = {apelido, jogoFavorito, hTotaisJogadas, jogaTime}

// console.table(perfil)
// console.warn("Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade.")

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:

// let nome1 = lerTeclado.question(`Digite seu nome (1): `);
// let cidade1 = lerTeclado.question(`Digite sua cidade favorita (1): `);

// let nome2 = lerTeclado.question(`Digite seu nome (2): `);
// let cidade2 = lerTeclado.question(`Digite sua cidade favorita (2): `);

// let nome3 = lerTeclado.question(`Digite seu nome (3): `);
// let cidade3 = lerTeclado.question(`Digite sua cidade favorita (3): `);

// let pss1 = {nome1, cidade1};
// let pss2 = {nome2, cidade2};
// let pss3 = {nome3, cidade3};

// console.table(pss1);

// let viajantes = [pss1, pss2, pss3];
// console.table(viajantes);

// console.info(`Total de viajantes: ${viajantes.length}`)
// console.log(`Cidade favorita do 2 viajante: ${viajantes[1].cidade2}`)
// console.log(`Nome do 1 viajante: ${viajantes[0].nome1}`)

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 6 – Cardápio de Restaurante
// ------------------------------------------------------------
//
// Monte a estrutura de dados de um restaurante.
// Todos os dados do passo A devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A:
//   • Crie um objeto "restaurante" com:
//       - nome (string)
//       - tipoCozinha (string)   ex: "Italiana", "Japonesa"
//       - nota (number)          ex: 8.7
//       - aberto (boolean)
//       - endereco → objeto com: rua, numero, bairro, cidade
//       - cardapio → array com pelo menos 4 objetos de pratos, cada um com:
//           • nomePrato (string)
//           • preco     (number)
//           • vegano    (boolean)
//
// PASSO B: Acessos e exibições
//   • Exiba o nome do restaurante e sua nota.
//   • Exiba o endereço completo em uma única frase (rua, numero, bairro, cidade). ex. "O restaurante <nome> está localizado na <rua>, <numero>, <bairro>, <cidade>".
//   • Exiba o nome e o preço do 1º prato do cardápio.
//   • Exiba se o 3º prato é vegano ou não, usando template literal. ex. "O prato <nomePrato> é vegano: <vegano>".
//
// PASSO C: Alterações
//   • Altere o preço do 2º prato para um valor diferente.
//   • Adicione um novo prato ao cardápio usando push().
//   • Altere "aberto" para false.
//
// PASSO D: Relatório do cardápio
//   • Usando console.log() e template literals, exiba:
//       - Nome do restaurante, tipo de cozinha e nota
//       - Status: aberto ou fechado
//       - Quantos pratos há no cardápio (.length)
//       - Nome, preço e se é vegano de CADA prato (um prato por linha)
//
// → Seu código aqui:

let nome = lerTeclado.question(`Informe o nome do restaurante: `);
let tipoCozinha = lerTeclado.question(`Tipo de comida: `);
let nota = lerTeclado.questionFloat(`Nota: `);
let aberto = lerTeclado.keyInYN(`Esta aberto? `);
let endereco = {
    rua: lerTeclado.question(`Rua: `),
    numero: lerTeclado.questionInt(`Numero: `),
    bairro: lerTeclado.question(`Bairro: `),
    cidade: lerTeclado.question(`Cidade: `)
};

let cardapio = [];

for(let i = 0; i < 4; i++){
    let prato = {
        nomePrato: lerTeclado.question(`Nome do prato: `),
        preco: lerTeclado.questionFloat(`Preco do prato: `),
        vegano: lerTeclado.keyInYN(`É vegano? `)
    }
    cardapio.push(prato)
}

let restaurante = {
    nome,
    tipoCozinha,
    nota,
    aberto,
    endereco,
    cardapio
}


console.log("_______________________________");