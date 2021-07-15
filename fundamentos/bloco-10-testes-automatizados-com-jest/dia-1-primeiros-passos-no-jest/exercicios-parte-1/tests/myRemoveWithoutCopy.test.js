const myRemoveWithoutCopy = require('../functions/myRemoveWithoutCopy');

// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// const myArray = [1, 2, 3, 4];
// myRemoveWithoutCopy(myArray, 3);
// assert.deepStrictEqual(myArray, [1, 2, 4]);
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

describe('testing myRemoveWithoutCopy function...', () => {

  beforeEach(() => {
    myArray = [1, 2, 3, 4];
  });

  test('removing number 3...', () => {
    expect(myRemoveWithoutCopy(myArray, 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy(myArray, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('if the original array was modified...', () => {
    myRemoveWithoutCopy(myArray, 3);
    expect(myArray).toEqual([1, 2, 4]);
  });

  test('when function receives a param which doesnt get match with array parameter...', () => {
    expect(myRemoveWithoutCopy(myArray, 5)).toEqual([1, 2, 3, 4]);
  });

});
