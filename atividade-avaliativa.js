//Faça um jogo da velha = Jogador X Jogador

let lerTeclado = require('readline-sync')

//============================================

console.log(`\n===== JOGO DA VELHA =====`)
console.log(`\nSeja bem vindo(a)!`)

console.log(`\n=== REGRAS ===`)
console.log(`
1 - O jogo terá 9 partidas.
2 - Basta fechar uma linha em qualquer direção.
3 - Ganha o jogador que completar uma sequência primeiro.

Boa sorte!
`)


let tabuleiro = [
   ["-","-","-"],
   ["-","-","-"],
   ["-","-","-"],
]

console.table(tabuleiro)


let jogador = "X";
let jogadas = 0;

//Repete o jogo enquanto o número de jogadas for menor que 9.
while(jogadas < 9){

 let linha = lerTeclado.questionInt(`\njogador ${jogador} - Linha (0 a 2): `)
 let coluna = lerTeclado.questionInt(`jogador ${jogador} - Coluna (0 a 2): `)

 //verifica se a posição digitada existe no tabuleiro. O tabuleiro vai de 0 até 2, números fora disso são inválidos.
 if(
   linha < 0 || linha > 2 || coluna < 0 || coluna > 2
 ) {
   console.log(`\nPosição invalída.`)
   continue;
 }

//Continue: faz o programa voltar pro início do while, sem continuar o resto do código

//Verifica se a posição já está ocupada
 if(tabuleiro[linha][coluna] !== "-"){
   console.log(`\nPosição ocupada.`)
   continue;
 }

 //Coloca o símbolo do jogador (X ou O) na posição escolhida.
 tabuleiro[linha][coluna] = jogador;

 console.table(tabuleiro)

 //Repete 3 vezes pra verificar linhas e colunas do tabuleiro
 for(let i = 0; i < 3; i++){

   //Verifica se uma linha inteira pertence ao jogador atual.
    if(
      tabuleiro[i][0] === jogador &&
      tabuleiro[i][1] === jogador &&
      tabuleiro[i][2] === jogador
   ){
      console.log(`\nJogador ${jogador} venceu!`)
      jogadas = 9;
      break;
   }
   
   //Verifica se uma coluna inteira pertence ao jogador atual.
   if(
      tabuleiro[0][i] === jogador &&
      tabuleiro[1][i] === jogador &&
      tabuleiro[2][i] === jogador
   ){
      console.log(`\nJogador ${jogador} venceu!`)
      jogadas = 9;
      break;
   }
 }

 //jogadas = 9 : Força o encerramento do while
 
 //Verifica se a diagonal inteira PRINCIPAL.
 if(
   (tabuleiro[0][0] === jogador &&
   tabuleiro[1][1] === jogador &&
   tabuleiro[2][2] === jogador) ||

   //Verifica a diagonal SECUNDÁRIA.
   (tabuleiro[0][2] === jogador &&
   tabuleiro[1][1] === jogador &&
   tabuleiro[2][0] === jogador)
 ){
   console.log(`\nJogador ${jogador} venceu!`)
   break;
 }

 //Troca o jogador:
 //Se for "x" vira "o"
 //Senão vira "x"
 jogador = jogador === "X" ? "O" : "X"
 
//Adiciona +1 no contador de jogadas.
 jogadas++
}

//Verifica se todas as jogadas acabaram.
if(jogadas === 9){
   console.log(`\nEmpate!`)
}