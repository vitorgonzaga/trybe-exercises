
let arrNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,50,51,52,53,54,55,56,57,58,59,60];
let arrDivisores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,50,51,52,53,54,55,56,57,58,59,60];
let arrNumerosPrimos = [];

let contadorDeDivisibilidade = 1;

for (let index = 0; index < arrNumbers.length; index += 1) {
  
  for (let secondIndex = 0; secondIndex < arrDivisores.length; secondIndex += 1) {

    if (arrNumbers[index] % arrDivisores[secondIndex] == 0) {
      contadorDeDivisibilidade += 1;
    }
  }
  
  if ((contadorDeDivisibilidade <= 2) && (arrNumbers[index] != 9)) {
    arrNumerosPrimos.push(arrNumbers[index]);
  }
  contadorDeDivisibilidade = 0;    
}
  


console.log(arrNumerosPrimos);