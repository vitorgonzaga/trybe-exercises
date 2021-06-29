// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');
const { cursorTo } = require('readline');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// É necessário transformar a string em array utilizando a função split com o delimitador "''" (aspas simples sem espaço)

function containsA(array) {
  return array.reduce((acc, word) =>
    acc + word.split('').reduce((accumulator, letter) => {
      if (letter === 'A' || letter === 'a') return accumulator += 1
      return accumulator;
    }, 0), 0);
};

console.log(containsA(names));

assert.deepStrictEqual(containsA(names), 20);
