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

// Item 7 == converte uma nota data em porcentagem (de 0 a 100) em conceitos de A e F

let intNota = 45

switch (intNota) {
  case (intNota>=90):
    console.log("A");
    break;

  case (intNota>=80):
    console.log("B");
    break;

  case (intNota>=70):
    console.log("C");
    break;

  case (intNota>=60):
    console.log("C");
    break;
      
  case (intNota>=50):
    console.log("D");
    break;

  case (intNota<50):
    console.log("F");
    break;

  default:
    console.log("Fatal Error!!!");
    break;
}

// item 8 == Escreva um numero que defina tres numeros em variáveis e retorne true se pelo menos uma das tres for par. Caso contraria retorna false

let restoDaDivisao_a = (a % 2);
let restoDaDivisao_b = (b % 2);
let restoDaDivisao_c = (c % 2);

if ((restoDaDivisao_a = 0) || (restoDaDivisao_b = 0) || (restoDaDivisao_c = 0)) {
  console.log(true);  
} else {
  console.log(false);
}

// item 9 == mesmo caso do anterior poreḿ retornando true caso o numero seja impar

if ((restoDaDivisao_a = 0) || (restoDaDivisao_b = 0) || (restoDaDivisao_c = 0)) {
  console.log(false);  
} else {
  console.log(true);
}

// item 10 == Calculadora de lucro/Prejuízo

let dblcusto = 50;
let dblprecoDeVenda = 100;
let intQuantidade = 1000;

if ((dblcusto <0) || (dblprecoDeVenda<0)) {
  console.log(`Erro: Valor menor que zero`);
} else {
  let dblResultado = (dblprecoDeVenda-(dblcusto*(1.2)));
  console.log(`Resultado: ${dblResultado*intQuantidade}`);
}

// item 11 == Calculadora de Salário (Dedução de IR e INSS)

let dblSalario = 3000;
console.log(`Salario Bruto: ${dblSalario}`);

//tabela do inss
switch (true) {
  case (dblSalario <= 1556.94):
    dblAliquotaInss = 0.08;
    break;
    
  case (dblSalario > 1556.94) && (dblSalario<=2594.92):
    dblAliquotaInss = 0.09;
    break;

  case (dblSalario>2594.92) && (dblSalario<=5189.82):
    dblAliquotaInss = 0.11;
    break;

  case (dblSalario>5189.82):
    dblAliquotaInss = 0.11;
    break;

  default:
    dblAliquotaInss = 0;
    break;
}

let dblInssADeduzir = (dblSalario * dblAliquotaInss);
console.log(`Deducao de INSS: ${dblInssADeduzir}`);
let dblSalarioLiquidoDeInss = (dblSalario - dblInssADeduzir);
console.log(`Salario Liquido de INSS: ${dblSalarioLiquidoDeInss}`);

// Tabela do IR
switch (true) {
  case (dblSalarioLiquidoDeInss<=1903.98):
    dblAliquotaIr = 0;
    dblParcelaADeduzir = 0;
    break;
    
  case (dblSalarioLiquidoDeInss>1903.99) && (dblSalarioLiquidoDeInss<=2826.65):
    dblAliquotaIr = 0.075;
    dblParcelaADeduzir = 142.80;
    break;

  case (dblSalarioLiquidoDeInss>2826.65) && (dblSalarioLiquidoDeInss<=3751.05):
    dblAliquotaIr = 0.15;
    dblParcelaADeduzir = 354.80;
    break;

  case (dblSalarioLiquidoDeInss>3751.05) && (dblSalarioLiquidoDeInss<=4664.68):
    dblAliquotaIr = 0.225;
    dblParcelaADeduzir = 636.13;
    break;
  
  case (dblSalarioLiquidoDeInss>4664.68):
    dblAliquotaIr = 0.275;
    dblParcelaADeduzir = 869.36;
    break;

  default:
    dblAliquotaIr = 0;
    dblParcelaADeduzir = 0;
    break;
}

let dblIrAPagar = ((dblSalarioLiquidoDeInss*dblAliquotaIr)-dblParcelaADeduzir)
console.log(`IR a Pagar: ${dblIrAPagar}`);
let dblSalarioLiquido = (dblSalarioLiquidoDeInss-dblIrAPagar)
console.log(`Salario Liquido (deposito na cc): ${dblSalarioLiquido}`);

