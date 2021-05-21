// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;
let arrAstericos =[];

// Alimenta o array
for (let index = 0; index < n; index += 1) {
  arrAstericos.push("*");
}
  
console.log(arrAstericos);

let char = ""
//percorre o vetor
for (let index = 0; index < n; index += 1) {
  char = ""
  for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    char = char.concat("*")
  }  
  console.log(char);
}
