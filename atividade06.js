// ============================================================
//   ATIVIDADE 06 – Operadores Lógicos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-06.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerCodigo = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Tabela verdade do &&
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true && true → <resultado>"
//
// Combinações:
//   a) true && true
//   b) true && false
//   c) false && true
//   d) false && false

// → Seu código aqui:
let a = true && true;
let b = true && false;
let c = false && true;
let d = false && false;

console.log(`true && true =`, a);
console.log(`true && false =`, b);
console.log(`false && true =`, c);
console.log(`false && false =`, d);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Tabela verdade do ||
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true || false → <resultado>"
//
// Combinações:
//   a) true || true
//   b) true || false
//   c) false || true
//   d) false || false

// → Seu código aqui:
let a2 = true || true;
let b2 = true || false;
let c2 = false || true;
let d2 = false || false;

console.log(`true || true =`, a2);
console.log(`true || false =`, b2);
console.log(`false || true =`, c2);
console.log(`false || false =`, d2);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
// b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
// c) Declare "lugarVago" com valor false.
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.

// → Seu código aqui:

//a
let sistemaAtivo = true;
//b
let modoManutencao = !sistemaAtivo;
//c
let lugarVago = false;
//d
let lugarOcupado = !lugarVago;
//e
console.log(`Sistema ativo: ${sistemaAtivo ? "Está ativo" : "Não está ativo"}`),
console.log(`Modo manutenção: ${modoManutencao ? "Está em manutenção" : "Não está em manutenção"}`),
console.log(`Lugar vago: ${lugarVago ? "Está vago" : "Não está vago"}`),
console.log(`Lugar ocupado: ${lugarOcupado ? "Está ocupado" : "Não está ocupado"}`),

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Combinando && com operadores relacionais
// ------------------------------------------------------------
// a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
// b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
// c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
// d) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
// e) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
// f) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.

// → Seu código aqui:

//a
let infoUsuario = {
    peso: lerCodigo.questionInt('Informe seu peso: '),
    altura: lerCodigo.questionFloat('Informe sua altura: '),
}
//b
infoUsuario.IMC = infoUsuario.peso / (infoUsuario.altura ** 2);
//C
let imcAbaixoDoPeso = infoUsuario.IMC < 18.5;
//d
let imcNormal = infoUsuario.IMC>= 18.5 && infoUsuario.IMC <= 24.9;
//e
let imcAcimaDoPeso = infoUsuario.IMC >= 25 && infoUsuario.IMC <= 29.9;
//f
console.log(`IMC:`, infoUsuario.IMC.toFixed(2));
console.log(`IMC está normal: ${imcNormal ? "Sim" : "Não"}`);
console.log(`IMC está abaixo do peso: ${imcAbaixoDoPeso ? "Sim" : "Não"}`);
console.log(`IMC está acima do peso: ${imcAcimaDoPeso ? "Sim" : "Não"}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Combinando || com operadores relacionais
// ------------------------------------------------------------
// a) Declare "notaFinal" com valor 4.8.
// b) Armazene em "precisaRecuperacao" o resultado de:
//    notaFinal >= 4 && notaFinal < 6
// c) Armazene em "reprovado" o resultado de:
//    notaFinal < 4
// d) Armazene em "precisaDeAjuda" o resultado de:
//    precisaRecuperacao || reprovado
// e) Exiba todos os resultados com template literal.

// → Seu código aqui:

//a
let notaFinal = 4.8;
//b
let precisaRecuperacao = notaFinal >= 4 && notaFinal < 6;
//c
let reprovado = notaFinal < 4;
//d
let precisaDeAjuda = precisaRecuperacao || reprovado;
//e
console.log(`Nota final: ${notaFinal}
Precisa de recuperação: ${precisaRecuperacao ? "Sim" : "Não"}
Reprovado: ${reprovado ? "Sim" : "Não"}
Precisa de ajuda: ${precisaDeAjuda ? "Sim" : "Não"}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.

// → Seu código aqui:

//a
let temperatura = 38.2;
//b
let diagnostico = temperatura >=37.6 ? "Febre detectada" : "Temperatura normal"
 //c
console.log(diagnostico)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário                    → "Velocidade regular"
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.

// → Seu código aqui:
//a
let velocidade = 110;
let limiteVelocidade = 100;
//b
let statusMulta = velocidade > limiteVelocidade ? "Multa Aplicada" : "Velocidade Regular"
//c
console.log(`Velocidade atingida: ${velocidade}
Situação: ${statusMulta}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Operador ternário e questionamento
// ------------------------------------------------------------
// a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
// b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
// b) Usando o operadores ternários, armazene em "mensagem":
//    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
//    Caso contrário → "Desconto não aplicado."
// c) Exiba a variável "mensagem" com template literal.

// → Seu código aqui:

//a
let ehEstudante = lerCodigo.keyInYN(`Você é estudante:`);
//b
let valor = lerCodigo.keyInYN(`Você paga mais que R$ 1000,00 mensais pelo curso:`);
//c
let mensagem = ehEstudante && valor ? "Desconto Aplicado" : "Desconto não Aplicado"
//d
console.log(`Situação: ${mensagem}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Verificação de acesso com input
// ------------------------------------------------------------
// a) Peça ao usuário e armazene os dados em um objeto:
//    - Sua idade (questionInt()).
//    - Se possui ingresso (keyInYN()).
//    - Se é associado ao clube (keyInYN()).
// b) Armazene e exiba os resultados das seguintes verificações em outro objeto:
//    - "podeEntrarNormal": (idade maior ou igual a 18 e possuiIngresso) ou ehAssociado
//    - "podeEntrarSocio": possuiIngresso e ehAssociado
//    - "precisaAcompanhante": idade menor que 18
//    - "naoPodeEntrar": não possuiIngresso e não ehAssociado
// c) Exiba a mensagem final usando ternário:
//    Se podeEntrarNormal ou podeEntrarSocio → "Entrada liberada!"
//    Caso contrário → "Entrada negada."

// → Seu código aqui:

//a
let dadosUsuario = {
    idade: lerCodigo.questionInt('Informe sua idade: '),
    ingresso: lerCodigo.keyInYN('Possui ingresso: '),
    associado: lerCodigo.keyInYN('É associado ao grupo: '),
};
//b
let geral = {
    podeEntrarNormal: (dadosUsuario.idade >=18 && dadosUsuario.ingresso) || dadosUsuario.associado,
    podeEntrarSocio: dadosUsuario.ingresso && dadosUsuario.associado,
    precisaAcompanhar: dadosUsuario.idade <18,
    naoPodeEntrar: !dadosUsuario.ingresso && !dadosUsuario.associado
}
//c
console.log(`Pode entrar: ${geral.podeEntrarNormal || geral.podeEntrarSocio ? "Entrada Liberada" : "Entrada Negada"}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Verificação de estoque com objeto
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do produto.
//    - Quantidade em estoque.
//    - Se o produto está ativo no sistema (keyInYN()).
// b) Armazene os dados em um objeto chamado "produto".
// c) Crie as seguintes verificações booleanas:
//    - "temEstoque": quantidade maior que 0
//    - "produtoDisponivel": temEstoque e está ativo
//    - "produtoIndisponivel": não temEstoque || não está ativo
// d) Exiba os resultados com template literal.

// → Seu código aqui:

//A e B
let produto = {
    nomeProduto: lerCodigo.question("Nome do produto: "),
    quantEstoque: lerCodigo.questionInt("Quantidade em estoque: "),
    ativoSist: lerCodigo.keyInYN("O produto está ativo no sistema? "),
}
//c
let temEstoque = produto.quantEstoque >0
let produtoDisponivel = produto.temEstoque && produto.ativoSist
let produtoIndisponivel = !produto.temEstoque || !produto.ativoSist
//d
console.log(`Tem estoque: ${temEstoque ? "Sim" : "Não"}
O produto está disponível: ${produtoDisponivel ? "Sim" : "Não"}
O produto está indisponível : ${produtoIndisponivel ? "Sim" : "Não"}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Verificação de permissões
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se ele é administrador (keyInYN())
//    - Se ele está logado (keyInYN())
//    - Se a conta está ativa (keyInYN())
// b) Armazene as respostas em um objeto chamado "usuario".
// c) Crie as seguintes verificações:
//    - "acessoSistema": logado e contaAtiva
//    - "acessoAdmin": acessoSistema e ehAdmin
//    - "acessoNegado": não logado ou não contaAtiva
// d) Exiba todos os resultados.

// → Seu código aqui:

//A e B
let usuario = {
    administrador: lerCodigo.keyInYN("Você é administrador?"),
    logado: lerCodigo.keyInYN("Você está logado?"),
    contaAtiva: lerCodigo.keyInYN("A conta está ativa?"),
}
//c
let acessoSistema = usuario.logado && usuario.contaAtiva
let acessoAdmin = acessoSistema && usuario.administrador
let acessoNegado = !usuario.logado || !usuario.contaAtiva
//d
console.log(`Possui acesso ao sistema: ${acessoSistema ? "Sim" : "Não"}
Possui acesso de Administrador: ${acessoAdmin ? "Sim" : "Não"}
Acesso negado: ${acessoNegado ? "Sim" : "Não"}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Sistema simples de login
// ------------------------------------------------------------
// a) Crie um objeto "credenciaisSistema" contendo:
//    usuario: "admin"
//    senha: "1234"
// b) Pergunte ao usuário:
//    - usuário
//    - senha
// c) Crie as verificações:
//    - "usuarioCorreto": usuarioDigitado estritamente igual a usuario
//    - "senhaCorreta": senhaDigitada estritamente igual a senha
//    - "loginValido": usuarioCorreto e senhaCorreta
// d) Usando ternário, exiba:
//    Se loginValido → "Login realizado com sucesso!"
//    Caso contrário → "Usuário ou senha incorretos."

// → Seu código aqui:
//a
let credenciaisSistema = {
    usuario: "admin",
    senha: "1234",
}
//b
let perguntas = lerCodigo.question("Informe seu usuario:")
let perguntas2 = lerCodigo.question("Informe sua senha:")
//c
let usuarioCorreto = perguntas === credenciaisSistema.usuario
let senhaCorreta = perguntas2 === credenciaisSistema.senha
let loginValido = usuarioCorreto && senhaCorreta
//d
console.log(`Exibindo: ${loginValido ? "Login realizado com sucesso" : "Usuario ou senhas incorretos"}`)


console.log("_______________________________");