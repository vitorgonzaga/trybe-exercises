const readline = require("readline-sync");

const imc = (peso, altura) => {
  return (peso / Math.pow(altura, 2)).toFixed(2);
};

const classificaImc = (indImc) => {
  if (indImc < 18.5) {
    console.log("Situação: Abaixo do peso (magreza)");
    return;
  } else if (indImc >= 18.5 && indImc < 25) {
    console.log("Situação: Peso normal");
    return;
  } else if (indImc >= 25 && indImc < 30) {
    console.log("Situação: Acima do peso (sobrepeso)");
    return;
  } else if (indImc >= 30 && indImc < 35) {
    console.log("Situação: Obesidade grau I");
    return;
  } else if (indImc >= 35 && indImc < 40) {
    console.log("Situação: Obesidade grau II");
    return;
  }
};

const name = readline.question("Qual seu nome?");
const peso = readline.questionFloat("Qual seu peso?");
const altura = readline.questionFloat("Qual seu altura?");
const seuImc = imc(peso, altura);

console.log(
  `Olá, ${name}! Você tem ${peso} de peso e ${altura} de altura. Seu imc é: ${seuImc}.`
);

classificaImc(seuImc);

module.exports = {
  imc,
  classificaImc,
};
