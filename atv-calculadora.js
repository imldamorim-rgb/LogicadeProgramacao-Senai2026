//==== ATIVIDADE AVALIATIVA - CALCULADORA ====

let lerCodigo = require(`readline-sync`);
let resultado = 0;
let operação

do{
console.log(`\n===============================`)
console.log(`Resultado atual: ${resultado}`)
console.log(`===============================`)

console.log("\nMENU DE OPERAÇÃO");
console.log("1 – Soma");
console.log("2 – Subtração");
console.log("3 – Multiplicação");
console.log("4 – Divisão");
console.log("5 – Resto");
console.log("6 – Zerar");
console.log("0 – Sair");

operação = lerCodigo.questionFloat(`\nDigite o numero da operacao desejada: `);

    if(operação >= 1 && operação <= 5) {
        
    let num1 = lerCodigo.questionFloat(`\nDigite o primeiro numero: `);
    let num2 = lerCodigo.questionFloat(`Digite o segundo numero: `);

    switch(operação) {
    case 1:
        resultado = num1 + num2
        break;
    case 2:
        resultado = num1 - numb2
        break;
    case 3:
        resultado = num1 * num2
        break;
    case 4:
        if(num2 === 0) {
            console.log(`\nEssa divisão é inválida!`)
        } else
        resultado = num1 / num2
        break;
    case 5:
        resultado = num1 % num2
        break;
        }
        console.log(`\nResultado: ${resultado}`)
    } else if(operação === 6) {
        resultado = 0;
        console.log(`Calculadora zerada`)
    } else if(operação === 0) {
        console.log(`Encerrando calculadora...`)
    } else {
        console.log(`Opção inválida!`)
    }
} while (operação !== 0)



