// ============================================================
// ATIVIDADE 14 – Funções Simples
// ============================================================
//
// IMPORTANTE: nesta atividade, NÃO use parâmetros nem return.
// As funções devem apenas executar um bloco de código.
//
// ============================================================

let lerTeclado = require(`readline-sync`)

// ------------------------------------------------------------
// EXERCÍCIO 1 – Primeira função
// ------------------------------------------------------------
// a) Crie uma função 'saudacao' que exibe 3 linhas no console:
//    "Olá!"
//    "Bem-vindo(a) ao curso de JavaScript."
//    "Bons estudos!"
// b) Chame a função 2 vezes.

// → Seu código aqui:

//a
function saudacao() {
    console.log("Olá!")
    console.log("Bem-vindo(a) ao curso de JavaScript.")
    console.log("Bons Estudos!")
}

//b
saudacao();
saudacao();


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função que organiza
// ------------------------------------------------------------
// a) Crie uma função 'linha' que exibe:
//    "----------------------------------------"
// b) Crie uma função 'titulo' que exibe:
//    "         RELATÓRIO MENSAL              "
// c) Crie uma função 'cabecalho' que CHAMA, em ordem:
//    linha(), titulo(), linha().
// d) Chame cabecalho() uma vez.

// → Seu código aqui:

//a
function linha() {
    console.log("----------------------------------------")
}

//b
function titulo() {
    console.log("         RELATÓRIO MENSAL              ")
}

//c
function cabecalho() {
    linha()
    titulo()
    linha()
}

//d
cabecalho()


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculadora de informações
// ------------------------------------------------------------
// a) Crie uma função 'meusDados' que pergunta ao usuário:
//    - Nome
//    - Idade
//    - Cidade
// b) Crie uma função 'exibirDados' que recebe exibe os dados e exibe um cartão no formato:
//    -------------------------
//    Nome:   <nome>
//    Idade:  <idade>
//    Cidade: <cidade>
//    -------------------------
// c) Pergunte os dados de 2 usuários e os guarde em um objeto.
// d) Exiba os dados dos 2 usuários.
//
// ATENÇÃO: APÓS CRIADA, DIGITAR/CHAMAR A FUNÇÃO APENAS UMA VEZ
// PENSE EM UMA LÓGICA QUE EVITE DIGITAR A FUNÇÃO MAIS DE UMA VEZ
// Após finalizar, me chame para eu verificar a lógica - questão importante

// → Seu código aqui:

//a e c

let usuarios = {}

function meusDados() {
    for(let i = 1; i <= 2; i++){
        usuarios["usuario" + i] = {
            nome: lerTeclado.question(`\nInforme seu nome: `),
            idade: lerTeclado.questionInt(`Informe sua idade: `),
            cidade: lerTeclado.question(`Informe sua cidade: `),
        }
    }
}

meusDados()

//b e d

function exibirDados() {
    for(let i = 1; i <= 2; i++){
        linha()
        console.log(`Nome: ${usuarios["usuario" + i].nome}`)
        console.log(`Idade: ${usuarios["usuario" + i].idade}`)
        console.log(`Cidade: ${usuarios["usuario" + i].cidade}`)
        linha()
    }
}

exibirDados()


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Sorteio de número
// ------------------------------------------------------------
// a) Crie uma função 'sortear' que:
//    - Gera um número aleatório de 1 a 100
//      (Math.floor(Math.random() * 100) + 1).
//    - Exibe: "Número sorteado: <n>"
// b) Execute a função 5 vezes - tente fazer sem digitar a função 5 vezes.

// → Seu código aqui:

//a

function sortear() {
    let n = Math.floor(Math.random() * 100) + 1
    console.log(`Numero sorteado: ${n}`)
}

//b

for(let i = 1; i <= 5; i++) {
   sortear() 
}


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Tabela de multiplicação
// ------------------------------------------------------------
// a) Crie uma função 'tabuadaDoCinco' que exibe a tabuada do 5 inteira:
// (pense em uma lógica para não precisar digitar todos os valores)
//    5 x 1 = 5
//    5 x 2 = 10
//    ...
//    5 x 10 = 50
// b) Crie uma função 'tabuadaDoSete' análoga, para o 7.
// c) Chame as duas funções.

// → Seu código aqui:

//a

function tabuadaDoCinco() {
    for(let i = 1; i <= 10; i++){
       let resultado = 5 * i;
       console.log(`5 x ${i} = ${resultado}`);
    }
}

//b

function tabuadaDoSete() {
    for(let i = 1; i <= 10; i++){
       let resultado = 7 * i;
       console.log(`7 x ${i} = ${resultado}`);
    }
}

//c

tabuadaDoCinco()
linha()
tabuadaDoSete()


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Conversão fixa
// ------------------------------------------------------------
// a) Crie uma função 'converterTemperatura' que:
//    - Pergunta uma temperatura em Celsius.
//    - Calcula em Fahrenheit: F = C * 1.8 + 32.
//    - Exibe: "<C>°C equivalem a <F>°F".
// b) Chame a função 3 vezes.

// → Seu código aqui:

//a

let c = null
let f = null

function converterTemperatura() {
    c = lerTeclado.questionFloat(`Informe uma temperatura em Celsius: `)
    f = c * 1.8 + 32
    console.log(`${c}°C equivalem a ${f}°F`)
}

//b

converterTemperatura()
converterTemperatura()
converterTemperatura()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Listando informações
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const filmes = ["Matrix", "Interestelar", "Origem", "Senhor dos Anéis"];
// b) Crie a função 'listarFilmes' que percorre o vetor 'filmes' com for
//    e exibe cada um no formato: "<i+1> - <filme>".
// c) Chame listarFilmes() duas vezes.

// → Seu código aqui:

//b
function listarFilmes() {
    for(let i = 0; i < filmes.length; i++){
        let filme = filmes[i]
        console.log(`${i+1} - ${filme}`)
    }
}

//c

listarFilmes()
linha()
listarFilmes()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Dividindo um programa em partes
// ------------------------------------------------------------
// Vamos criar um "mini sistema de boas-vindas" composto por 4 funções:
//
// a) 'limparTela'      → exibe 30 linhas em branco (console.log("")).
// b) 'banner'          → exibe um banner com 3 linhas (exiba qualquer informação dentro de "-----------").
// c) 'pedirNome'       → pergunta o nome do usuário e exibe "Olá, <nome>!".
// d) 'rodape'          → exibe "Sistema desenvolvido por <seu nome>".
//
// Em seguida, monte o programa principal (outra função) chamando, em ordem:
//    limparTela(); banner(); pedirNome(); rodape();
// E chame a função principal.

// → Seu código aqui:

//a
function limparTela() {
    for(i = 1; i <= 30; i++){
        console.log("")
    }
}

//b
function banner() {
    console.log(`Olá.`)
    console.log(`Seja bem-vindo(a)!`)
    console.log(`Vamos começar.`)
}

//c
function pedirNome() {
    let nome  = lerTeclado.question(`Informe seu nome: `)
    console.log(`Olá, ${nome}!`)
}

//d
function rodape() {
    linha()
    console.log(`Sistema desenvolvido por Isabella.`)
}


function principal() {
    limparTela()
    banner()
    pedirNome()
    rodape()
}

principal()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Menu organizado em funções
// ------------------------------------------------------------
// Você vai criar um menu onde CADA opção é uma função separada.
//
// a) Crie as funções:
//    - 'opcaoSomar'       → pede 2 números e exibe a soma.
//    - 'opcaoSubtrair'    → pede 2 números e exibe a subtração.
//    - 'opcaoMultiplicar' → pede 2 números e exibe a multiplicação.
//    - 'opcaoDividir'     → pede 2 números, trata divisão por zero e exibe o resultado.
//    - 'exibirMenu'       → exibe as opções no console.
//
// b) Usando do...while + switch, monte o menu chamando a função
//    correspondente em cada case. Encerre quando o usuário digitar 0.

// → Seu código aqui:

//a
function opcaoSomar() {
    let num1 = lerTeclado.questionInt(`Informe o n1: `)
    let num2 = lerTeclado.questionInt(`Informe o n2: `)
    
    let soma = num1 + num2
    console.log(`Soma: ${num1} + ${num2} = ${soma}`)
}

function opcaoSubtrair() {
    let num1 = lerTeclado.questionInt(`Informe o n1: `)
    let num2 = lerTeclado.questionInt(`Informe o n2: `)
    
    let soma = num1 - num2
    console.log(`Subtração: ${num1} - ${num2} = ${soma}`)
}

function opcaoMultiplicar() {
    let num1 = lerTeclado.questionInt(`Informe o n1: `)
    let num2 = lerTeclado.questionInt(`Informe o n2: `)
    
    let soma = num1 * num2
    console.log(`Multiplicação: ${num1} x ${num2} = ${soma}`)
}

function opcaoDividir() {
    let num1 = lerTeclado.questionInt(`\nInforme o n1: `)
    let num2 = lerTeclado.questionInt(`Informe o n2: `)
    
    if(num1 === 0 || num2 === 0){
        console.log(`Erro! Divisao Invalida.`)
    } else{
        let soma = num1 / num2
        console.log(`Divisão: ${num1} / ${num2} = ${soma}`)
    }

   
}

function exibirMenu() {
    console.log(`\n   MENU    `)
    console.log(`
    1 - Somar
    2 - Subtrair
    3 - Multiplicar
    4 - Dividir
    0 - Sair
    `)
}


//b
let escolha = null

do{
    exibirMenu()
    escolha = lerTeclado.questionInt(`Escolha uma opcao (0 a 4): `)

    switch(escolha){
        case 1:
            opcaoSomar()
            break;
        
        case 2:
            opcaoSubtrair()
            break;
        
        case 3:
            opcaoMultiplicar()
            break;

        case 4: 
            opcaoDividir()
            break;
    }
} while(escolha !== 0)

console.log("_______________________________");