// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos.
// O código deve retornar em sequência 2 , 15 e 54 .
// Dica: use spread operator .

const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   assert.strictEqual(rectangleArea(), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
// }); // ReferenceError: rectangles is not defined

// Considerando que a função utiliza 2 parametros e que na chamada dela no teste unitário (assert) esses parâmetros não foram informados, basta mencionar o spread operator referente ao 'rectangle' que assume a função de 'item' do array 'rectangles' que está sendo chamado no forEach.
// Solução:

rectangles.forEach((rectangle) => {
  assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
});
