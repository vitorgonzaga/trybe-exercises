const fetch = require('node-fetch');

async function verifiedFetch(url) {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      return fetch(url)
        .then((r) => r.json())
        .then((r) => r.value);
    }
  throw new Error('endpoint não existe');
}

const path = 'https://api.chucknorris.io/jokes/random?category=dev'

// Sem async na chamada
// function sendJokeToFriend(name) {
//   const message = verifiedFetch(path)
//     .then((r) => console.log(`Oi ${name}, ouve essa: ${r}`))
//     .catch((r) => err);
//   console.log(message);
// }

// Com async:
async function sendJokeToFriend(name) {
  const message = await verifiedFetch(path)
    .then((r) => console.log(`Oi ${name}, ouve essa: ${r}`))
    .catch((r) => err);
  console.log(message);
}

sendJokeToFriend('Anna');