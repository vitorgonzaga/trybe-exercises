// Item 1  == operacoes aritmeticas basicas

let a = 5;
let b = 2;
let adicao = (a+b);
let subtracao = (a-b);
let multiplicacao = (a*b);
let divisao = (a/b);
let modulo = (a%b);

console.log(`adicao: ${adicao}`);
console.log(`subrtacao: ${subtracao}`);
console.log(`multiplicacao: ${multiplicacao}`);
console.log(`divisao: ${divisao}`);
console.log(`modulo: ${modulo}`);

// item 2 == retorne o valor maior de dois numeros

if (a>b) {
  console.log(`O numero: ${a} é maior que o número ${b}`);
}
else if (a<b) {
  console.log(`O numero: ${a} é menor que o número ${b}`);
}
else {
  console.log(`O numero: ${a} é igual ao número ${b}`);
}

// item 3 == retorne o maior de tres numeros

let c = 7

if (a>b && a>c) {
    console.log(`O numero ${a} é o maior de três`);  
}  
else if (b>a && b>c) {
  console.log(`O numero ${b} é o maior de três`);
}
else if (c>a && c>b) {
  console.log(`O numero ${c} é o maior de três`);
}
else {
  console.log(`Os numeros são iguais`);
}

// item 4 == retorne se o valor é positivo ou negativo

let intNumero = 12;
let intRestoDaDivisao = (intNumero % 2)
console.log(`Resto da divisao: ${intRestoDaDivisao}`);

if (intRestoDaDivisao == 0) {
  console.log(`O número ${intNumero} é positivo`);
}
else {
  console.log(`O número ${intNumero} é negativo`);
}

// item 5 == programa que retorna booleano a respeti

let anguloHum = 90;
let anguloDois = 45;
let anguloTres = 45;
let SomaDosAngulos = (anguloHum + anguloDois + anguloTres);

if (SomaDosAngulos != 180) {
  console.log(false);
} else {
  console.log(true);
}

// item 6 == programa que retorna o movimento que uma peça de xadrez faz

let strPecaDeXadrez = "Rainha"
let strPecaDeXadrezEdit = strPecaDeXadrez.toLowerCase();

switch (strPecaDeXadrezEdit) {
  case "rainha":
    console.log("todos os movimentos");
    break;
  
  case "rei":
    console.log("todos os movimentos limitados a uma casa por vez");
    break;

  case "bispo":
    console.log("diagonais");
    break;

  case "cavalo":
    console.log("movimentos em L");
    break;

  case "torre":
    console.log("retas");
    break;

  default:
    break;
}

