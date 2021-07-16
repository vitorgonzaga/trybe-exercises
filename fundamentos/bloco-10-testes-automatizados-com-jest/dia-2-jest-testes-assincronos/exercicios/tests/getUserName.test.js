const getUserName = require('../functions/getUserName');

describe('tests using default sintaxe for promises (then and catch)', () => {
  test('sucessfull retrieve of an user', () => {
    // expect.assertions(1); // sintaxe opcional;
    return getUserName(4).then(result => { // Por se tratar de uma promise deve ser inserido o termo 'return';
      expect(result).toEqual('Mark');
    });
  });

  test('when user not found', () => {
    // expect.assertions(1);
    return getUserName(6).catch(result => { // para capturar o erro deve ser utilizado o catch.
      expect(result).toEqual({ error: 'User with 6 not found.' });
    });
  });
});

describe('tests using async/await sintaxe for promises', () => {
  test('sucessfull retrieve of an user', async () => {
    // Utilizando o async sugere-se atribuir a uma variável a chamada da função pelo await
     const result = await getUserName(4);
      expect(result).toEqual('Mark');
    });

    test('when user not found', async () => {
      try {
        const result = await getUserName(6);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 6 not found.' });
      }
    });
});
