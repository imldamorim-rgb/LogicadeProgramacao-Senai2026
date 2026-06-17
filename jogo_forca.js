// Jogo da forca
//Fazer verificação se realmente é uma palavras (se colocar uma letra também não é palavra)
// Erros: n/6, esxemplo
// Ocupar as casas com as letras, bem como desconsiderar espaço.


let lerTeclado = require(`readline-sync`)

let palavras = 
["desafio", 
"estratégia", 
"conquista", 
"persistência", 
"criatividade", 
"equilíbrio", 
"trajetória", 
"descoberta", 
"transformação", 
"oportunidade"]

 function sortearPalavra(){
     let indice = Math.floor(Math.random()*palavras.length)
     return palavras[indice]
 }

 function criarResposta(palavra){
     let resposta = []

     for(let i = 0; i < palavra.length; i++){
            resposta.push("_")
        }
        return resposta 
    }

function letraRepetida(letra, letraUsadas){
    for(let i = 0; i < letraUsadas.length; i++){
        if(letraUsadas[i] === letra){
            return "letra já usada - true" 
        }
    }
    return "letra livre - false"
}

function verificarLetra(palavra, resposta, letra){
    let encontrou = false

    for(let i = 0; i < palavra.length; i++){
        if(palavra[i] === letra){
            resposta[i] = letra
            encontrou = true
        }
    }
    return encontrou
}

function venceu(resposta){
    for (let i = 0; i < resposta.length; i++){
        if(resposta[i] === "_"){
            return false
        }
    }
    return true
}

let palavra = sortearPalavra(palavras)
let resposta = criarResposta(palavra)

let erros = 0
let letraUsadas = []

while(erros < 6){

    console.log("--- JOGO DA FORCA ---")
    
    let palavrasExibidas = ""
    
    for(let i = 0; i < resposta.length; i++){
        palavrasExibidas = palavrasExibidas + resposta[i] + " "
    }

    console.log(`\nPalavra: ${palavrasExibidas}`)
    console.log(`Erros: ${erros}`)

    let usadas = ""

    for(let i = 0; i < letraUsadas.length; i++){
        usadas = usadas + letraUsadas[i] + " "
    }

    console.log(`Letras usadas: ${usadas}`)

let tentativa = lerTeclado.question(`\nDigite uma letra ou chute a palavra: `)

if(tentativa.length > 1){
    if(tentativa == palavra){
        console.log(`\nParabéns! Você acertou.`)
        break;
    } else{
        erros++
        console.log(`\nPalavra incorreta.`)
        lerTeclado.question(`Clique ENTER para continuar...`)
        continue
    }
}

    letraUsadas.push(tentativa)

    if(!verificarLetra(palavra, resposta, tentativa)){
        erros++
    }

    if(venceu(resposta)){
    console.log(`Parabéns! Você venceu!`)
    console.log(`Palavra: ${palavra}`)
    break;
    }
}

if(!venceu(resposta) && erros >= 6){
    console.log(`Você perdeu!`)
    console.log(`Palavra correta: ${palavra}`)
}
