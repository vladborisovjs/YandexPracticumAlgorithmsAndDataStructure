const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const n = parseInt(line, 10);
  const result = fibonacci(n);
  process.stdout.write(result + '\n');
  rl.close();
});

function fibonacci(n) {
  return n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}
