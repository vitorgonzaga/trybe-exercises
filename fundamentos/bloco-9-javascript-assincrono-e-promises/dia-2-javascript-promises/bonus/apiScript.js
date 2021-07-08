
// Refatore a Promise para utilizar somente async e await .

// Passo 1 - criar uma função especifica para criacao do array aleatório de 10 itens

const createArray = () => {
  const myArray = Array.from(
    { length: 10 },
    () => ((Math.floor(Math.random() * 50) + 1) ** 2),
  );
  return myArray
};

// Passo 2 - criar uma funcao para somar o array criado e que verifica a condição (< 8000)

const reduceArrayWithSum = (array) => {
  const sumMyArray = array.reduce((acc, curr) => acc + curr);
  if (sumMyArray > 8000) {
    throw new Error(`É mais de oito mil! Resultado: ${sumMyArray}`)
  }
  return sumMyArray;
};

// Passo 3 após o "fatiamento" das etapas por funções criar uma função async

const fetchPromise = async () => {
  try {
    const arrayCreated = await createArray();
    const sumResult = await reduceArrayWithSum(arrayCreated)
    console.log(`Promise resolvida! Resultado: ${sumResult}`);
  } catch (error) {
    console.log(error);
  };
};

fetchPromise();
