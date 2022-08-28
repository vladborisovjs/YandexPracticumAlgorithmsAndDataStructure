const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
let count = 0;
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 3) {
    const k = parseInt(input[2], 10);
    let result = 0;
    let dif;
    let step = 1;
    const costs = input[1]
      .split(' ')
      .map((x) => parseInt(x, 10))
      .sort((a, b) => a - b);
    while (count !== k) {
      for (let i = 0; i < costs.length; i += step) {
        if (costs[i + step]) {
          dif = Math.abs(costs[i] - costs[i + step]);
          count++;
        } else {
          step++;
        }
        if (count === k) {
          break;
        }
      }
    }
    console.log(dif);
    rl.close();
  }
});
