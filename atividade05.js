// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let buscarCodigo = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:

let na1 = 10
let na2 = 10

let nb1 = 10
let nb2 = "10"

let nc1 = 0
let nc2 = false

let nd1 = null
let nd2 = undefined

let ne1 = "JS"
let ne2 = "JS"

//a
console.log(`10 == 10 → ${na1 == na2}`);
console.log(`10 == "10" → ${nb1 == nb2}`);
console.log(`0 == false → ${nc1 == nc2}`);
console.log(`null == undefined → ${nd1 == nd2}`);
console.log(`"JS" == "JS" → ${ne1 == ne2}`);

//b
console.log(`10 === 10 → ${na1 === na2}`);
console.log(`10 === "10" → ${nb1 === nb2}`);
console.log(`0 === false → ${nc1 === nc2}`);
console.log(`null === undefined → ${nd1 === nd2}`);
console.log(`"JS" === "JS" → ${ne1 === ne2}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:

//a
console.log(5 != 5 );
console.log(5 != "5");
console.log(7 != 3);
console.log(true != 1);

//b
console.log(5 !== 5 );
console.log(5 !== "5");
console.log(7 !== 3);
console.log(true !== 1);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:
//A
let salarioA = 3500
let salarioB = 4200
//B
let salario1 = false
let salario2 = true
let salario3 = false
let salario4 = true
let salario5 = false
//c
console.log(`Salário A (${"R$", salarioA})  >   Salário B (${"R$", salarioB}) = ${salario1 ? "Sim, é maior" : "Não, é menor"}`);
console.log(`Salário A (${"R$", salarioA})  <   Salário B (${"R$", salarioB}) = ${salario2 ? "Sim, é menor" : "Não, é maior"}`);
console.log(`Salário A (${"R$", salarioA})  >=  Salário B (${"R$", salarioB}) = ${salario3 ? "Sim, é maior ou igual" : "Não, é menor ou diferente"}`);
console.log(`Salário A (${"R$", salarioA})  <=  salário B (${"R$", salarioB}) = ${salario4 ? "Sim, é menor ou igual" : "Não, é maior ou diferente"}`);
console.log(`Salário A (${"R$", salarioA})  === salário B (${"R$", salarioB}) = ${salario5 ? "Sim, é igual" : "Não, é diferente"}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:
let estoque = 0
let temEstoque = estoque > 0
let estoqueZerado = estoque === 0
let temperatura = 36.5
let febre = temperatura >= 37.6

console.log(`Estoque: ${estoque}
Tem estoque: ${temEstoque}
Estoque está zerado: ${estoqueZerado}
Temperatura: ${temperatura}
Está com febre: ${febre}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:
let numero1 = buscarCodigo.questionInt("Digite o 1 número: ");
let numero2 = buscarCodigo.questionInt("Digite o 2 número: ");

let var1 = numero1 > numero2;
let var2 = numero1 < numero2;
let var3 = numero1 === numero2;
let var4 = numero1 >= numero2;

console.log(`Número 1 > número 2: ${var1}`);
console.log(`Número 1 < número 2: ${var2}`);
console.log(`Número 1 === número 2: ${var3}`);
console.log(`Número 1 >= número 2: ${var4}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:
 
let precoProduto = buscarCodigo.questionFloat("Digite o preço do produto: ")
const precoMaximo = 100
let estaDentroDoOrcamento = precoProduto <= precoMaximo
let esteItemEhCaro = precoProduto > precoMaximo

console.log(`Preço informado: R$ ${precoProduto}
Dentro do orçamento (≤ R$ ${precoMaximo})? : ${estaDentroDoOrcamento ? "Sim" : "Não"}"
Item caro (> R$ ${precoMaximo})? : ${esteItemEhCaro ? "Sim" : "Não"}"`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:

//a
let info1 = {
    nome: buscarCodigo.question("Digite o 1 nome: "),
    idade: buscarCodigo.question("Digite a 1 idade: "),
};
let info2 = {
    nome: buscarCodigo.question("Digite o 2 nome: "),
    idade: buscarCodigo.question("Digite a 2 idade: "),
};

let cadastro = [info1, info2];

//b
let comparacao1 = info1.idade > info2.idade;
let comparacao2 = info1.idade === info2.idade;
let comparacao3 = info1.idade >= 18;
let comparacao4 = info2.idade >= 18;

//c
console.log(`Idade da ${cadastro[0].nome} é ${cadastro[0].idade} e ela é ${comparacao3 ? "maior de idade" : "menor de idade"}.
Idade da ${cadastro[1].nome} é ${cadastro[1].idade} e ela é ${comparacao4 ? "maior de idade" : "menor de idade"}.
A idade (${cadastro[0].idade}) de ${cadastro[0].nome} > que a idade (${cadastro[1].idade}) de ${cadastro[1].nome}: ${comparacao1 ? "Sim é maior" : "Não, é menor"}
A idade (${cadastro[0].idade}) de ${cadastro[0].nome} === a idade (${cadastro[1].idade}) de ${cadastro[1].nome}: ${comparacao2 ? "Sim, é igual" : "Não, é diferente"}`)

//d
console.log(`Quem é a pessoa mais velha: ${cadastro[0].idade >= cadastro[1].idade ? `${cadastro[0].nome}` : `${cadastro[1].nome}`}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// c) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// d) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`

// → Seu código aqui:

//a
let alunos = [
    aluno1 = {
        nome: buscarCodigo.question(`Nome do primeiro aluno: `),
        nota1: buscarCodigo.questionFloat(`Digite a 1 nota: `),
        nota2: buscarCodigo.questionFloat(`Digite a 2 nota: `),
        nota3: buscarCodigo.questionFloat(`Digite a 3 nota: `)
    },
    aluno2 = {
        nome: buscarCodigo.question(`Nome do segundo aluno: `),
        nota1: buscarCodigo.questionFloat(`Digite a 1 nota: `),
        nota2: buscarCodigo.questionFloat(`Digite a 2 nota: `),
        nota3: buscarCodigo.questionFloat(`Digite a 3 nota: `)
    }
]

//b
let mediaAluno1 = alunos[0].nota1 + alunos[0].nota2 + alunos[0].nota3 / alunos[0].lenght
let mediaAluno2 = alunos[1].nota1 + alunos[1].nota2 + alunos[1].nota3 / alunos[1].lenght

//c
console.log(`Qual aluno teve a maior média: ${mediaAluno1 >= mediaAluno2 ? `${alunos[0].nome}` : `${alunos[1].nome}`}`);

//d
console.log(`Qual aluno teve a 1° maior nota: ${alunos[0].nota1 > alunos[1].nota1 ? `${alunos[0].nome}` : `${alunos[1].nome}`}`)
console.log(`Qual aluno teve a 2° maior nota: ${alunos[0].nota2 > alunos[1].nota2 ? `${alunos[0].nome}` : `${alunos[1].nome}`}`)
console.log(`Qual aluno teve a 3° maior nota: ${alunos[0].nota3 > alunos[1].nota3 ? `${alunos[0].nome}` : `${alunos[1].nome}`}`)

console.log("_______________________________");