const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 3) {
    let result = '';
    const obj = {};
    const amount = parseInt(input[2], 10);
    const arr = input[1]
      .split(' ')
      .map((x) => parseInt(x, 10))
      .sort((a, b) => a - b)
      .map((x) => (obj[x] = obj[x] ? obj[x] + 1 : 1));
    const keySorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    for (let i = 0; i < amount; i++) {
      result += `${keySorted[i]} `;
    }
    console.log(result);
    rl.close();
  }
});
