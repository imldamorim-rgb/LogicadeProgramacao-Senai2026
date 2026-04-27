// ============================================================
//   JOGO: Adivinhe o Número
// ============================================================
//
// O jogo tem DOIS modos, ambos devem ser implementados:
//
//   MODO 1 – Computador pensa, você adivinha
    // O computador sorteia um número de 1 a 100.
    // O jogador tem até 7 tentativas para descobrir qual é.
    // A cada erro, o programa diz se o palpite foi alto ou baixo.
//
//   MODO 2 – Você pensa, computador adivinha
    // O jogador pensa em um número de 1 a 100 (não digita).
    // O computador tenta adivinhar usando busca binária:
    //    sempre chuta o meio do intervalo restante.
    // O jogador responde: 1 = correto | 2 = muito alto | 3 = muito baixo
    // O computador deve acertar em no máximo 7 tentativas.
//
// Para números aleatórios, utilize a função Math.random() do Javascript
// ============================================================

let lerTeclado = require('readline-sync');

// ============================================================
// CONFIGURAÇÕES DO JOGO (não altere)
// ============================================================

const MAX_TENTATIVAS = 7;
const NUM_MIN = 1;
const NUM_MAX = 100;

// ============================================================
// MENU PRINCIPAL
// ============================================================

console.log("|==============================|");
console.log("|     ADIVINHE O NÚMERO        |");
console.log("|==============================|");
console.log("|  1 – Eu adivinho o número    |");
console.log("|  2 – Computador adivinha     |");
console.log("|  3 – Sair                    |");
console.log("|==============================|");

const modo = lerTeclado.questionInt("\nEscolha o modo: ");

console.log("_______________________________");


// ============================================================
// MODO 1 – Computador pensa, jogador adivinha
// ============================================================
//
// Instruções para implementação do Modo 1:
//
// PASSO 1 – Gere o número secreto do computador Math.random();
// PASSO 2 – Passe as instruções do jogo.
// PASSO 3 – Use um for para as tentativas.
//  - Se acertou, exiba: "Parabéns! Você acertou em <i> tentativa(s)!", e encerre o jogo.
//  - Se o palpite for maior que o secreto, exiba: "Muito alto! Tente um número menor."
//  - Se o palpite for menor que o secreto, exiba: "Muito baixo! Tente um número maior."
//  - Ao final de cada tentativa errada, exiba quantas tentativas restam.
//  - Se o jogador NÃO acertou, exiba: "Fim de jogo! O número era <secreto>."
// PASSO 4 – Exiba um resumo:
        //   "Número secreto: <secreto>"
        //   "Tentativas usadas: <i>"
        //   "Resultado: Vitória" ou "Resultado: Derrota"

// → Seu código do MODO 1 aqui:
let numSecreto = Math.floor(Math.random() * 100) + 1;

switch(modo){
    case 1:
        console.log(`Instruções do jogo\n - O computador sorteia um número de 1 a 100.\n - Você tem até 7 tentativas para descobrir qual é o número.\n - A cada erro, o programa diz se o palpite foi alto ou baixo.\n`)
        break;
    case 2:
        console.log(`Instruções do jogo\n - Você pensará em um número de 1 a 100 (não digita).\n - O computador tenta adivinhar usando busca binária: sempre chuta o meio do intervalo restante.\n - O jogador responde: 1 = correto | 2 = muito alto | 3 = muito baixo\n - O computador deve acertar em no máximo 7 tentativas.\n`)
        break;
    case 3:
        console.log(`Até a próxima!`)
        break;
    default:
        console.log(`Alternativa inválida`)
    break;
} 

// let acertou = false;
// let tentativasUsadas = 0;

// for (let i = 0; i < MAX_TENTATIVAS; i++) {
//     let tentativa = lerTeclado.questionInt(`Tentativa ${i} - Digite um número de 1 à 100: `)
//     tentativasUsadas++

//     if(tentativa === numSecreto){
//         console.log(`Parabéns! Você acertou em ${i} tentativa(s)!`);
//         acertou = true;
//     } else if(tentativa > numSecreto){
//         console.log(`Muito alto! Tente um número menor.`)
//     } else{
//         console.log(`Muito baixo! Tente um número maior.`)
//     } 
    
//     if( i < MAX_TENTATIVAS){
//         console.log(`Tentativas restantes: ${MAX_TENTATIVAS - i}\n`)
//     }
// } 

// if(!acertou){
//     (`Fim de jogo! O número era: ${numSecreto}.`)
// }

// console.log(`Resumo
// Número secreto: ${numSecreto}
// Tentativas usadas: ${tentativasUsadas}
// Resultado: ${acertou ? 'Vitória' : 'Derrota'}`)


// ============================================================
// MODO 2 – Jogador pensa, computador adivinha
// ============================================================
//
// Instruções para implementação do Modo 2:
//
// PASSO 1 – Instrua o jogador a digitar um número inteiro entre 1 e 100;
// PASSO 2 – Inicialize o intervalo de busca:
//           let min = NUM_MIN;
//           let max = NUM_MAX;
// PASSO 3 – Use um for para as tentativas.
//   a) Calcule o palpite do computador: meio do intervalo
//   b) Exiba: "Tentativa <i>: Meu palpite é <palpite>!"
//   c) Pergunte ao jogador o resultado com questionInt():
//        "1 – Acertei | 2 – Muito alto | 3 – Muito baixo"
//   d) De acordo com a resposta, busque pelo meio do novo intervalo.
// PASSO 4 – Se o computador acertar, exiba uma mensagem de vitória, exiba quantas tentativas o computador usou e finalize o jogo.
// PASSO 5 – Se o computador não acertar, exiba uma mensagem de derrota e o número que o jogador estava pensando.

// Implemente seu código abaixo:

let min = NUM_MIN;
let max = NUM_MAX;
let acertou2 = false;

console.log(`Pense em um número de 1 à 100...`);

if(modo === 2){
    for(let i = 0; i < MAX_TENTATIVAS; i++){
        let palpite = Math.floor((min + max) / 2)

        console.log(`Tentativa ${i}: Meu palpite é ${palpite}`)

        let resposta = lerTeclado.questionInt("1 - Acertei | 2 - Muito alto | 3 - Muito baixo: ")

        if(resposta === 1){
            console.log(`Acertei em ${i} tentativas!`)
            acertou2 = true;
            break;
        } else if(resposta === 2){
            max = palpite - 1;
        } else if(resposta === 3){
            min = palpite + 1;
        } else {
            console.log(`Resposta inválida! Tente novamente.`)
            i--;
        }
    }
}

if (!acertou2) {
    console.log("Não consegui adivinhar seu número!");
    let numero = lerTeclado.questionInt("Qual número você estava pensando? ");
    console.log(`O número secreto era: ${numero}`)
}