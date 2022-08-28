const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 3) {
    console.log(
      polynomialHash(parseInt(input[0], 10), parseInt(input[1], 10), input[2])
    );
    rl.close();
  }
});

function polynomialHash(base, module, str) {
  let hashVal = 0;
  for (let char of str) {
    hashVal = (hashVal * base + char.charCodeAt()) % module;
  }
  return hashVal;
}
