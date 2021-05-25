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

// 3.A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função. Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...


const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

// Gabarito

const result = {};

for (let index = 0; index < basket.length; index += 1) {
  const fruit = basket[index];
  if (!result[fruit]) {
    result[fruit] = 0;
  }
  result[fruit] += 1  
}

console.log(result);

const summaries = [];
for (fruit in result) {
  let message = `${result[fruit]} ${fruit}`;
  if (result[fruit] > 1) {
    message += 's';
  }
  summaries.push(message);
}

console.log(summaries);

console.log(`Sua cesta possui: ${summaries.join(', ')}.`);


// basket.sort()
// console.log(basket)

// let clearArray = [];
// let arrContagem = [];

// for (let index = 0; index < basket.length; index += 1) {
//   let strFruit = basket[index];
//   let intContador = 0;
//   for (let i = 0; i < basket.length; i += 1) {
//     let strFruitVerified = basket[i];
//     if (strFruit == strFruitVerified) {
//       intContador += 1;      
//     } 
//   }
  
//   let blnAddNewFruit = false;

//   if (clearArray.length > 0) {
//     for (let u = 0; u < clearArray.length; u += 1) {
//       if (strFruit == clearArray[u]) { // Nesse caso não precisa incluir nova Fruta no clear array
//         // blnCheckElement = true;
//         break;
//       } else {
//         blnAddNewFruit = true;
//       }      
//     }
//     if (blnAddNewFruit == true) {
//       clearArray.push(strFruit);
//       arrContagem.push(intContador);      
//     }
//   } else {
//     clearArray.push(strFruit);
//     arrContagem.push(intContador);
//   }  
// }

// console.log(clearArray);
// console.log(arrContagem);

// const cesta = {};

// for (let key of clearArray) {
//   cesta[key] = arrContagem[key];
// }

// console.log(cesta);
