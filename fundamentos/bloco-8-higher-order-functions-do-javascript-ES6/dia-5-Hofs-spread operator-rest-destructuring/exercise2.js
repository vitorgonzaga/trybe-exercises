// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
// Dica: use parâmetro rest .

const assert = require('assert');

// escreva sum abaixo
const sum = (...param) => param.reduce(((acc, curr) => acc + curr), 0);

const numbers = [1, 2, 3, 3, 6, 5, 10]

console.log(sum(...numbers)); // 30

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);