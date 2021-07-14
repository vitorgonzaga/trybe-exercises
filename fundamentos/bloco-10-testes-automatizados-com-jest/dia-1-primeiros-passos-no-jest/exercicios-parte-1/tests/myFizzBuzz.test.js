const { TestWatcher } = require('jest');
const myFizzBuzz = require('../functions/myFizzBuzz');

// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// assert.strictEqual(myFizzBuzz(3), 'fizz');
// assert.strictEqual(myFizzBuzz(5), 'buzz');
// assert.strictEqual(myFizzBuzz(2), 2);
// assert.strictEqual(myFizzBuzz('string'), false);

describe('tests using numbers...', () => {
  test('with numbers 15, 3, 5 and 2', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(2)).toBe(2);
  });
});

test('with string...', () => {
  expect(myFizzBuzz('string')).toBe(false);
});
