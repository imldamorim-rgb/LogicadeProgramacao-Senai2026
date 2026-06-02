// ============================================================
//   ATIVIDADE 12 – Estruturas de Dados: Vetor (Array)
// ============================================================

// Dica: Faça os exercícios utilizando funções de array,
//       mas também tente resolver os desafios sem essas funções

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo e exibindo um vetor
// ------------------------------------------------------------
// a) Declare um vetor com 5 cidades de sua escolha.
// b) Exiba a lista de cidades utilizando for().
// c) Exiba a primeira e a última cidade; a última utilizando .length.
// d) Exiba a quantidade total de cidades.

// → Seu código aqui:

// //a
// let cidades = ['Jaragua', 'Corupa', 'Curitiba', 'Mandirituba', 'Joinville'];

// //b
// for(let i = 0; i < cidades.length; i++){
//     console.log(`Indice ${i}: ${cidades[i]}`)
// }

// //c
// console.log(`Primeira: ${cidades[0]}`)
// console.log(`Ultimo: ${cidades[cidades.length-1]}`)

// //d
// console.log(cidades.length)


// console.log("_______________________________");

 
// // ------------------------------------------------------------
// // EXERCÍCIO 2 – Soma e média
// // ------------------------------------------------------------
// // a) Utilizando o vetor:
//       const numeros = [12, 7, 25, 3, 18, 9, 31, 14];
// // b) Calcule a SOMA de todos os números.
// // c) Calcule a MÉDIA (soma / quantidade).
// // d) Exiba: "Soma: <soma> | Média: <média>" (use toFixed(2) na média).

// // → Seu código aqui:

// soma = 0;

// //b
// for(let i = 0; i < numeros.length; i++){
//     soma += numeros[i]
// }

// //c
// const media = soma / numeros.length;

// //d
// console.log(`Soma: ${soma} | Média: ${media.toFixed(2)}`)


// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 3 – Maior e menor
// // ------------------------------------------------------------
// // a) Utilizando o vetor:
//       const temperaturas = [22.5, 19.0, 27.3, 18.7, 30.1, 25.4, 21.8];
// // b) Encontre a MAIOR e a MENOR temperatura.
// // c) Exiba: "Maior: <maior>°C | Menor: <menor>°C"

// // → Seu código aqui:

// let menor = temperaturas[0];
// let maior = temperaturas[0]

// //b
// for(let i = 1; i < temperaturas.length; i++){
//     if(temperaturas[i] < menor) {
//         menor = temperaturas[i]
//     } else if(temperaturas[i] > maior)
//         maior = temperaturas[i]
//     }

//  //c
//  console.log(`Maior: ${maior} | Menor: ${menor}`)

// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 4 – Pares e ímpares
// // ------------------------------------------------------------
// // a) Utilizando o vetor:
//       const listaNumeros = [4, 7, 10, 13, 16, 19, 22, 25, 28];
// // b) Conte quantos números são pares e quantos são ímpares.
// // c) Crie dois vetores: paresVetor[] e imparesVetor[], e adicione os números em cada um.
// // d) Exiba:
// //    "Pares (<qtd>): <paresVetor>"
// //    "Ímpares (<qtd>): <imparesVetor>"

// // → Seu código aqui:

// let paresVetor = []
// let imparesVetor = []

// let qtdPares = 0
// let qtdImpares = 0

// //b
// for(let i = 0; i < listaNumeros.length; i++){
//     if(listaNumeros[i] % 2 === 0){
//         paresVetor.push(listaNumeros[i])
//         qtdPares++
//     } else{
//         imparesVetor.push(listaNumeros[i])
//         qtdImpares++
//     }
// }

// //d
// console.log(`Pares ${qtdPares} : ${paresVetor}`)
// console.log(`Impares ${qtdImpares} : ${imparesVetor}`)


// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 5 – Inversão de vetor
// // ------------------------------------------------------------
// // a) Utilizando o vetor:
//       const vetorOriginal = ["A", "B", "C", "D", "E"];
// // b) Usando for(), crie um novo vetor 'vetorInvertido' com os elementos em ordem reversa.
// // c) Exiba ambos os vetores:
// //    "Original:  <original>"
// //    "Invertido: <invertido>"
// // d) Inverta o vetorOriginal, mas utilizando função de array,
// //    salve o resultado em vetorInvertido2 e exiba o resultado.

// // → Seu código aqui:

// // b
// const vetorInvertido = [];

// for (let i = vetorOriginal.length - 1; i >= 0; i--) {
//     vetorInvertido.push(vetorOriginal[i]);
// }

// // C
// console.log("Original: ", vetorOriginal);
// console.log("Invertido: ", vetorInvertido);

// // d
// const vetorInvertido2 = [...vetorOriginal].reverse();

// console.log("Invertido com reverse(): ", vetorInvertido2);


// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 6 – Cadastro dinâmico
// // ------------------------------------------------------------
// // a) Crie um vetor vazio para produtos;
// // b) Pergunte ao usuário quantos produtos deseja cadastrar.
// // c) Usando for(), peça o nome de cada produto e adicione ao vetor
// // d) Ao final, também utilizando for() exiba o vetor completo e a mensagem:
// //    "<qtd> produtos cadastrados."

// // → Seu código aqui:

// //a
// let produtos = [];
// let nome = ''

// //b
let lerPergunta = require(`readline-sync`)

// let qtd = lerPergunta.questionInt(`Quantos produtos deseja cadastrar: `);

// //c
// for(let i = 1; i <= qtd; i++){
//     nome = lerPergunta.question(`Informe o nome do produto: `)
//     produtos.push(nome)
// }
 
// //d
// for(let i = 1; i <= produtos.length; i++){
//     console.log(produtos)
// }

// console.log(`${qtd} produtos cadastrados`)

// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 7 – Busca em vetor
// // ------------------------------------------------------------
// // a) Utilizando o vetor:
//       const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
// // b) Pergunte ao usuário o nome de um aluno.
// // c) Usando for e break, verifique se o nome existe na lista.
// //    - Se existir: "<nome> está matriculado(a) (índice <i>)."
// //    - Se não:     "<nome> não foi encontrado(a)."

// // → Seu código aqui:

// //b
// let aluno = lerPergunta.question(`Digite o nome do aluno: `)

// //c

// let indice = -1

// for(let i = 0; i < alunos.length; i++){
//     if(alunos[i] === aluno){
//         indice = i
//         console.log(`${aluno} está matriculado(a) (indice ${i})`)
//         break;
//     }
// }

// if(indice === -1){
//     console.log(`${aluno} não foi encontrado(a)`)
// }


// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 8 – Vetor de objetos
// // ------------------------------------------------------------
// // a) Utilizando o vetor:
//       const livros = [
//         { titulo: "Dom Casmurro",       paginas: 256 },
//         { titulo: "O Cortiço",          paginas: 304 },
//         { titulo: "Memórias Póstumas",  paginas: 208 },
//         { titulo: "Capitães da Areia",  paginas: 280 },
//       ];
// // b) Exiba a lista com console.table().
// // c) Usando for, calcule:
// //    - Total de páginas de todos os livros.
// //    - Média de páginas por livro.
// // d) Exiba o título do livro com MAIS páginas.

// // → Seu código aqui:

// //b
// console.table(livros)

// let somaLivros = 0

// //c
// for(let i = 0; i < livros.length; i++){
//     somaLivros += livros[i].paginas
// }

// let mediaLivros = somaLivros / livros.length

// //d

// let maiorLivro = livros[0]

// for(let i = 1; i < livros.length; i++){
//     if(livros[i].paginas > maiorLivro.paginas){
//         maiorLivro = livros[i]
//     }
// }
// console.log(maiorLivro)

// console.log("_______________________________");


// // ------------------------------------------------------------
// // EXERCÍCIO 9 – Filtro com push
// // ------------------------------------------------------------
// // a) Utilizando o vetor:
//       const idades = [12, 17, 21, 15, 30, 45, 9, 67, 19, 8];
// // b) Usando for, separe o vetor acima em dois vetores:
// //    - menores[]: pessoas com idade < 18
// //    - adultos[]: pessoas com idade >= 18
// // c) Exiba:
// //    "Menores (<qtd>): <menores>"
// //    "Adultos (<qtd>): <adultos>"

// // → Seu código aqui:

// let menores = []
// let adultos = []

// let qtdMenores = 0
// let qtdAdultos = 0

// //b
// for(let i = 0; i < idades.length; i++){
//     if(idades[i] < 18){
//         menores.push(idades[i])
//         qtdMenores++
//     } else{
//         adultos.push(idades[i])
//         qtdAdultos++
//     }
// }

// //d
// console.log(`Menores ${qtdMenores} : ${menores}`)
// console.log(`Adultos ${qtdAdultos} : ${adultos}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de notas
// ------------------------------------------------------------
// a) Crie um vetor vazio para notas;
// b) Usando do...while e switch, exiba o menu:
//    1 - Adicionar nota
//    2 - Listar notas
//    3 - Estatísticas
//    4 - Remover última
//    5 - Limpar todas
//    0 - Sair
// c) Realize as funções escolhidas até o usuário escolher 0.
// d) Ao sair: "Encerrando. Total de notas registradas: <qtd>"

// → Seu código aqui:

//a
let notas = []
let opcao

//b
do{
    console.log(`
    1 - Adicionar nota
    2 - Listar notas
    3 - Estatísticas
    4 - Remover última
    5 - Limpar todas
    0 - Sair
    `)

    opcao = lerPergunta.questionInt(`Escolha uma opcao: `)
    let qtd = 0

    //c
    switch(opcao){
        case 1:
            let nota = lerPergunta.question(`Digite a nota: `)
            notas.push(nota)
            qtd++
            break;
        case 2:
            console.log(`Exibindo a lista...`)
            console.log(notas)
            break;
        case 3:
        console.log(`Estatísticas:
        Notas adicinada: ${notas}.
        Quantidade: ${qtd}. 
         `)
        case 4:
            console.log(`Removendo a ultima nota...`)
            notas.pop()
            break;
        case 5:
            console.log(`Limpando notas...`)
            break;
        case 0:
            console.log(`Encerrando. Total de notas registradas: ${qtd}`)
    }
} while(opcao != 0)

console.log("_______________________________");