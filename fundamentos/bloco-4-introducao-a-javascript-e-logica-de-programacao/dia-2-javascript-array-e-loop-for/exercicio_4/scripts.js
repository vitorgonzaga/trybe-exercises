// Copnsidere o array abaixo para realizar o que se pede:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores

for (let index=0; index<numbers.length;index+=1) {
  console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado

let sum = 0
for (let index = 0; index < numbers.length; index+=1) {
  sum += numbers[index];  
}
console.log(sum);

// calcule e imprima a média aritmética dos valores contidos no array

let media = (sum / numbers.length);
console.log(media);

// Caso o resultado da média seja maior que 20 imprima a mensagem "valor maior que 20". Caso não seja imprima a mensagem "valor menor que 20"

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor que 20");
}

// Utilizando for descubra o maior valor contido no array e imprima-o

let maxNumber = 0;
for (let index = 0; index < numbers.length; index +=1) {
  let numberA = numbers[index];
  if (numberA>maxNumber) {
    maxNumber = numberA;
  }   
}
console.log(maxNumber);

// Também é possível utilizar a propriedade max da biblioteca math "Math.MAx"
// Exemplo 1
var arr = [1, 2, 3];
var max = arr.reduce(function(a, b) {
  return Math.max(a, b);  
});
console.log(max);
//Exemplo 2
var arr = [1, 2, 3];
var max = Math.max(...arr);
console.log(max);

// Descubra quantos valores impares existem no array e imprima o resultado

QtdNumerosImpares = 0;
for (let index = 0; index < numbers.length ; index += 1) {
  let number = numbers[index]
  if (number % 2 != 0) {
    QtdNumerosImpares += 1
  }
}
  
if (QtdNumerosImpares === 0) {
    console.log("nenhum valor impar encontrado");
  } else {
    console.log(`Existem ${QtdNumerosImpares} numeros impares`);
  }

// Dexcubra o menor valor contido no array e imprima-o

let minNumber = 0;
for (let index = 0; index < numbers.length - 1; index += 1) {
  let numberA = numbers[index];
  let numberB = numbers[numbers.length - 1];
  if (index == 0) {
    minNumber = Math.min(numberA, numberB);  
  } else {
    minNumber = Math.min(minNumber, numberA, numberB);
  }  
}
console.log(minNumber);