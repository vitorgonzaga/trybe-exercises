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

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let arrTesteDois = [2, 4, 6, 7, 10, 0, -3];

function findIndexOfMinValue(myArray) {
  
  let minValue = Math.min(...myArray)

  for (let key in myArray) {
    if (myArray[key] == minValue) {
      return key;
    }    
  }
}

console.log(findIndexOfMinValue(arrTesteDois));

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arrNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNomeDoArray(myArray) {  
  let charCountB = 0;
  // let charCountC = 0;
  let longestName = "";
  for (let key in myArray) {
    let charCountA = myArray[key].length;    
    charCountB = Math.max(charCountA, charCountB);
    // charCountB = charCountC;
    if ((key) == (myArray[key].length - 1)) {
      for (let index in myArray) {
        if (myArray[index].length == charCountB) {
          return myArray[index];
        }
      }
    }  
  }  
}

console.log(maiorNomeDoArray(arrNomes));

// 5.Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

arrTeste = [2, 3, 2, 5, 8, 2, 3];

function verificaQuemMaisSeRepete(myArray) {
  
  let arrRepeticoes = [];

  for (let key in myArray) {
    let contador = 0;
    let numA = myArray[key]
    // console.log(numA);
    for (let index in myArray) {
      let numB = myArray[index];
      // console.log(numB);
      if (numA == numB) {
        contador += 1;
      }
    }
    arrRepeticoes.push(contador);    
  }

  console.log(arrRepeticoes);

  let intMaiorQtdeDeRepeticoes =  Math.max(...arrRepeticoes);
  
  for (let i in arrRepeticoes) {
    if (arrRepeticoes[i] == intMaiorQtdeDeRepeticoes) {
      return myArray[i];
    }
  }
}

console.log(verificaQuemMaisSeRepete(arrTeste));

