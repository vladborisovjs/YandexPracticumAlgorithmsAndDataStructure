const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const num1 = BigInt('0b' + input[0]);
    const num2 = BigInt('0b' + input[1]);
    const result = (num1 + num2).toString(2);
    process.stdout.write(result + '\n');
    rl.close();
  }
});
