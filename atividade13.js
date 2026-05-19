// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [10, 20, 30],
//      [40, 50, 60],
//      [70, 80, 90],
//    ];
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:

//a
const m1 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
  ];

  //b
  console.log(`Linhas: ${m1.length}`)
  console.log(`Colunas: ${m1[0].length}`)

  //c
  console.log(`Elemento central: ${m1[1][1]}`)

  //d
  console.log(`Canto inferior direito: ${m1[m1.length-1][m1[0].length-1]}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12],
//    ];
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:

//a
const m2 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
  ];

//b
  for(let i = 0; i < m2.length; i++){
      for(let j = 0; j < m2.length; j++){
          console.log(`m2[${i}][${j}] = ${m2[i][j]}`)
      }
  }

//c
  let soma = 0;
for (let i = 0; i < m2.length; i++) {
  for (let j = 0; j < m2[i].length; j++) {
    soma += m2[i][j];
  }
}
console.log(`Soma de todos os elementos: ${soma}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
//    const m = [
//      [12,  7, 25],
//      [ 3, 18,  9],
//      [31, 14, 22],
//    ];
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:

//a
const m3 = [
    [12,  7, 25],
    [ 3, 18,  9],
    [31, 14, 22],
  ];

//b

let maior = m3[0][0];
let menor = m3[0][0]

let linhaMaior = 0
let linhaMenor = 0

let colunaMaior = 0
let colunaMenor = 0

for(let i = 0; i < m3.length; i++){
    for(let j = 0; j < m3[0].length; j++){
        if(m3[i][j] > maior){
            maior = m3[i][j] 
            linhaMaior = i
            colunaMaior = j
        } else if(m3[i][j] < menor){
            menor = m3[i][j]
            linhaMenor = i
            colunaMenor = j
        } 
    } 
}

//c
console.log(`Maior numero: ${maior} | Linha: ${linhaMaior} | Coluna: ${colunaMaior}`)
console.log(`Menor numero: ${menor} | Linha: ${linhaMenor} | Coluna: ${colunaMenor}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:

//b
for (let i = 0; i < m3.length; i++) {
  let somaLinha = 0;
  for (let j = 0; j < m3[i].length; j++) {
    somaLinha += m3[i][j];
  }
  console.log(`Linha ${i}: ${somaLinha}`);
}

//c
for (let j = 0; j < m3[0].length; j++) {
  let somaColuna = 0;
  for (let i = 0; i < m3.length; i++) {
    somaColuna += m3[i][j];
  }
  console.log(`Coluna ${j}: ${somaColuna}`);
}

//d
let somaDiagonal = 0;

for (let i = 0; i < m3.length; i++) {
    somaDiagonal += m3[i][i];
}
console.log(`Diagonal principal: ${somaDiagonal}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:.

let lerTeclado = require(`readline-sync`)

//a
let linhas = lerTeclado.question(`Quantas linhas tera sua matriz: `)
let colunas = lerTeclado.question(`Quantas colunas tera sua matriz: `)
let m4 = []

//b
for (let i = 0; i < linhas; i++) {
    m4[i] = [];
    for (let j = 0; j < colunas; j++) {
        m4[i][j] = lerTeclado.questionInt(`Digite m[${i}][${j}]:`)
        ;
    }
}

///d
console.table(m4);

console.log("_______________________________");