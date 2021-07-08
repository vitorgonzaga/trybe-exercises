// Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.
const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () => ((Math.floor(Math.random() * 50) + 1) ** 2),
    );
    const sumMyArray = myArray.reduce((acc, curr) => acc + curr);
    (sumMyArray < 8000) ? resolve(sumMyArray) : reject(sumMyArray);
  });

myPromise
  .then((sumMyArray) => {
    const divsArray = [2, 3, 5, 10];
    const arrayResult =  divsArray.map(div => sumMyArray / div);
    console.log(`Promisse resolvida. Array Resultado: ${arrayResult}`);
  })
  .catch((sumMyArray) => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));

};

fetchPromise();
