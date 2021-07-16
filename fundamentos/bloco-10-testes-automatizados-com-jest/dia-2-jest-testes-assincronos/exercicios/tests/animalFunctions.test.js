const animalFunctions = require('../functions/animalFunctions');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      // expect.assertions(1);
      return animalFunctions.getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      // expect.assertions(1);
      return animalFunctions.getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe(m) animal(is) com a idade procurada', () => {
    test('Retorne array com o(s) objeto(s) ref. a cada animal', () => {
      // expect.assertions(1);
      return animalFunctions.getAnimalByAge(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe(m) animal(is) com a idade procurada', () => {
    test('Retorna um erro', () => {
      // expect.assertions(1);
      return animalFunctions.getAnimalByAge(10).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});
