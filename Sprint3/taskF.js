const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const costs = input[1]
      .split(' ')
      .map((x) => parseInt(x, 10))
      .sort((a, b) => b - a);
    let result = 0;
    for (let i = 0; i < costs.length; i++) {
      if (
        costs[i + 1] &&
        costs[i + 2] &&
        costs[i] < costs[i + 1] + costs[i + 2]
      ) {
        result = costs[i] + costs[i + 1] + costs[i + 2];
        break;
      }
    }
    console.log(result);
    rl.close();
  }
});
