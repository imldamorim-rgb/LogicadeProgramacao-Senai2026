// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
let lerTudo = require('readline-sync')
//
// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:

let jogador = {
    nome: lerTudo.question(`Nome do jogador: `),
    pontos: 0,
};
console.log(   );

console.log(`Seja Bem-Vindo(a) ${jogador.nome}.
Este é um quiz de filmes, cada pergunta terá somente uma resposta correta, basta seleciona-lá. 
Boa sorte!`);
console.log(   );

console.log(`1. Qual filme ganhou o Oscar de Melhor Filme em 1994?
    A) Pulp Fiction
    B) Forrest Gump
    C) Um Sonho de Liberdade
    D) O Rei Leão`);
console.log(   );

let resp1 = lerTudo.question(`Digite sua resposta: `);

switch(resp1){
    case "A":
    case "a":
        console.log(`Errado! A resposta certa era a opção B.`);
        break;
    case "B":
    case "b":
        console.log(`Correto!`);
        jogador.pontos += 1
        break;
    case "C":
    case "c":
        console.log(`Errado! A resposta certa era a opção B.`);
        break;
    case "D":
    case "d":
        console.log(`Errado! A resposta certa era a opção B.`);
        break;
    default:
        console.log(`Opção inválida, nenhum ponto atribuído.`);
}
console.log(   );

console.log(`2. Quem dirigiu Titanic?
    A) Steven Spielberg
    B) James Cameron
    C) Christopher Nolan
    D) Ridley Scott`);
console.log(   );

let resp2 = lerTudo.question(`Digite sua resposta: `);

switch(resp2){
    case "A":
    case "a":
        console.log(`Errado! A resposta certa era a opção B.`);
        break;
    case "B":
    case "b":
        console.log(`Correto!`);
        jogador.pontos += 1
        break;
    case "C":
    case "c":
        console.log(`Errado! A resposta certa era a opção B.`);
        break;
    case "D":
    case "d":
        console.log(`Errado! A resposta certa era a opção B.`);
        break;
    default:
        console.log(`Opção inválida, nenhum ponto atribuído.`);
}
console.log(   );

console.log(`3. Em Harry Potter, qual é a casa do Harry?
    A) Sonserina
    B) Corvinal
    C) Lufa-Lufa
    D) Grifinória`);
console.log(   );

let resp3 = lerTudo.question(`Digite sua resposta: `);

switch(resp3){
    case "A":
    case "a":
        console.log(`Errado! A resposta certa era a opção D.`);
        break;
    case "B":
    case "b":
        console.log(`Errado! A resposta certa era a opção D.`);
        break;
    case "C":
    case "c":
        console.log(`Errado! A resposta certa era a opção D.`);
        break;
    case "D":
    case "d":
        console.log(`Correto!.`);
        jogador.pontos += 1
        break;
    default:
        console.log(`Opção inválida, nenhum ponto atribuído.`);
}
console.log(   );

console.log(`4. Qual desses filmes é da Marvel?
    A) Batman
    B) Homem de Ferro
    C) Coringa
    D) Mulher-Maravilha`);
console.log(   );

let resp4 = lerTudo.question(`Digite sua resposta: `);

switch(resp4){
    case "A":
    case "a":
        console.log(`Errado! A resposta certa era a opção B.`);
        break;
    case "B":
    case "b":
        console.log(`Correto!`);
        jogador.pontos += 1
        break;
    case "C":
    case "c":
        console.log(`Errado! A resposta certa era a opção B.`);
        break;
    case "D":
    case "d":
        console.log(`Errado! A resposta certa era a opção B.`);
        break;
    default:
        console.log(`Opção inválida, nenhum ponto atribuído.`);
}
console.log(   );

console.log(`5. Qual filme tem o personagem Jack Sparrow?
    A) O Senhor dos Anéis
    B) Piratas do Caribe
    C) Avatar
    D) Indiana Jones`);
console.log(   );

let resp5 = lerTudo.question(`Digite sua resposta: `);

switch(resp5){
    case "A":
    case "a":
        console.log(`Errado! A resposta certa era a opção B.`);
        break;
    case "B":
    case "b":
        console.log(`Correto!`);
        jogador.pontos += 1
        break;
    case "C":
    case "c":
        console.log(`Errado! A resposta certa era a opção B.`);
        break;
    case "D":
    case "d":
        console.log(`Errado! A resposta certa era a opção B.`);
        break;
    default:
        console.log(`Opção inválida, nenhum ponto atribuído.`);
}
console.log(   );

console.log(`Você fez ${jogador.pontos} de 5 pontos.`);

switch(jogador.pontos) {
    case 5:
        console.log(`Perfeito! Você é um expert!`);
        break;
    case 4:
        console.log(`Muito bem! Quase lá!`);
        break;
    case 3:
        console.log(`Bom trabalho, mas pode melhorar.`);
        break;
    case 2:
    case 1:
        Console.log(`Nheee, você tem que assistir mais filmes!`);
        break;
    case 0:
        console.log(`VIX, tente novamente!`);
}
console.log(   );

let resultado = {
    jogador: jogador.nome, 
    pontos: jogador.pontos, 
    total: 5, 
    aprovado: jogador.pontos >= 3,
}
console.table(resultado); 




