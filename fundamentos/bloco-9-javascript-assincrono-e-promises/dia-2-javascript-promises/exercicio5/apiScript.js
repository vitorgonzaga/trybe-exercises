// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
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
  .then((sumMyArray) => { [2, 3, 5, 10].map(div => sumMyArray / div) })
  .then(arrayResultadoDoPrimeiroThen => arrayResultadoDoPrimeiroThen.reduce((acc, curr) => acc + curr, 0))
  .catch((sumMyArray) => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
};

fetchPromise();
