const readline = require("readline-sync");

const velocidadeMedia = (distancia, tempo) => {
  const result = distancia / tempo;
  console.log(`Velocidade média: ${result}`);
};

const distanciaEmMetros = readline.questionInt("Qual a distancia em metros? ");
const tempoEmSegundos = readline.questionInt("Qual o tempo em segundos? ");

velocidadeMedia(distanciaEmMetros, tempoEmSegundos);

// module.exports = velocidadeMedia;
