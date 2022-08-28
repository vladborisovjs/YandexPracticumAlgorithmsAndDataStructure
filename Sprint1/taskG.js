const { parse } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let binaryStr = '';
rl.on('line', (line) => {
  const num = parseInt(line, 10);
  calc(num);
  rl.close();
});

function calc(num) {
  if (num >= 1) {
    let quotient = (num / 2) | 0;
    binaryStr = `${num - 2 * quotient}${binaryStr}`;
    return calc(quotient);
  }
  process.stdout.write(binaryStr + '\n');
}
