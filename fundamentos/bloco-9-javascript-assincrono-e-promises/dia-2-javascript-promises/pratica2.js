const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(console.log(r.value)));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

const path = 'https://api.chucknorris.io/jokes/random?category=dev'

// verifiedFetch('qqcisa');

verifiedFetch(path);
