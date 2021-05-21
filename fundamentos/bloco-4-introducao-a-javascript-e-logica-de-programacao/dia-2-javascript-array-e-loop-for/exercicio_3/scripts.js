// Utilize o for/of para imprimir os elementos da lista names com o console.log
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
  console.log(name);
}

// É possivel fazer o mesmo com uma string

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

// Também é possível realizar operações matemáticas com arrays de números


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

// Obs.: Importante ressaltar que os valores do array não são alterados com o for

console.log(arrOfNumbers);
