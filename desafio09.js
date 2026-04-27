// ============================================================
//   DESAFIOS (para quem já terminou a atividade 09) – For
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================


let lerTudo = require(`readline-sync`)


// ------------------------------------------------------------
// DESAFIO 1 – Progressão de saldo bancário
// ------------------------------------------------------------
// Um investimento rende juros compostos mensais.
//
// a) Pergunte ao usuário:
//    - Saldo inicial (questionFloat())
//    - Taxa de juros mensal em % (questionFloat()) — ex: 1.5
//    - Número de meses
// b) Usando um for, calcule e exiba mês a mês:
//    "Mês 1:  R$ <saldo>"
//    "Mês 2:  R$ <saldo>"
//    ...
//    A fórmula de juros compostos é:
//    saldo = saldo * (1 + taxa / 100)
// c) Ao final, exiba o saldo total e o lucro obtido (saldo final - saldo inicial).
// d) Armazene cada mês como objeto { mes, saldo } em um array e exiba com console.table().


// → Seu código aqui:

//A
let dados = {
    saldo1: lerTudo.questionFloat(`Informe seu saldo inicial: `),
    taxaJuros: lerTudo.questionFloat(`Informe sua taxa de juros mensal em %: `),
    meses: lerTudo.questionFloat(`Informe o número de meses: `),
}


//B
let saldo = dados.saldo1
let historico = [];


for(let i = 1; i <= dados.meses; i++){
    saldo = saldo * (1 + dados.taxaJuros / 100)


    console.log(`Mês ${i}: R$${saldo.toFixed(2)}`)


    historico.push({
        mes: i,
        saldo: saldo.toFixed(2),
    })
}


//C
let lucro = saldo - dados.saldo1;


console.log(`Saldo final: R$${saldo.toFixed(2)}`)
console.log(`Lucro: R$${lucro.toFixed(2)}`)


//D
console.table(historico)


console.log("_______________________________");




// ------------------------------------------------------------
// DESAFIO 2 – Cadastro e relatório de alunos
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos alunos serão cadastrados.
// b) Usando um for, colete de cada aluno:
//    - Nome (question())
//    - Nota 1, Nota 2 e Nota 3 (questionFloat() para cada)
// c) Calcule a média de cada aluno e armazene como objeto:
//    { nome, notas, media, situacao }
//    A situação deve ser:
//      "Aprovado"    → média >= 7
//      "Recuperação" → média >= 5 e < 7
//      "Reprovado"   → média < 5
// d) Após coletar todos, percorra o array e exiba o relatório:
//    "<nome> | Média: <media> | <situacao>"
// e) Exiba:
//    - Média geral da turma
//    - Nome do aluno com maior média
//    - Nome do aluno com menor média
//    - Quantidade de aprovados, em recuperação e reprovados
// f) Exiba o array com console.table().


// → Seu código aqui:
// let qtd = lerTudo.questionInt("Quantos alunos: ");


// let turma = [];


// let somaGeral = 0;
// let maiorMedia = -Infinity;
// let menorMedia = Infinity;
// let nomeMaior = "";
// let nomeMenor = "";


// let aprovados = 0;
// let recuperacao = 0;
// let reprovados = 0;


// for (let i = 1; i <= qtd; i++) {
//     let nome = lerTudo.question(`Nome do aluno ${i}: `);


//     let n1 = lerTudo.questionFloat("Nota 1: ");
//     let n2 = lerTudo.questionFloat("Nota 2: ");
//     let n3 = lerTudo.questionFloat("Nota 3: ");


//     let media = (n1 + n2 + n3) / 3;


//     let situacao = "";


//     if (media >= 7) {
//         situacao = "Aprovado";
//         aprovados++;
//     } else if (media >= 5) {
//         situacao = "Recuperacao";
//         recuperacao++;
//     } else {
//         situacao = "Reprovado";
//         reprovados++;
//     }


//     turma.push({
//         nome: nome,
//         notas: [n1, n2, n3],
//         media: media.toFixed(2),
//         situacao: situacao
//     });


//     somaGeral += media;


//     if (media > maiorMedia) {
//         maiorMedia = media;
//         nomeMaior = nome;
//     }


//     if (media < menorMedia) {
//         menorMedia = media;
//         nomeMenor = nome;
//     }
// }


// // Relatório
// console.log("RELATORIO");
// for (let i = 0; i < turma.length; i++) {
//     console.log(
//         turma[i].nome + " | Media: " + turma[i].media + " | " + turma[i].situacao
//     );
// }




// // Estatísticas
// let mediaGeral = somaGeral / qtd;


// console.log("Media geral:", mediaGeral.toFixed(2));
// console.log("Maior media:", nomeMaior);
// console.log("Menor media:", nomeMenor);
// console.log("Aprovados:", aprovados);
// console.log("Recuperacao:", recuperacao);
// console.log("Reprovados:", reprovados);


// console.table(turma);


console.log("_______________________________");




// ------------------------------------------------------------
// DESAFIO 3 – Jogo de adivinhar o número
// ------------------------------------------------------------
// O programa sorteia um número de 1 a 100 e o usuário tem no máximo 7 tentativas para adivinhar.
//
// a) Gere um número aleatório
//    Para gerar um número aleatório, utilize a função Math.random()
// b) Usando um for:
//    - Peça ao usuário um palpite.
//    - Se errar: exiba "Muito alto!" ou "Muito baixo!" conforme o caso.
//    - Informe quantas tentativas restam: "Tentativas restantes: <restantes>"
//    - Se acertar: exiba "Parabéns! Acertou em <i> tentativa(s)!"
// c) Se o usuário esgotar as tentativas sem acertar, exiba:
//    "Game over! O número era <secreto>."
// d) Ao final, exiba um resumo:
//    - Número secreto
//    - Número de tentativas usadas
//    - Resultado: "Vitória" ou "Derrota"


// → Seu código aqui:
let number =




console.log("_______________________________");




// ------------------------------------------------------------
// DESAFIO 4 – Análise de vendas mensais
// ------------------------------------------------------------
// a) Declare o array de vendas mensais (Jan a Dez):
//    const vendas = [12500, 9800, 15200, 11000, 13750, 8900,
//                    17300, 14600, 10200, 16800, 19500, 22000];
// b) Usando fors, calcule e exiba:
//    - Total de vendas no ano
//    - Média mensal
//    - Mês com maior venda (nome do mês e valor)
//    - Mês com menor venda (nome do mês e valor)
//    - Quantos meses ficaram acima da média
//    - Quantos meses ficaram abaixo da média
// c) Exiba um relatório mês a mês indicando se ficou acima ou abaixo da média:
//    "Janeiro:   R$ 12.500,00 – Abaixo da média"
//    "Fevereiro: R$  9.800,00 – Abaixo da média"
//    ...
//    Dica: use um array com os nomes dos meses para exibir o nome correto.
// d) Exiba o array de objetos { mes, venda, situacao } com console.table().


// → Seu código aqui:




console.log("_______________________________");








// let min = 1
// let max = 100
// let number = Math.random() * (max - min) + min;
// console.log(number)
