// ============================================================
//   ATIVIDADE 04 – Operadores Aritméticos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-04.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let buscarTudo = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Operações básicas
// ------------------------------------------------------------
// Declare duas variáveis: "num1" com valor 18 e "num2" com valor 5.
// Calcule e exiba no console, usando template literal, o cálculo e o resultado:
//    Exemplo: console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);
// a) A soma dos dois números.
// b) A subtração (num1 - num2).
// c) A multiplicação.
// d) A divisão (use toFixed() para limitar o resultado a 2 casas decimais).
// e) O resto da divisão (módulo %).
// f) num1 elevado a num2 (potência).

// → Seu código aqui:

let num1 = 18;
let num2 = 5;

//a
console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);

//b
console.log(`Cálculo: ${num1} - ${num2} = ${num1 - num2}`);

//c
console.log(`Cálculo: ${num1} * ${num2} = ${num1 * num2}`);

//d
let resultado = 18 / 5;
console.log(`Cálculo: ${num1} / ${num2} = `, resultado.toFixed(2));

//e
console.log(`Cálculo: ${num1} % ${num2} = ${num1 % num2}`);

//f
console.log(`Cálculo: ${num1} ** ${num2} = ${num1 ** num2}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Área e perímetro
// ------------------------------------------------------------
// a) Declare as variáveis "largura" (valor 8) e "altura" (valor 5).
// b) Calcule a área do retângulo (largura * altura) e armazene em "area".
// c) Calcule o perímetro (2 * largura + 2 * altura) e armazene em "perimetro".
// d) Exiba no console usando template literal:
//    "Retângulo | Largura: <largura> | Altura: <altura> | Área: <area> | Perímetro: <perimetro>"

// → Seu código aqui:

//a
let largura = 8;
let altura = 5;

//b
let area = largura * altura;

//c
let perimetro = 2 * largura + 2 * altura;

//d
console.log(`Retângulo | Largura: ${largura} | Altura: ${altura} | Área: ${area} | Perímetro: ${perimetro}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculando desconto
// ------------------------------------------------------------
// a) Declare a variável "precoOriginal" com o valor 250.
// b) Declare a variável "percentualDesconto" com o valor 15 (representa 15%).
// c) Calcule o valor do desconto e armazene em "valorDesconto".
//    Dica: valorDesconto = precoOriginal * (percentualDesconto / 100)
// d) Calcule o preço final (precoOriginal - valorDesconto) e armazene em "precoFinal".
// e) Exiba no console usando template literal:
//    "Preço original: R$ <precoOriginal> | Desconto: R$ <valorDesconto> | Preço final: R$ <precoFinal>"
//    Use toFixed(2) nos valores em reais.

// → Seu código aqui:

//a
const precoOriginal = 250;

//b
let percentualDesconto = 15;

//c
let valorDesconto = precoOriginal * (percentualDesconto / 100)

//d
const precoFinal = precoOriginal - valorDesconto

//e
console.log(`Preço original: R$ ${precoOriginal.toFixed(2)} | Desconto: R$ ${valorDesconto.toFixed(2)} | Preço final: R$ ${precoFinal.toFixed(2)}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Operadores de atribuição composta
// ------------------------------------------------------------
// a) Declare uma variável "pontos" com o valor 100.
// b) Some 50 pontos usando +=. Exiba o resultado.
// c) Subtraia 30 pontos usando -=. Exiba o resultado.
// d) Multiplique por 2 usando *=. Exiba o resultado.
// e) Divida por 4 usando /=. Exiba o resultado.
// f) Para cada operação, use template literal:
//    "Pontos após <tipo da operação>: <valor>"

// → Seu código aqui:

//a
let pontos = 100;

//b
pontos += 50;
console.log(`Pontos após soma: ${pontos}`);

//c
pontos -= 30;
console.log(`Pontos após subtração: ${pontos}`);

//d
pontos *= 2;
console.log(`Pontos após multiplicação: ${pontos}`);

//e
pontos /= 4;
console.log(`Pontos após divisão: ${pontos}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Incremento e decremento
// ------------------------------------------------------------
// a) Declare uma variável "vidas" com valor 3.
// b) Exiba o valor atual com console.log().
// c) Use ++ para incrementar "vidas" , exibindo após cada incremento.
// d) Use -- para decrementar "vidas" uma vez, exibindo o resultado.
// e) Declare uma variável "nivel" com valor 1.
// f) Incremente "nivel" três vezes usando ++nivel (prefixo) e exiba cada resultado.

// → Seu código aqui:

//a
let vidas = 3;

//b
console.log(vidas);

//c
vidas++;
console.log(vidas);
vidas++;
console.log(vidas);

//d
vidas--;
console.log(vidas);

//e
let nivel = 1;

//f
++nivel;
console.log(nivel);
++nivel;
console.log(nivel);
++nivel;
console.log(nivel);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções matemáticas (Math)
// ------------------------------------------------------------
// a) Declare "nota" com o valor 7.3.
// b) Exiba o resultado de Math.round(nota), Math.floor(nota) e Math.ceil(nota).
//    Use template literal para identificar cada um.
// c) Declare "temperatura" com o valor -12.5.
// d) Exiba o valor absoluto usando Math.abs(temperatura).
// e) Use Math.max() para encontrar o maior entre: 42, 17, 89, 5, 63. Exiba o resultado.
// f) Use Math.min() para encontrar o menor entre 42, 17, 89, 5, 63. Exiba o resultado.

// → Seu código aqui:

//a
let nota = 7.3

//b
console.log("7.3 -> Math.round()", Math.round(nota)); 
console.log("7.3 -> Math.floor()", Math.floor(nota)); 
console.log("7.3 -> Math.ceil()", Math.ceil(nota));  

//c
let temperatura = -12.5

//d
console.log("Math.abs()", Math.abs(temperatura))

//e
console.log("Math.max()", Math.max(42, 17, 89, 5, 63));

//f
console.log("Math.min()", Math.min(42, 17, 89, 5, 63)); 

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Média de notas
// ------------------------------------------------------------
// a) Peça ao usuário 3 notas (use questionFloat()).
// b) Calcule a média aritmética das 3 notas.
// c) Exiba no console:
//    "Nota 1: <n1> | Nota 2: <n2> | Nota 3: <n3>"
//    "Média: <media>" (com 2 casas decimais usando toFixed(2))

// → Seu código aqui:

//a
let notass = [
  buscarTudo.questionFloat("Primeira nota: "),
  buscarTudo.questionFloat("Segunda nota: "),
  buscarTudo.questionFloat("Terceira nota: ")
]

//b
const media = (notass[0] + notass[1] + notass[2]) / notass.length

//c
console.log(`Nota 1: ${notass[0]} | Nota 2: ${notass[1]} | Nota 3: ${notass[2]}`);
console.log(`Média: ${media.toFixed(2)}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Calculadora de troco
// ------------------------------------------------------------
// a) Peça ao usuário o valor total da compra (questionFloat()).
// b) Peça ao usuário o valor entregue pelo cliente (informando que deve ser maior que o valor da compra) (questionFloat()).
// c) Calcule o troco (valorEntregue - totalCompra).
// d) Exiba no console:
//    "Total da compra:  R$ <total>"
//    "Valor entregue:   R$ <entregue>"
//    "Troco:            R$ <troco>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:

//a
let valorTotal = buscarTudo.questionFloat('Valor total da compra:');

//b
let valorEntregue =  buscarTudo.questionFloat('Valor entregue pelo cliente: ');

//c
let troco = valorEntregue - valorTotal;

//d
console.log(`
  Total da compra:  R$ ${valorTotal.toFixed(2)};
  Valor entregue:   R$ ${valorEntregue.toFixed(2)};
  Troco:            R$ ${troco.toFixed(2)};
`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Valor total de listas
// ------------------------------------------------------------
// a) Dada uma lista de preços, calcule e exiba o total.
let precos = [29.90, 49.99, 15.75, 99.90];
// b) Dada uma lista de notas, calcule e exiba a média.
let notas = [7.5, 8.2, 6.5, 9.0];
// c) Dada uma lista de idades, exiba a maior e a menor idade utilizando das funções Math().
let idades = [15, 22, 30, 18, 25];

// → Seu código aqui:

//a
const precoTotal = (precos[0] + precos[1] + precos[2] + precos[3]);
console.log(precoTotal.toFixed(2));

//b
const notasMedia = (notas[0] + notas[1] + notas[2]) + notas[3] / notas.length
console.log(notasMedia.toFixed(2));

//c
console.log("Maior:", Math.max(15, 22, 30, 18, 25));
console.log("Menor: ", Math.min(15, 22, 30, 18, 25));

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Trabalhando com objetos
// ------------------------------------------------------------
// Dado o objeto turma:
let turma = {
  aluno1: {
    nome: "João",
    notas: []
  },
  aluno2: {
    nome: "Maria",
    notas: []
  },
  aluno3: {
    nome: "Pedro",
    notas: []
  }
}
// a) Sem alterar o objeto (utilize somente push), peça para o usuário 3 notas para cada aluno, indicando a quem pertencerá cada nota
// b) Calcule a média de notas de cada aluno e exiba no console, indicando a quem pertence cada média
// c) Exiba a média geral da turma
// d) Exiba a nota mais alta e a mais baixa de cada aluno
// e) Exiba a nota mais alta e a mais baixa da turma

// → Seu código aqui:

//a
let joaoNota1 = buscarTudo.questionInt('Adicione a 1 nota de Joao:')
let joaoNota2 = buscarTudo.questionInt('Adicione a 2 nota de Joao:')
let joaoNota3 = buscarTudo.questionInt('Adicione a 3 nota de Joao:')
turma.aluno1.notas.push(joaoNota1, joaoNota2, joaoNota3)

let mariaNota1 = buscarTudo.questionInt('Adicione a 1 nota de Maria:')
let mariaNota2 = buscarTudo.questionInt('Adicione a 2 nota de Maria:')
let mariaNota3 = buscarTudo.questionInt('Adicione a 3 nota de Maria:')
turma.aluno2.notas.push(mariaNota1, mariaNota2, mariaNota3)

let pedroNota1 = buscarTudo.questionInt('Adicione a 1 nota de Pedro:')
let pedroNota2 = buscarTudo.questionInt('Adicione a 2 nota de Pedro:')
let pedroNota3 = buscarTudo.questionInt('Adicione a 3 nota de Pedro:')
turma.aluno3.notas.push(pedroNota1, pedroNota2, pedroNota3)

//b
let alunoJoao = (turma.aluno1.notas[0] + turma.aluno1.notas[1] + turma.aluno1.notas[2]) / turma.aluno1.notas.length
console.log(`Media joao: ${alunoJoao.toFixed(2)}`)

let alunaMaria = (turma.aluno2.notas[0] + turma.aluno2.notas[1] + turma.aluno2.notas[2]) / turma.aluno2.notas.length
console.log(`Media Maria: ${alunaMaria.toFixed(2)}`)

let alunoPedro = (turma.aluno3.notas[0] + turma.aluno3.notas[1] + turma.aluno3.notas[2]) / turma.aluno3.notas.length
console.log(`Media Pedro: ${alunoPedro.toFixed(2)}`)

//c
let mediaGeral = (alunoJoao + alunaMaria + alunoPedro) / 3
console.log(mediaGeral.toFixed(2))

//d
console.log('Maior Joao:', Math.max(joaoNota1, joaoNota2, joaoNota3));
console.log("Menor Joao:", Math.min(joaoNota1, joaoNota2, joaoNota3));

console.log('Maior Maria:', Math.max(mariaNota1, mariaNota2, mariaNota3));
console.log("Menor Maria:", Math.min(mariaNota1, mariaNota2, mariaNota3));

console.log('Maior Pedro:', Math.max(pedroNota1, pedroNota2, pedroNota3));
console.log("Menor Pedro:", Math.min(pedroNota1, pedroNota2, pedroNota3));

//e
console.log('Maior Turma:', Math.max(alunoJoao.toFixed(2), alunaMaria.toFixed(2), alunoPedro.toFixed(2)));
console.log("Menor Turma:", Math.min(alunoJoao.toFixed(2), alunaMaria.toFixed(2), alunoPedro.toFixed(2)));

console.log("_______________________________");