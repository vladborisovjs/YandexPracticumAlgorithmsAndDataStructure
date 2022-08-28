const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === parseInt(input[0], 10) + 1) {
    const set = Array.from(new Set(input.slice(1)));
    console.log(set.join('\n'));
    rl.close();
  }
});
