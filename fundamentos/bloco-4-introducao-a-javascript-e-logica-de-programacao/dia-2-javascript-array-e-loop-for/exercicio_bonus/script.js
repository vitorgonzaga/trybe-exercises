// Exemplo de algoritimo booble sort

// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Colocando em ordem crescente

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

// Colocando em ordem decrescente

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

// Criando um novo array a partir do array numbers

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let arrNovo =[];
let intFirstNumber;
let intSecondNumber;
let intResultadoDaMultiplicacao;
let intUltimoIndex = (numbers.length - 1)
for (let index = 1 ; index < numbers.length -1 ; index += 2) {  
    
  // If else para tratar quando for o último item
  
  if (index == intUltimoIndex) {
      intFirstNumber = numbers[index];
      intSecondNumber = numbers[index];
  } else {
      intFirstNumber = numbers[index];
      intSecondNumber = numbers[index -= 1];
  }

  intResultadoDaMultiplicacao = intFirstNumber * intSecondNumber
  arrNovo.push(intResultadoDaMultiplicacao)

}
 
console.log(arrNovo);
    
// Gabarito

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray =[];

for (let index = 0 ; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index+1]);
  } else {
    newArray.push(numbers[index] * 2)
  }
}

console.log(newArray);
