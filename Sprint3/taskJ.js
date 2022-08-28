const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const arr = input[1].split(' ').map((x) => parseInt(x, 10));
    bubbleSort(arr);
    rl.close();
  }
});

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let dumb = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = dumb;
      }
    }
    console.log(arr.join(' '));
    if (isSorted(arr)) {
      break;
    }
  }
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
