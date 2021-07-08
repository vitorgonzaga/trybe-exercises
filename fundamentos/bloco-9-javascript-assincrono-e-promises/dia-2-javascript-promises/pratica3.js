const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

const path = 'https://api.chucknorris.io/jokes/random?category=dev'

function sendJokeToFriend(name) {
  const message = verifiedFetch(path)
    .then((r) => console.log(`Oi ${name}, ouve essa: ${r}`))
    .catch((r) => err);
  console.log(message);
}

sendJokeToFriend('Anna');