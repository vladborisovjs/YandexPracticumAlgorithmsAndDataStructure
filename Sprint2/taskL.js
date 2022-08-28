const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (line) => {
  let [n, k] = [line.split(' ')[0], line.split(' ')[1]];
  const arr = [0, 1];
  let fib;
  if (n < 2) {
    fib = 1;
  } else {
    for (let i = 0; i < n; i++) {
      s = (arr[0] + arr[1]) % 10 ** k;
      arr[0] = arr[1];
      arr[1] = s;
      fib = arr[1];
    }
    n -= 1;
  }
  process.stdout.write(fib + '\n');
  rl.close();
});
