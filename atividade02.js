
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
const nome1 = "Isabella"
let idade1 = 16
let hooby1 = "jogar vôlei e sair para algum lugar"
//
const frase1 = `Olá, meu nome é ${nome1}, eu tenho ${idade1} anos e o meu hobby favorito nas horas vagas é ${hooby1}.`
//
console.log(frase1)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
const cidade1 = 'Jaraguá do Sul'
let temperatura1 = 21
//
const frase2 = `Hoje em ${cidade1} está fazendo ${temperatura1}°C, perfeito para dar um passeio.`
//
console.log(frase2)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:
let string = 'Lógica de Programação'
let number = 2
let boolean = false
let undefined
let erro = null 
//
const fraseString = `O valor é ${string} e o tipo é ${typeof string}.`
const fraseNumber = `O valor é ${number} e o tipo é ${typeof number}.`
const fraseBoolean = `O valor é ${boolean} e o tipo é ${typeof boolean}.`
const fraseUndefined = `O valor é ${undefined} e o tipo é ${typeof undefined}`
const fraseErro = `O valor é ${erro} e o tipo é ${typeof erro}.`
//
console.log(fraseString)
console.log(fraseNumber)
console.log(fraseBoolean)
console.log(fraseUndefined)
console.log(fraseErro)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
const personagem1 = 'Adriele'
let idade2 = 21
const cidade2 = 'Curitiba'
let missão1 = 'achar o amigo perdido'
//
const frase3 = `${personagem1} é uma moça de ${idade2} anos, sempre sonhou em ir para ${cidade2} e lá tinha apenas uma missão: ${missão1}.`
//
console.log(frase3)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
const nome2 = 'Isabella'
let objetivo1 = 'aprendido e posto em prática o básico da programação'
//
const frase4 = `Eu, ${nome2}, acredito que com motivação e dedicação ao fim do ano eu possa ter ${objetivo1}. `
//
console.log(frase4)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:
console.log('===================================')
console.log('       SISTEMA DO USUÁRIO  ')
console.log('===================================')
console.log('1 - Ver Perfil')
console.log('2 - Editar Perfil') 
console.log('3 - Configurações')
console.log('4 - Notificações')
console.log('5 - Relatórios')
console.log('6 - Ajuda')
console.log('7 - Sobre o Sistema')
console.log('8 - Sair')
console.log('====================================')
console.log('Digite o número da opção desejada')
console.log('====================================')


console.log("_______________________________"); 

