const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    if (input[1]?.length) {
      const costs = input[1]
        .split(' ')
        .map((x) => parseInt(x, 10))
        .sort((a, b) => a - b)
        .join(' ');
      console.log(costs);
    }
    rl.close();
  }
});
