// 1.(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa

objAlgarismosRomanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function converteAlgRomanos(strAlgarismosRomanos) {
  
  let arrAlgRomanos = strAlgarismosRomanos.split('');
  let newArray = [];

  for (let index = 0; index < arrAlgRomanos.length; index += 1) {
    for (let key in objAlgarismosRomanos) {
      if (arrAlgRomanos[index] == key) {
        let valor = objAlgarismosRomanos[key];
        newArray.push(valor);
      }
    }
  }
  let numA = 0;
  let numB = 0;
  let total = 0;

  for (let i = (newArray.length - 1); i >= 0; i -= 1) {        
    if (newArray.length > 1)  {
      if (i == 0) { // Quando estiver no último indice
        // numA = newArray[i];      
        return total;
      } else {
        numA = newArray[i];
        numB = newArray[i - 1];
        if (numA > numB) {
          total = numA - numB;        
        } else {
          total = numA + numB;
        }
      }
    } else {
      return newArray[i];
    }
  }
}

console.log(converteAlgRomanos('XI'));
console.log(converteAlgRomanos('IX'));

// 2. Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(myArray) {

  let arrPares = [];
  let intNumber = 0;

  for (let key in myArray) {
    for (let i in myArray[key]) {
      intNumber = myArray[key][i];
      if (intNumber % 2 == 0) {
        arrPares.push(intNumber);
      }
    }
  }
  return arrPares;
}


console.log(arrayOfNumbers(vector));