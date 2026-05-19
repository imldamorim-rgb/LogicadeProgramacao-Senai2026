// ============================================================
//   JOGO: Batalha por Turnos
// ============================================================
//
// Um herói enfrenta uma sequência de 3 inimigos em batalhas por turnos.
// A cada turno, herói e inimigo atacam um ao outro simultaneamente.
// O combate continua até que um dos dois chegue a 0 ou menos de HP (pontos de vida).
//
// REGRAS:
//   - O herói começa com 100 HP.
//   - Cada inimigo é um objeto com HP, dano mínimo e dano máximo definidos em um array de inimigos.
//   - A cada turno, o herói escolhe uma ação:
//       1 – Atacar → causa dano aleatório entre seu dano mínimo e máximo
//       2 – Defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//       3 – Curar → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo deve ter por turno:
//     70% de chance de atacar → causa dano aleatório entre seu dano mínimo e máximo
//     20% de chance de defender → reduz em 75% o dano recebido neste turno (arredonde para baixo)
//     10% de chance de curar  → recupera HP entre 10 e 20 (possível usar apenas 1 vez por batalha)
//   - O inimigo ataca sempre com dano aleatório entre seu dano mínimo e dano máximo.
//   - O ataque tanto do jogador quando do inimigo devem ser realizados simultaneamente.
//   - Há uma chance de 5% do ataque (de ambos) ser um golpe crítico, causando o dobro de dano.
//     Caso isso corra, exiba que foi um dado crítico.
//   - Se o herói vencer, recupera 25 HP (sem ultrapassar 100).
//   - Se o herói perder, o jogo termina.
//
// AO FINAL DE CADA BATALHA:
//   - Exiba o resultado e a vida atual do herói.
//   - Se o herói vencer as 3 batalhas, exiba o resultado final.
//
// Após o desenvolvimento das regras base acima descritas, 
//   sinta-se livre para implementar melhorias e adicionar novos recursos.
//   - Exemplos de mecânicas adicionais:
//      - 2 tipos de armas para o herói, uma possuindo maior dano, mas possui menor precisão e a outra o inverso.
//      - Inimigos gerados aleatoriamente com atributos variados, aumentando exponencialmente a dificuldade.
//      - Sistema de níveis para o herói, permitindo que ele ganhe experiência e aumente suas habilidades.
//      - Itens e equipamentos que podem ser encontrados ou comprados (derrotar inimigos concede ouro), oferecendo bônus e habilidades especiais.
//      - Eventos aleatórios que podem ocorrer durante as batalhas, como a intervenção de aliados ou armadilhas no campo de batalha.
//
// ============================================================

// ============================================================
// HERÓI (não altere a estrutura — altere os valores se quiser)
// ============================================================

const heroi = {
    nome: "", // Deve ser preenchido pelo jogador
    hpAtual: 100,
    hpMax: 100,
    danoMin: 15,
    danoMax: 25
  };
  
  // ============================================================
  // INIMIGOS (não altere a estrutura — altere os valores se quiser)
  // Remova o inimigo da lista se ele for derrotado
  // ============================================================
  
  const inimigos = [
    { 
      nome: "Goblin",
      hp: 30,
      danoMin: 6,
      danoMax: 12
    },
    { 
      nome: "Orc Guerreiro",
      hp: 50,
      danoMin: 10,
      danoMax: 18
    },
    { 
      nome: "Dragão Negro",
      hp: 80,
      danoMin: 15,
      danoMax: 25
    }
  ];
  
  // ============================================================
  // INÍCIO DO JOGO
  // ============================================================
  
  console.log("╔══════════════════════════╗");
  console.log("║   BEM VINDO(A) AO ....   ║");
  console.log("╚══════════════════════════╝");
  
  // Peça o nome do herói e exiba as regras do jogo resumidamente.
  // → Seu código aqui:

  const readline = require("readline-sync");

  // Nome do herói
  heroi.nome = readline.question("Digite o nome do heroi: ");
  
  console.log(`\n${heroi.nome}, sobreviva às 3 batalhas. 
  O combate continua até que um dos dois chegue a 0 ou menos de HP (pontos de vida). `);
  
  console.log("_______________________________");
  
  // ============================================================
  // LOOP DE BATALHAS
  // ============================================================
  
  console.log("╔════════════════════════════╗");
  console.log("║    VAMOS AS BATATALHAS!    ║");
  console.log("╚════════════════════════════╝");
  
  // → Seu código aqui:
  for (let i = 0; i < inimigos.length; i++) {

    let inimigo = inimigos[i];
    let curaHeroiUsada = false;
    let curaInimigoUsada = false;
  
    console.log(`\nBATALHA CONTRA ${inimigo.nome}\n`);
  
    while (heroi.hpAtual > 0 && inimigo.hp > 0) {
  
      console.log(`Seu HP: ${heroi.hpAtual} | HP do ${inimigo.nome}: ${inimigo.hp}`);
  
      let acao = readline.question("1-Atacar | 2-Defender | 3-Curar: ");
  
      let danoHeroi = Math.floor(Math.random() * (heroi.danoMax - heroi.danoMin + 1)) + heroi.danoMin;
      let danoInimigo = Math.floor(Math.random() * (inimigo.danoMax - inimigo.danoMin + 1)) + inimigo.danoMin;
  
      let defHeroi = false;
      let defInimigo = false;
  
      // CRÍTICO
      if (Math.random() < 0.05) {
        danoHeroi *= 2;
        console.log("CRÍTICO DO HERÓI!");
      }
  
      if (Math.random() < 0.05) {
        danoInimigo *= 2;
        console.log("CRÍTICO DO INIMIGO!");
      }
  
      // AÇÃO DO HERÓI
      if (acao == 1) {
        console.log(`${heroi.nome} atacou!`);
      } else if (acao == 2) {
        defHeroi = true;
        console.log(`${heroi.nome} se defendeu!`);
      } else if (acao == 3 && !curaHeroiUsada) {
        let cura = Math.floor(Math.random() * 11) + 10;
        heroi.hpAtual += cura;
        if (heroi.hpAtual > heroi.hpMax) heroi.hpAtual = heroi.hpMax;
        curaHeroiUsada = true;
        console.log(`${heroi.nome} curou ${cura} HP`);
      }
  
      // AÇÃO DO INIMIGO
      let sorte = Math.random();
  
      if (sorte < 0.7) {
        console.log(`${inimigo.nome} atacou!`);
      } else if (sorte < 0.9) {
        defInimigo = true;
        console.log(`${inimigo.nome} se defendeu!`);
      } else if (!curaInimigoUsada) {
        let cura = Math.floor(Math.random() * 11) + 10;
        inimigo.hp += cura;
        curaInimigoUsada = true;
        console.log(`${inimigo.nome} curou ${cura} HP`);
      }
  
      // APLICAR DEFESA
      if (defHeroi) danoInimigo = Math.floor(danoInimigo * 0.25);
      if (defInimigo) danoHeroi = Math.floor(danoHeroi * 0.25);
  
      // DANO SIMULTÂNEO
      if (acao == 1) inimigo.hp -= danoHeroi;
      if (sorte < 0.7) heroi.hpAtual -= danoInimigo;
  
      console.log(`${heroi.nome} causou ${danoHeroi}`);
      console.log(`${inimigo.nome} causou ${danoInimigo}\n`);
    }
    // RESULTADO DA BATALHA
if (heroi.hpAtual > 0) {
  console.log(`${inimigo.nome} derrotado!`);
  heroi.hpAtual += 25;
  if (heroi.hpAtual > heroi.hpMax) heroi.hpAtual = heroi.hpMax;
  console.log(`HP do herói: ${heroi.hpAtual}`);
} else {
  console.log("══════════════════════════════");
  console.log("GAME OVER");
  console.log(`${heroi.nome} morreu para ${inimigo.nome}`);
  console.log("══════════════════════════════");
}
// RESULTADO FINAL
if (heroi.hpAtual > 0) {
  console.log("══════════════════════════════");
  console.log("VOCÊ VENCEU O JOGO!");
  console.log(`${heroi.nome} sobreviveu a tudo`);
  console.log(`HP final: ${heroi.hpAtual}/${heroi.hpMax}`);
  console.log("══════════════════════════════");
}
  }
  
  console.log("_______________________________");
  
  // ============================================================
  // RESULTADO FINAL
  // ============================================================
  //
  // PASSO 5 – Após o for de batalhas:
  //
  //   a) Se heroi.hp > 0 (venceu todas as batalhas):
  //        Exiba:
  //        "══════════════════════════════"
  //        "VOCÊ VENCEU O JOGO!"
  //        "<heroi.nome> sobreviveu a todas as batalhas!"
  //        "HP final: <heroi.hp>/<heroi.hpMax>"
  //        "══════════════════════════════"
  //
  //   b) Se heroi.hp <= 0 (foi derrotado):
  //        Exiba:
  //        "══════════════════════════════"
  //        "GAME OVER"
  //        "<heroi.nome> caiu em batalha contra o <nome do inimigo>"
  //        "══════════════════════════════"
  
  // → Seu código aqui:
// RESULTADO DA BATALHA
// if (heroi.hpAtual > 0) {
//   console.log(`${inimigo.nome} derrotado!`);
//   heroi.hpAtual += 25;
//   if (heroi.hpAtual > heroi.hpMax) heroi.hpAtual = heroi.hpMax;
//   console.log(`HP do herói: ${heroi.hpAtual}`);
// } else {
//   console.log("══════════════════════════════");
//   console.log("GAME OVER");
//   console.log(`${heroi.nome} morreu para ${inimigo.nome}`);
//   console.log("══════════════════════════════");
// }
// RESULTADO FINAL
// if (heroi.hpAtual > 0) {
//   console.log("══════════════════════════════");
//   console.log("VOCÊ VENCEU O JOGO!");
//   console.log(`${heroi.nome} sobreviveu a tudo`);
//   console.log(`HP final: ${heroi.hpAtual}/${heroi.hpMax}`);
//   console.log("══════════════════════════════");
// }
