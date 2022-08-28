const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let counter = 0;
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const arr = input[1].split(' ').map((x) => parseInt(x, 10));
    if (arr.length === 1) {
      counter++;
    }
    if (arr[0] > arr[1]) {
      counter++;
    }
    if (arr[arr.length - 1] > arr[arr.length - 2]) {
      counter++;
    }
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
        counter++;
      }
    }
    process.stdout.write(counter + '\n');
    rl.close();
  }
});
