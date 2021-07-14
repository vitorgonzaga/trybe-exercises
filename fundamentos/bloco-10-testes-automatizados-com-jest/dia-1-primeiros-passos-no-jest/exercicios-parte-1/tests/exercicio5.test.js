const { obj1, obj2, obj3 } = require('../functions/exercicio5');

// assert.deepStrictEqual(obj1, obj2);
// assert.notDeepStrictEqual(obj1, obj3);
// assert.notDeepStrictEqual(obj2, obj3);

describe('verifing equality beetween objects...', () => {
  test('if them are equals...', () => {
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
  });
});