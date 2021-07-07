// Primeira abordagem
// const promise1 = new Promise((onSucess, onError) => {
//   const number = Math.floor(Math.random() * 11);
//   if (number <= 5) {
//     return onError( console.log(`Que fracasso =( nosso número foi ${number}`));
//   }
//   onSucess(console.log(`Que sucesso =) nosso número foi ${number}`));
// });

// // Segunda abordagem
// const promise2 = new Promise((onSucess, onError) => {
//   const number = Math.floor(Math.random() * 11);
//   if (number <= 5) {
//     return onError( console.log(`Que fracasso =( nosso número foi ${number}`));
//   }
//   onSucess(number);
// })
// .then(number => `Que sucesso =) nosso número foi ${number}`)
// .then(msg => console.log(msg));

// incluindo o catch
const promise3 = new Promise((onSucess, onError) => {
  const number = Math.floor(Math.random() * 11);
  if (number <= 5) {
    return onError(number);
  }
  onSucess(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( nosso número foi ${number}`));
