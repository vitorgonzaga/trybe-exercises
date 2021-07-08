// Criando minha primeira promise:
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
  .then((sumMyArray) => console.log(`Promise resolvida ${sumMyArray}`))
  .catch((sumMyArray) => console.log(`Promise rejeitada ${sumMyArray}`));

};

fetchPromise();
