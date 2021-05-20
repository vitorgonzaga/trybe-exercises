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




