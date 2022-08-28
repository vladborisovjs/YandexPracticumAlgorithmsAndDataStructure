const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
let els = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === parseInt(input[0], 10) + 1) {
    for (let i = 1; i < input.length; i++) {
      els.push(input[i]);
    }
    els = Array.from(new Set(els)).map((x) =>
      x.split(' ').map((y) => parseInt(y, 10))
    );

    console.log(els);
    rl.close();
  }
});
