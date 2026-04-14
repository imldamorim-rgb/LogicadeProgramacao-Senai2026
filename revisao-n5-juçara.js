let perguntas = require('readline-sync');
// ============================================================
//   ATIVIDADE AVALIATIVA N5
//   Módulos: Operadores e Estruturas Condicionais (if/else, switch/case)
// ============================================================
//
//  Instruções Gerais:
//  • Resolva o exercício no espaço indicado.
//  • NÃO utilize funções (function) nem laços de repetição (for, while, do/while).
//  • Utilize readline-sync para entrada de dados.
//  • Para executar: node atividade-avaliativa-n5.js.
//  • Antes da entrega, deixe as respostas descomentadas.
//  • A atividade pode ser desenvolvida individualmente ou em equipe.
//    Se for resolvida em equipe, somente um deve fazer a entrega
//    Se houverem 2 códigos iguais, ambos serão considerados plágio (nota 0).
//
//  • Nome do(s) aluno(s): Juçara Vilma Dassi
//
// ============================================================


// ------------------------------------------------------------
// QUESTÃO ÚNICA (peso: 10) – Formulário Condicionado: Agência de Viagens
// ------------------------------------------------------------
//
// Você vai criar o sistema de recomendação de destinos de uma agência de viagens.
// O formulário faz perguntas ao usuário e, dependendo de cada resposta,
// o caminho seguido é diferente — até chegar a um dos destinos finais (A a I).
//
// REGRAS:
//   • Use if/else e/ou switch/case para toda a lógica de ramificação.
//   • Mostre as opções de cada pergunta com console.log() antes de coletar a resposta.
//   • Use questionInt() para perguntas de múltipla escolha numerada.
//   • Use question() para entradas de texto.
//   • Sempre que uma opção inválida for escolhida, exiba: "Opção inválida. Encerrando o formulário."
//     e não continue com as próximas perguntas.
//
// ─────────────────────────────────────────────────────────────
// PASSO A – Dados iniciais
// ─────────────────────────────────────────────────────────────
//
// Colete:
//   • "nomeViajante" → nome do viajante
//   • "idadeViajante" → idade
//   • "orcamento - 1) Econômico 2) Moderado 3) Luxo" → orçamento
//
// Exiba: "Olá, <nomeViajante>! Vamos encontrar o destino perfeito para você."
//
// ─────────────────────────────────────────────────────────────
// PASSO B – Pergunta 1
// ─────────────────────────────────────────────────────────────
//
// Exiba as opções e colete em "resp1":
//
//   Qual tipo de clima você prefere?
//   1) Tropical / Quente
//   2) Frio / Neve
//   3) Temperado / Ameno
//
// ─────────────────────────────────────────────────────────────
// PASSO C – Pergunta 2 (depende da Pergunta 1)
// ─────────────────────────────────────────────────────────────
//
//   se resp1 for Tropical → exiba e colete em "resp2":
//     Você prefere:
//     1) Praia e mar
//     2) Floresta e ecoturismo
//
//   se resp1 for Frio → exiba e colete em "resp2":
//     Você quer:
//     1) Neve de verdade
//     2) Frio sem neve
//
//   se resp1 for Temperado → exiba e colete em "resp2":
//     Você prefere explorar:
//     1) Cultura, museus e arquitetura histórica
//     2) Natureza, trilhas e parques nacionais
//
// ─────────────────────────────────────────────────────────────
// PASSO D – Pergunta 3 (depende das Perguntas 1 e 2)
// ─────────────────────────────────────────────────────────────
//
//   se resp1 for 1 e resp2 for 1 (Tropical + Praia) → exiba e colete em "resp3":
//     Como você prefere sua viagem?
//     1) Animada — praias badaladas e muito agito
//     2) Tranquila — sossego e natureza preservada
//
//   se resp1 for 1 e resp2 for 2 (Tropical + Floresta):
//     → Sem Pergunta 3. Vá direto ao PASSO E.
//
//   se resp1 for 2 e resp2 for 1 (Frio + Neve) → exiba e colete em "resp3":
//     Qual é o seu objetivo?
//     1) Praticar esportes de inverno (esqui, snowboard)
//     2) Contemplar a paisagem nevada e relaxar
//
//   se resp1 for 2 e resp2 for 2 (Frio + Sem neve):
//     → Sem Pergunta 3. Vá direto ao PASSO E.
//
//   se resp1 for 3 e resp2 for 1 (Temperado + Cultura) → exiba e colete em "resp3":
//     Qual região você prefere?
//     1) Europa
//     2) América do Sul
//
//   se resp1 for 3 e resp2 for 2 (Temperado + Natureza):
//     → Sem Pergunta 3. Vá direto ao PASSO E.
//
// ─────────────────────────────────────────────────────────────
// PASSO E – Destino final
// ─────────────────────────────────────────────────────────────
//
// Com base nas respostas, defina a variável "destino" conforme a tabela:
//
//   Caminho                                   | Destino
//   ──────────────────────────────────────────┼──────────────────────────────────────────────
//   Tropical → Praia → Animada       (1→1→1)  | A) "Cancún (México) ou Fortaleza (Brasil)"
//   Tropical → Praia → Tranquila     (1→1→2)  | B) "Maldivas ou Fernando de Noronha (Brasil)"
//   Tropical → Floresta              (1→2)    | C) "Amazônia (Brasil) ou Costa Rica"
//   Frio → Neve → Esportes           (2→1→1)  | D) "Aspen (EUA) ou Bariloche (Argentina)"
//   Frio → Neve → Contemplação       (2→1→2)  | E) "Ushuaia (Argentina) ou Lapônia (Finlândia)"
//   Frio → Sem neve                  (2→2)    | F) "Serra Gaúcha (Brasil) ou Patagônia Chilena"
//   Temperado → Cultura → Europa     (3→1→1)  | G) "Lisboa, Barcelona ou Roma"
//   Temperado → Cultura → Américas   (3→1→2)  | H) "Buenos Aires, Cusco ou Cartagena"
//   Temperado → Natureza             (3→2)    | I) "Chapada dos Veadeiros ou Torres del Paine"
//
// Exiba o resultado com console.log() e template literal no formato:
//
//   ===============================================
//   |   RECOMENDAÇÃO DA AGÊNCIA VOYAGER           |
//   ===============================================
//   |   Viajante : <nomeViajante>                 |
//   |   Idade    : <idadeViajante> anos           |
//   |   Orçamento: <Econômico / Moderado / Luxo>  |
//   |   Destino  : <destino>                      |
//   ===============================================
//   Boa viagem, <nomeViajante>! O <destino> espera por você.
//
// Dica: converta "orcamento" para texto legível antes de exibir.
//   "1" → "Econômico"   "2" → "Moderado"   "3" → "Luxo"
//
// ─────────────────────────────────────────────────────────────
// PASSO F – Dica de orçamento (Bônus)
// ─────────────────────────────────────────────────────────────
//
// Após o resultado, exiba uma dica com base em "orcamento" (usando switch/case):
//   Econômico → "Dica: procure voos com antecedência e use hostels ou Airbnb!"
//   Moderado → "Dica: hotéis 3 estrelas e pacotes combinados são ótimas opções!"
//   Luxo → "Dica: resorts all-inclusive e voos executivos são a sua praia!"

// → Seu código aqui:
 
let nomeViajante = "Rodolfo"                                                            //passo A
let idadeViajante = 75                                                                 
let orcamento = ("1 - Economico / 2 - Moderado / 3 - Luxo")      
// Revisão: Escolheram o nome e idade por mim, além da minha condição financeira.                             

console.log(`Olá, ${nomeViajante}! Vamos encontrar o destino perfeito para voce.`)      //passo A
// Revisão: estrutura correta

console.log("1) Tropical / Quente")                                                     //passo B
console.log("2) Frio / Neve")                                                          
console.log("3) Temperado / Ameno")    
// Revisão: Coloquei o n° 4, porém o documento apenas continou rodando indo para "Voce prefere explorar:" 
// Porém por mais que não tenha enunciado dá para se encontrar.                                          

let resp1 = perguntas.questionInt("Qual tipo de clima voce prefere? ")                  //passo B 
// Revisão: colocaria esta pergunta na opções para ficar mais compreensivo, e no lugar apenas perguntar
// qual a opção escolhida

if (resp1 === 1) {                                                                      //passo C
    console.log("1) Praia e mar")                                                       
    console.log("2) Floresta e ecoturismo")                                             
} else if (resp1 === 2) {                                                               
    console.log("1) Neve de verdade")                                                   
    console.log("2) Frio sem neve")                                                     
} else if (resp1 ===3) {                                                                
    console.log("1) Cultura, museus e arquitetura historica")                           
    console.log("2) Natureza, trilhas e parques nacionais")                           
}
// Revisão: não tem como eu "escolher", além de que só será exibido caso a 
// pessoa der sorte de chutar um n° de 1 a 3

let resp2 = perguntas.questionInt("Voce prefere explorar: ")                            //passo C
// Revisão: novamente colocaria esta pergunta na opções para ficar mais compreensivo, e no lugar apenas perguntar
// qual a opção escolhida
let resp3

if (resp1 === 1 && resp2 === 1) {        
    console.log("1) Animada — praias badaladas e muito agito")                          //passo D               
    console.log("2) Tranquila — sossego e natureza preservada") 
    resp3 = perguntas.questionInt("Como voce prefere sua viagem? ")                                                                                           
} else if (resp1 === 1 && resp2 === 2) {                                                
    console.log("Sem pergunta 3. Va direto ao passo E.")                                
} else if (resp1 === 2 && resp2 === 1) {     
    console.log("1) Praticar esportes de inverno (esqui, snowboard)")                                                     
    console.log("2) Contemplar a paisagem nevada e relaxar")  
    resp3 = perguntas.questionInt("Qual e o seu objetivo? ")                                                                                                   
} else if (resp1 === 2 && resp2 === 2) {                                                                                    
    console.log("Sem pergunta 3. Va direto ao passo E.")                                                                   
} else if (resp1 === 3 && resp2 === 1) {   
    console.log("1) Europa")                                                            
    console.log("2) America do Sul")     
    resp3 = perguntas.questionInt("Qual regiao voce prefere?")                                                                                                                  
} else if (resp1 === 3 && resp2 === 2) {                                                
    console.log("Sem pergunta 3. Va direto ao passo E.")                                //passo D                           
}
// Revisão: a principio a estrutura está correto, mas acho que se fosse em um site
// caso desse erro, acredito que a mensagem colocado ficaria confusa, pois o usuario não tem conhecimento
// de qual passo é esse.

let destino

if (resp1 === 1 && resp2 === 1 && resp3 === 1) {                                         //passo E
    destino = ("Cancun (Mexico) ou Fortaleza (Brasil)")                                  //passo E
} else if (resp1 ===1 && resp2 === 1 && resp3 === 2) {                                   //passo E
    destino = ("Maldivas ou Fernando de Noronha (Brasil)")                               //passo E
} else if (resp1 === 1 && resp2 === 2) {                                                 //passo E
    destino = ("Amazonia (Brasil) ou Costa Rica")                                        //passo E
} else if (resp1 === 2 && resp2 === 1 && resp3 === 1) {                                  //passo E
    destino = ("Aspen (EUA) ou Bariloche (Argentina)")                                   //passo E
} else if (resp1 === 2 && resp2 === 1 && resp3 === 2) {                                  //passo E
    destino = ("Ushuaia (Argentina) ou Laponia (Finlandia)")                             //passo E
} else if (resp1 === 2 && resp2 === 2) {                                                 //passo E
    destino = ("Serra Gaucha (Brasil) ou Patagonia Chilena")                             //passo E
} else if (resp1 === 3 && resp2 === 1 && resp3 === 1) {                                  //passo E
    destino = ("Lisboa, Barcelona ou Roma")                                              //passo E
} else if (resp1 === 3 && resp2 === 1 && resp3 === 2) {                                  //passo E
    destino = ("Buenos Aires, Cusco ou Cartagena")                                       //passo E
} else if (resp1 === 3 && resp2 === 2) {                                                 //passo E
    destino = ("Chapada dos Veadeiros ou Torres del Paine")                              //passo E
} 
// Revisão: estrutura correte porém não tem o else final, usado para caso de erro.

console.log("===============================================")
console.log("     | RECOMENDACAO DA AGENCIA VOYAGER         ")
console.log("===============================================")
console.log(`     |  Viajante : ${nomeViajante}             `)
console.log(`     |  Idade:     ${idadeViajante}            `)
console.log(`     |  Orcamento: ${orcamento}                `)
console.log(`     |  Destino:   ${destino}                  `)
console.log("===============================================")
console.log(`Boa viagem, ${nomeViajante}! O ${destino} espera por voce.`)
// Revisão: estrutura correta e entendivel
// Revisão: o orçamento apresenta todas as opções, em vez de apresentar somente a escolhida.
           

orcamento = perguntas.questionInt("Escolha uma das opcoes a seguir para receber uma dica: 1)Economica | 2)Moderado | 3)Luxo:  ")   //PASSO F:

switch (orcamento) {
    case 1:
        console.log("Dica orcamento Economico: procure voos com antecedência e use hostels ou Airbnb!")
        break;
    case 2:
        console.log("Dica orcamento Moderado: hotéis 3 estrelas e pacotes combinados são ótimas opções!")
        break;
    case 3:
        console.log("Dica orcamento de Luxo: resorts all-inclusive e voos executivos são a sua praia!")          
        break;
}
// Revisão: estrutura correta e compreensivel
// caso não seja escolhido nenhum apenas encerra, não há mensagem comunicando que foi escolhido errado.

// Considerações finais:
// Algumas partes do codigo são complicadas de identificar e entender a ordem, por mais que tenha algumas estruturas certas
// a maioria ou está na ordem eincorreta ou realmente errada.
// No terminal fica confuso pois está todos "grudados", dificultando a leitura.
