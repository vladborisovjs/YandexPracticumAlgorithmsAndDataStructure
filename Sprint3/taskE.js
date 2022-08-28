const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    let money = input[0].split(' ')[1];
    const costs = input[1].split(' ').sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < costs.length; i++) {
      if (money - costs[i] >= 0) {
        count++;
        money = money - costs[i];
      } else {
        break;
      }
    }
    console.log(count);
    rl.close();
  }
});
