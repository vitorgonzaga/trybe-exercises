const assert = require("assert");

function secondThirdSmallest(array) {
  array.sort(function (x, y) {
      return x - y;
  });
  return [array[1], array[2]];
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
const output = secondThirdSmallest(parameter);
// console.log(output);
assert.deepStrictEqual(output, result);