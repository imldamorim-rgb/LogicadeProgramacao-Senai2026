// ============================================================
// ATIVIDADE AVALIATIVA N4
// Módulos: Variáveis, Tipos (primitivos e compostos), Arrays e Objetos, Input e Output de Dados
// ============================================================
//
// Instruções Gerais:
// • Copie todo este exercício para um novo arquivo em sua pasta de atividades
// • Nomeie o seu novo arquivo como "atividade-avaliativa-n4.js"
// • Resolva cada exercício no espaço indicado.
// • Utilize template literals sempre que precisar montar frases.
// • NÃO apague os separadores (console.log("_________")).
// • Leia com atenção cada enunciado antes de começar.
// • Cada letra representa um passo. Resolva na ordem.
//
// ============================================================

let lerTeclado = require('readline-sync')

// ------------------------------------------------------------
// QUESTÃO 1 (peso: 0.5) – Construindo um cartão de visita no console
// ------------------------------------------------------------
// a) Crie variáveis para armazenar as seguintes informações REAIS ou FICTÍCIAS:
// • nome (string)
// • profissao (string)
// • cidade (string)
// • email (string)
// • telefone (string)
// • anoExperiencia (number)
// • disponivelParaFreelance (boolean)
// b) Peça ao usuário para preencher as informações do cartão de visitas.
// c) Usando console.log() e template literals, exiba no console
// um cartão de visitas formatado, parecido com o modelo abaixo:
//
// ============================================
// | CARTÃO DE VISITAS |
// ============================================
// | Nome : <nome> |
// | Profissão : <profissao> |
// | Cidade : <cidade> |
// | E-mail : <email> |
// | Telefone : <telefone> |
// | Experiência : <anosExperiencia> anos |
// | Freelance : <disponivelParaFreelance> |
// ============================================

// → Seu código aqui:

//A:
let nome;
let profissao;
let cidade;
let email;
let telefone;
let anoExperiencia;
let disponivelParaFreelance;

//B:
let nome1 = lerTeclado.question('Nome: ');
let profissao1 = lerTeclado.question('Profissao: ');
let cidade1 = lerTeclado.question('Cidade: ');
let email1 = lerTeclado.question('Email: ');
let telefone1 = lerTeclado.question('Telefone: ');
let anoExperiencia1 = lerTeclado.questionInt('Experiencia: ');
let disponivelParaFreelance1 = lerTeclado.keyInYN('Freelance: ');

//C:
console.log('=================================')
console.log('       Cartão de Visitas  ')
console.log('=================================')
console.log(`| Nome: ${nome1}`)
console.log(`| Profissão: ${profissao1}`) 
console.log(`| Cidade: ${cidade1}`)
console.log(`| E-mail: ${email1} `)
console.log(`| Telefone: ${telefone1}`)
console.log(`| Experiência: ${anoExperiencia1} anos`)
console.log(`| Freelance: ${disponivelParaFreelance1}`)
console.log('=================================')

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 2 (peso: 0.5) – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie um array chamado "materias" com pelo menos 5 disciplinas escolares.
// b) Exiba a primeira e a última matéria usando seus índices.
// c) Exiba a quantidade total de matérias usando .length.
// d) Usando template literal, exiba a frase:
// "A 3ª matéria da lista é <...> e a lista tem <...> matérias no total."

// → Seu código aqui:

//A:
let materiais = ['Matemática', 'Química', 'Física', 'Português', 'Biologia'];

//B:
console.log(materiais[0], materiais[4]);

//C:
console.log(materiais.length);

//D:
console.log(`A 3ª matéria da lista é ${materiais[2]} e a lista tem ${materiais.length} matéria no total.`)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 3 (peso: 0.5) – Manipulação direta de posições
// ------------------------------------------------------------
const notas = [6.5, 8.0, 4.5, 9.0, 7.5];

// a) Substitua a nota do índice 2 (4.5) pelo valor 6.0 usando atribuição direta.
// b) Substitua a nota do índice 3 (9.0) pelo valor 8.5 usando atribuição direta.
// c) Exiba o array atualizado.

// → Seu código aqui:

//A:
 notas[2] = 6.0

 //B:
notas[3] = 8.5

//C:
 console.log(notas)


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 4 (peso: 0.5) – Métodos de array: push, pop, unshift, shift
// ------------------------------------------------------------
// Usando o array "materias" da questão anterior e as funções de array listadas acima:
// a) Adicione "Educação Física" ao FINAL da lista e exiba a lista.
// b) Remova o ÚLTIMO elemento da lista e exiba a lista.
// c) Adicione "Filosofia" ao INÍCIO da lista e exiba a lista.
// d) Remova o PRIMEIRO elemento da lista e exiba a lista.
// e) Após todas as operações, exiba quantos itens restaram.

// → Seu código aqui:

//A:
materiais.push('Educação Física');
console.log(materiais)

//B:
materiais.pop();
console.log(materiais)

//C:
materiais.unshift('Filosofia');
console.log(materiais)

//D:
materiais.shift();
console.log(materiais)

//E:
console.log(materiais.length)

// console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 5 (peso: 0.5) – indexOf, includes, slice e concat
// ------------------------------------------------------------
const cidadesBrasil = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Manaus", "Fortaleza"];
const cidadesPortugal = ["Lisboa", "Porto", "Braga"];

// Utilizando as listas e as funções de array listadas acima:
// a) Verifique em qual índice está "Curitiba" e exiba o resultado.
// b) Verifique em qual índice está "Recife" (que NÃO existe na lista) e exiba.
// O que significa esse retorno? Escreva a explicação em um comentário.
// c) Use includes() para verificar se "Salvador" está na lista. Exiba o resultado.
// d) Use includes() para verificar se "Belém" está na lista. Exiba o resultado.
// e) Use concat() para unir "cidadesBrasil" e "cidadesPortugal" em um novo array "todasAsCidades".
// Exiba o novo array.
// f) Use slice() para criar um novo array "cidadesDoMeio" com apenas os elementos
// do índice 3 ao 7 de "todasAsCidades". Exiba o resultado.

// → Seu código aqui:

//A:
console.log(cidadesBrasil.indexOf('Curitiba'))

//B:
console.log(cidadesBrasil.indexOf('Recife'))
// Significa que este índice não existe na lista, assim como começa no 0 por sua inesistência aparecerá como -1.

//C:
console.log(cidadesBrasil.includes('Salvador'))

//D:
console.log(cidadesBrasil.includes('Belém'))

//E:
const todasAsCidades = cidadesBrasil.concat(cidadesPortugal);
console.log(todasAsCidades)

//F:
const cidadesDoMeio = todasAsCidades.slice(3, 8);
console.log(cidadesDoMeio)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 6 (peso: 0.5) – Arrays mistos e flat
// ------------------------------------------------------------
// a) Crie um array aninhado (arrays dentro de outro array) chamado "grupos", conforme exemplo abaixo:
// [
// ["Ana", "Bruno", "Carlos"],
// ["Diana", "Eduardo"],
// ["Fernanda", "Gabriel", "Helena", "Igor"]
// ]
// b) Exiba "grupos".
// c) Exiba o nome do 2º aluno do 3ª grupo (antes de usar flat, usando índices).
// d) Use flat() para transformar "grupos" em um único array chamado "todosOsAlunos" e exiba o resultado.
// e) Exiba o tamanho total do array "grupos" e do array "todosOsAlunos". Explique porque desses valores serem diferentes, se os dados são os mesmos

// → Seu código aqui:

//A:
let grupos = [
    ["Ana", "Bruno", "Carlos"],
    ["Diana", "Eduardo"],
    ["Fernanda", "Gabriel", "Helena", "Igor"]
]

//B:
console.log(grupos)

//C:
console.log(grupos[2][1])

//D:
let todosOsAlunos = grupos.flat();
console.log(todosOsAlunos)

//E:
console.log(grupos.length)
console.log(todosOsAlunos.length)
// O grupos tem tamanho 3 porque são 3 grupos. O todosOsAlunos tem tamanho 9 porque juntou todos os alunos em um único array.

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 7 (peso: 0.5) – Criando e acessando objetos
// ------------------------------------------------------------
// a) Crie um objeto chamado "produto" com as propriedades:
// nome (string), preco (number), disponivel (boolean), categoria (string).
// b) Exiba cada propriedade separadamente usando um console.log() para cada.
// c) Usando template literal, exiba:
// "O produto '<nome>' custa R$ <preco> e está disponível: <disponivel>."
// d) Exiba o objeto utilizando console.table().

// → Seu código aqui:

//A:
let produto = {
    nome: lerTeclado.question('Digite o nome do produto: '),
    preco: lerTeclado.questionInt('Digite o Preco do produto: '),
    disponivel: lerTeclado.keyInYN('Disponivel no estoque: '),
    categoria: lerTeclado.question('Digite a categoria do produto: ')
}

//B:
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.disponivel);
console.log(produto.categoria);

//C:
console.log(`O produto ${produto.nome} custa R$ ${produto.preco} e está disponível: ${produto.disponivel}.`)

//D:
console.table(produto)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 8 (peso: 0.5) – Alterando e adicionando propriedades
// ------------------------------------------------------------
// Usando o objeto "produto" da questão anterior:
// a) Altere o preço para um valor diferente.
// b) Altere "disponivel" para o valor oposto ao atribuido anteriormente.
// c) Adicione uma nova propriedade "estoque" com o valor 20.
// d) Exiba o objeto completo.

// → Seu código aqui:

//A:
produto.preco = 2

//B:
produto.disponivel = !produto.disponivel

//C:
produto.estoque = 20

//D:
console.log(produto)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 9 (peso: 1) – Array de objetos
// ------------------------------------------------------------
// a) Crie um array chamado "listaFuncionarios" com 3 objetos.
// Cada objeto deve ter: nome (string), cargo (string), salario (number), ativo (boolean).
// b) Exiba o nome do primeiro funcionário.
// c) Exiba o cargo do terceiro funcionário.
// d) Exiba o salário do segundo funcionário.
// e) Altere o cargo do primeiro funcionário para um cargo diferente.
// f) Crie um novo objeto e armazene-o em uma variável.
// g) Adicione esse 4º funcionário no array "listaFuncionarios" com push().
// h) Exiba o array completo após todas as alterações.

// → Seu código aqui:

//A: 
let listaFuncionarios = [
    funcionario1 = {
        nome1: lerTeclado.question('Nome: '),
        cargo1: lerTeclado.question('Cargo: '),
        salario1: lerTeclado.questionInt('Salario: '),
        ativo1: lerTeclado.keyInYN('Ativo: '),
    },
   
    funcionario2 = {
        nome2: lerTeclado.question('Nome: '),
        cargo2: lerTeclado.question('Cargo: '),
        salario2: lerTeclado.questionInt('Salario: '),
        ativo2: lerTeclado.keyInYN('Ativo: '),
    },

    funcionario3 = {
        nome3: lerTeclado.question('Nome: '),
        cargo3: lerTeclado.question('Cargo: '),
        salario3: lerTeclado.questionInt('Salario: '),
        ativo3: lerTeclado.keyInYN('Ativo: '),
    },
]

//B:
console.log(listaFuncionarios[0].nome1);

//C:
console.log(listaFuncionarios[2].cargo3);

//D:
console.log(listaFuncionarios[1].salario2);

//E:
listaFuncionarios[0].cargo1 = 'atendente'

//F:
let funcionario4 = {
    nome4: lerTeclado.question('Nome: '),
    cargo4: lerTeclado.question('Cargo: '),
    salario4: lerTeclado.questionInt('Salario: '),
    ativo4: lerTeclado.keyInYN('Ativo: '),
}

//G:
listaFuncionarios.push(funcionario4)

//H:
console.log(listaFuncionarios)
console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 10 (peso: 1.5) – Objetos com arrays e objetos aninhados
// ------------------------------------------------------------
// a) Crie um objeto "loja" com as propriedades:
// • nomeLoja (string)
// • cnpj (string)
// • endereco → objeto contendo: rua, numero, cidade, estado
// • categoriasProdutos → array com pelo menos 3 categorias
// • aberta (boolean)
// b) Exiba o nome da loja.
// c) Exiba a cidade onde a loja está localizada.
// d) Exiba a primeira categoria de produto.
// e) Exiba, usando template literal, a frase:
// "A loja '<nomeLoja>' fica em <cidade> - <estado> e está aberta: <aberta>."
// f) Adicione uma nova categoria ao final do array "categoriasProdutos".
// g) Exiba, usando template literal, a frase:
// "Algumas categorias da loja '<nomeLoja>' são: <primeira categoria> e <última categoria> ."
// h) Exiba o objeto "loja" completo.

// → Seu código aqui:

//A:
let loja = {
        nomeLoja: lerTeclado.question('Nome da loja: '),
        cnpj: lerTeclado.question('Cnpj da loja: '),
        endereco: {
            rua: lerTeclado.question('Rua da loja: '),
            numero: lerTeclado.questionInt('Numero da loja: '),
            cidade: lerTeclado.question('Cidade em que se localiza a loja: '),
            estado: lerTeclado.question('Estado em que se localiza a loja: '),
        },
        categoriasProdutos: ['Papelaria', 'Expediente', 'Almoxarifado'],
        aberta: lerTeclado.keyInYN('Esta aberta: ')
    }
  
//B:
console.log(loja.nomeLoja);

//C:
console.log(loja.endereco.cidade);

//D:
console.log(loja.categoriasProdutos[0]);

//E:
console.log(`A loja ${loja.nomeLoja} fica em ${loja.endereco.cidade} - ${loja.endereco.estado} e está aberta: ${loja.aberta}`);

//F:
loja.categoriasProdutos.push("Maquiagem");

//G:
console.log(`Algumas categorias da loja ${loja.nomeLoja} são: ${loja.categoriasProdutos[0]} e ${loja.categoriasProdutos[3]} .`)

//H:
console.log(loja)

console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 11 (peso: 1.5) – Objetos complexos com array de objetos aninhado
// ------------------------------------------------------------
// a) Crie um objeto "escola" com as seguintes propriedades:
// • nomeEscola (string)
// • cidade (string)
// • diretor → objeto com: nome (string), tempoDeServico (number)
// • turmas → array contendo 2 objetos, cada um com:
// - período (string) - ex: "Manhã", "Tarde"
// - alunos → array de strings com pelo menos 3 nomes
// b) Exiba o nome da escola.
// c) Exiba o nome do diretor.
// d) Exiba o período da segunda turma.
// e) Exiba o terceiro aluno da primeira turma.
// f) Adicione um novo aluno à segunda turma usando push().
// g) Altere o período da primeira turma para "Noite".
// h) Exiba o objeto "escola" completo no final.

// → Seu código aqui:

// a) 
const escola = {
    nomeEscola: "Escola do Futuro",
    cidade: "Rio de Janeiro",
    diretor: {
      nome: "Carlos Alberto",
      tempoDeServico: 15
    },
    turmas: [
      {
        periodo: "Manhã",
        alunos: ["Ana", "Bruno", "Carla"]
      },
      {
        periodo: "Tarde",
        alunos: ["Daniel", "Fernanda", "Gabriel"]
      }
    ]
  };
  
  // b) 
  console.log("Nome da escola:", escola.nomeEscola);
  
  // c) 
  console.log("Nome do diretor:", escola.diretor.nome);
  
  // d) 
  console.log("Período da segunda turma:", escola.turmas[1].periodo);
  
  // e) 
  console.log("3º aluno da primeira turma:", escola.turmas[0].alunos[2]);
  
  // f) 
  escola.turmas[1].alunos.push("Helena");
  
  // g) 
  escola.turmas[0].periodo = "Noite";
  
  // h) 
  console.log("Objeto completo da escola:", escola);
console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 12 (peso: 2) – Sistema de Biblioteca
// ------------------------------------------------------------
//
// Você vai criar a estrutura de dados de uma biblioteca simples.
// Todos os dados dos passos A e B devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A: Variáveis da biblioteca
// • Colete os dados para as seguintes variáveis/constantes:
// - "nomeBiblioteca" (string) → nome da biblioteca
// - "anoDeFundacao" (number) → ano de fundação
// - "capacidadeLivros" (number) → quantidade máxima de livros
// - "bibliotecaAberta" (boolean)→ true ou false
// • Exiba todas usando template literal em uma única frase descritiva.
//
// PASSO B: Acervo de livros (array de objetos)
// • Crie um array chamado "acervo" com 3 objetos de livros.
// Cada livro deve ter:
// - titulo (string)
// - autor (string)
// - ano (number)
// - paginas (number)
// - disponivel (boolean)
//
// PASSO C: Acessando o acervo
// • Exiba o título do 1º livro.
// • Exiba o autor do 2º livro.
// • Exiba o número de páginas do 3º livro.
// • Exiba a quantidade total de livros no acervo (.length).
//
// PASSO D: Alterando o acervo
// • Marque o 1º livro como indisponível (disponivel = false).
// • Altere o título do 3º livro para um título diferente.
// • Adicione um 4º livro ao array "acervo" usando push(),
// criando o objeto diretamente dentro do push (sem necessidade de coletar esse dado via terminal).
//
// PASSO E: Seções da biblioteca (array de strings)
// • Crie um array "secoes" com: "Ficção", "Ciências", "História", "Infantil".
// • Exiba a primeira e a última seção.
// • Adicione "Tecnologia" ao final de "secoes".
// • Remova a primeira seção de "secoes".
// • Exiba o array "secoes".
//
// PASSO F: Relatório final
// • Usando template literals, exiba um relatório/frase com:
// - Nome e ano de fundação da biblioteca
// - Quantidade de livros no acervo
// - Quantidade de seções disponíveis
// - Título e autor de CADA livro do acervo (um livro por linha)
//
// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// QUESTÃO 13 (questão bonus - peso: 1) – Cardápio de Restaurante
// ------------------------------------------------------------
//
// Monte a estrutura de dados de um restaurante.
// Todos os dados do passo A devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A:
// • Crie um objeto "restaurante" com:
// - nome (string)
// - tipoCozinha (string) ex: "Italiana", "Japonesa"
// - nota (number) ex: 8.7
// - aberto (boolean)
// - endereco → objeto com: rua, numero, bairro, cidade
// - cardapio → array com pelo menos 4 objetos de pratos, cada um com:
// • nomePrato (string)
// • preco (number)
// • vegano (boolean)
//
// PASSO B: Acessos e exibições
// • Exiba o nome do restaurante e sua nota.
// • Exiba o endereço completo em uma única frase (rua, numero, bairro, cidade). ex. "O restaurante <nome> está localizado na <rua>, <numero>, <bairro>, <cidade>".
// • Exiba o nome e o preço do 1º prato do cardápio.
// • Exiba se o 3º prato é vegano ou não, usando template literal. ex. "O prato <nomePrato> é vegano: <vegano>".
//
// PASSO C: Alterações
// • Altere o preço do 2º prato para um valor diferente.
// • Adicione um novo prato ao cardápio usando push().
// • Altere "aberto" para false.
//
// PASSO D: Relatório do cardápio
// • Usando console.log() e template literals, exiba:
// - Nome do restaurante, tipo de cozinha e nota
// - Status: aberto ou fechado
// - Quantos pratos há no cardápio (.length)
// - Nome, preço e se é vegano de CADA prato (um prato por linha)
//
// → Seu código aqui:


console.log("_______________________________");