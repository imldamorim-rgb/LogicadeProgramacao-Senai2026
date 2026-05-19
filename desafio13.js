// ============================================================
//   DESAFIOS – Matriz
// ============================================================
let lerTeclado = require(`readline-sync`)

// ------------------------------------------------------------
// DESAFIO 1 – Jogo da velha simplificado
// ------------------------------------------------------------
// a) Declare um tabuleiro 3x3 vazio (preencha os espaços vazios com "-") e exiba-o.
// b) Faça 5 jogadas alternando entre "X" e "O":
//    - Peça a linha e a coluna.
//    - Se a posição já estiver ocupada, exiba aviso e peça novamente.
//    - Após cada jogada, exiba o tabuleiro com console.table().
// c) Não precisa verificar vencedor — apenas alternar X e O.

// → Seu código aqui:

// //a
// let tabuleiro = [
//     ["-","-","-"],
//     ["-","-","-"],
//     ["-","-","-"],
// ]

// console.table(tabuleiro)

// //b

// let jogador = "X";
// let jogadas = 0;

// while(jogadas < 5){

//   let linha = lerTeclado.questionInt(`jogador ${jogador} - Linha (0 a 2): `)
//   let coluna = lerTeclado.questionInt(`jogador ${jogador} - Coluna (0 a 2): `)

//   if(
//     linha < 0 || linha > 2 || coluna < 0 || coluna > 2
//   ) {
//     console.log(`Posição invalída.`)
//     continue;
//   }
//   if(tabuleiro[linha][coluna] !== "-"){
//     console.log(`Posição ocupada.`)
//     continue;
//   }
//   tabuleiro[linha][coluna] = jogador;
//   console.table(tabuleiro);
//   jogador = jogador === "X" ? "O" : "X"
//   jogadas++
// }

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Batalha naval simplificada
// ------------------------------------------------------------
// a) Crie um tabuleiro 5x5 (matriz de objetos):
//    cada célula = { temNavio: false, atingida: false }
// b) Posicione 5 navios em coordenadas aleatórias utilizando Math.random()
//    Garanta que não haja repetição de posição.
// c) Usando while, peça ao usuário tiros (linha e coluna).
//    - Se acertar:  exiba "Acertou!" (e marque atingida = true).
//    - Se errar:    exiba "Água..."
//    - Não permita atirar 2x na mesma posição.
// d) Após cada tiro, mostre o "mapa":
//    "~" = água, "O" = navio não atingido, "X" = navio atingido.
// e) Pare quando todos os 5 navios forem atingidos.
// f) Exiba o número total de tiros usados.

// → Seu código aqui:

// //a
//  let mapa = [];

//  for(let i = 0; i < 5; i++){
//   let linha = []
//     for(let j = 0; j < 5; j++){
//     linha.push({
//       temNavio: false,
//       atingida: false,
//     })
//   } mapa.push(linha)
// }

// let navios = 0;

// while(navios < 5){
//   let linha = Math.floor(Math.random() * 5)
//   let coluna = Math.floor(Math.random() * 5)

//   if(!mapa[linha][coluna].temNavio){
//     mapa[linha][coluna].temNavio = true;

//     navios++
//   }
// }

// let acertos = 0;
// let tiros = 0;

// while(acertos < 5){

//   let linha = lerTeclado.questionInt(`Linha do tiro (0 a 4):`)
//   let coluna = lerTeclado.questionInt(`Linha da coluna (0 a 4): `)

//   if(linha < 0 || linha > 4 || coluna < 0 || coluna > 4){
//     console.log(`Poição inválida.`)
//     continue;
//   }
//   if(mapa[linha][coluna].atingida){
//     console.log(`Você já atirou aqui.`)
//     continue;
//   }
//   mapa[linha][coluna].atingida = true
//   tiros++

//   if(mapa[linha][coluna].temNavio){
//     console.log(`Acertou!`)
//     acertos++
//   } else{
//     console.log(`Água...`)
//   }
//   let exibirMapa = []

//   for(let i = 0; i < 5; i++){
//     let linhaMapa = []
//     for(let j = 0; j < 5; j++){
//       if(mapa[i][j].temNavio && mapa[i][j].atingida){
//         linhaMapa.push(`X`)
//       } else{
//         linhaMapa.push(`~`)
//       }
//     }
//     exibirMapa.push(linhaMapa)
//   }
//   console.table(exibirMapa)
// }

// console.log(`Todos os navios foram destruídos em ${tiros} tiros.`)

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Boletim escolar com console.table
// ------------------------------------------------------------
// a) Utilizando:
const turma = [
  { nome: "Ana",    notas: [8.0, 7.5, 9.0, 6.5] },
  { nome: "Bruno",  notas: [4.0, 5.5, 6.0, 5.0] },
  { nome: "Carla",  notas: [9.5, 9.0, 9.5, 10]  },
  { nome: "Diego",  notas: [7.0, 6.5, 7.0, 8.5] },
  { nome: "Eva",    notas: [3.5, 4.0, 5.0, 4.5] },
];
// b) Construa um vetor 'boletim' onde cada item seja:
//    { nome, b1, b2, b3, b4, media, situacao }
//    - situacao: "Aprovado" (>=7), "Recuperação" (>=5 e <7), "Reprovado" (<5)
// c) Exiba o boletim com console.table().
// d) Exiba também:
//    - Aluno(a) com a maior média.
//    - Aluno(a) com a menor média.
//    - Média geral da turma.
//    - Quantidade de aprovados, recuperação e reprovados.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Cinema com sessões
// ------------------------------------------------------------
// Sistema simplificado de reserva para 3 SESSÕES diferentes,
// cada uma com sua matriz própria de poltronas (4 fileiras x 6 poltronas).
//
// a) Crie uma estrutura:
//    sessoes = [
//      { filme: "Ação X",   sala: matriz4x6 com "L" },
//      { filme: "Drama Y",  sala: matriz4x6 com "L" },
//      { filme: "Comédia Z", sala: matriz4x6 com "L" },
//    ]
// b) Usando do...while, exiba o menu:
//    1 – Listar sessões e ocupação (% ocupada de cada uma)
//    2 – Mostrar mapa de uma sessão (peça o índice 0..2)
//    3 – Reservar poltrona (peça sessão, fileira e poltrona)
//    4 – Cancelar reserva  (peça sessão, fileira e poltrona)
//    0 – Sair
// c) Valide TODOS os inputs e nunca quebre o programa.

// → Seu código aqui:


console.log("_______________________________");