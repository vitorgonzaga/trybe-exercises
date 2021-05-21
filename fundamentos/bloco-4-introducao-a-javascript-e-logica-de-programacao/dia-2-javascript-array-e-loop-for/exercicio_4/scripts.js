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

