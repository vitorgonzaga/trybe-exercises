const uppercase = require('../functions/uppercase');

describe('aproach test for function uppercase that uses callback parameter', () => {
  it('using a default string', () => {
    const stringToUpperCase = 'vitor gonzaga ferreira';
    uppercase(stringToUpperCase, (output) => {
      expect(output).toBe('VITOR GONZAGA FERREIRA');
    });
  });
});