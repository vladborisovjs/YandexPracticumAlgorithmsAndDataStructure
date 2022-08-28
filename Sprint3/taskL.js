const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 3) {
    const costs = input[1].split(' ').map((x) => parseInt(x, 10));
    const money = parseInt(input[[2]], 10);
    const firstDay = binarySearch(costs, money);
    const secondDay = binarySearch(costs, money * 2);
    process.stdout.write(firstDay + ' ' + secondDay);
    rl.close();
  }
});

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = -1;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (item <= arr[middle]) {
      found = middle + 1;
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return found;
}
