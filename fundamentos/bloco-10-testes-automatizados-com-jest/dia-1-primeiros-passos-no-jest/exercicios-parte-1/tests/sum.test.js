const { TestWatcher } = require('jest');
const sum = require('../functions/sum');

// assert.strictEqual(sum(4, 5), 9);
// assert.strictEqual(sum(0, 0), 0);
// assert.throws(() => sum(4, '5'));
// assert.throws(() => { sum(4, '5'); }, /^Error: parameters must be numbers$/);

describe('tests from sum function', () => {
  test('if function sum (4, 5) returns 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  test('if tunction sum(0,0) returns 0' ,() => {
    expect(sum(0, 0)).toBe(0);
  });
  // *******************************************************************************
  // :: TRATAMENTO DE ERROS NO JEST ::
  // *******************************************************************************
  // Nota: a função que lança uma exceção precisa ser chamada dentro de uma função de embrulho, caso contrário a afirmação toThrow falhará.
  // *******************************************************************************
  test('if function throw error when there is string param', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });
  test('if function throw custom error when there is string param', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});