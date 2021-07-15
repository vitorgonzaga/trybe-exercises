const myRemove = require('../functions/myRemove');

// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// const myList = [5, 6, 7, 8];
// myRemove(myList, 5);
// assert.deepStrictEqual(myList, [5, 6, 7, 8]); // Não altera o array original
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

  describe('testing myRemove function', () => {
    test('removing number 3...', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('function myRemove() using an specific array', () => {
      const myList = [5, 6, 7, 8];
      myRemove(myList, 5)
      console.log(myList);
      expect(myList).toEqual([5, 6, 7, 8]) // Não altera o array original
    });
    test('removing number 5 which doesnt exist in param array...', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
  });