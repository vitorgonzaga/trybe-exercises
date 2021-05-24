// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(strWord) {
  let palavra = strWord.split('');  
  let bolPalindromo = false;    // A declaracao dessa variavel é opcional
  let wordInverted = "";    

  for (let i = palavra.length - 1 ; i >= 0; i -= 1) {    
    // wordInverted.push(palavra[i]);
    wordInverted += palavra[i];     
  }

  if (strWord === wordInverted) {
    bolPalindromo = true;
    return bolPalindromo // Poderia ser 'return true' simplesmente
  } else {
    return bolPalindromo // Poderia ser 'return false' simplesmente
  }  
}

console.log(verificaPalindromo('arara'));

// Outra forma de fazer

function verificaPalindromoVersaoDois(strWord) {  
  strPalavraInvertida = strWord.split('').reverse().join('')
  if (strPalavraInvertida === strWord) {
    return true;
  } else {
    return false
  }
}

console.log(verificaPalindromoVersaoDois("arara"));

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrTeste = [2, 3, 6, 7, 10, 1];

function findIndexOfMaxValue(myArray) {
  
  let maxValue = Math.max(...myArray)

  for (let key in myArray) {
    if (myArray[key] == maxValue) {
      return key;
    }    
  }
}

console.log(findIndexOfMaxValue(arrTeste));

