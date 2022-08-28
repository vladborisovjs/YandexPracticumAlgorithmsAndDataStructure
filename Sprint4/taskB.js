const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const map = {};
let str = '';
let hash = '';

launch();

function polynomialHash(str) {
  const base = 1000;
  const module = 123987123;
  let hashVal = 0;
  for (let char of str) {
    hashVal = (hashVal * base + char.charCodeAt()) % module;
  }
  return hashVal;
}

function generateStr() {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let str = '';
  for (let i = 0; i < 20; i++) {
    str += letters.charAt(Math.floor(Math.random() * 20));
  }
  return str;
}

function launch() {
  while (true) {
    str = generateStr();
    hash = polynomialHash(str);
    if (!map.hasOwnProperty(hash)) {
      map[hash] = str;
    } else {
      console.log(`${map[hash]}`);
      console.log(`${str}`);
      break;
    }
  }
}
