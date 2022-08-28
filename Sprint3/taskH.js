const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const arr = input[1].split(' ');
    const result = arr.sort((a, b) => b + a - (a + b)).join('');
    console.log(result);
    rl.close();
  }
});
