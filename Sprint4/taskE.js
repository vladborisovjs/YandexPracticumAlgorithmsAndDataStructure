const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const arr = line.split('');
  let candidate = '';
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    candidate += arr[i];
    while (candidate.length !== new Set(candidate).size) {
      candidate = candidate.slice(1);
    }
    if (result.length < candidate.length) {
      result = candidate;
    }
  }
  console.log(result.length);
  rl.close();
});
