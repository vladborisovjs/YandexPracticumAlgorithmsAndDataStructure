const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 3) {
    const target = parseInt(input[1], 0);
    const arr = input[2].split(' ').map((x) => parseInt(x, 10));
    const result = sum4(arr, target);
    console.log(result.length);
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].join(' '));
    }
    rl.close();
  }
});

function sum4(arr, target) {
  const sorted = arr.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < sorted.length; j++) {
      if (j > i + 1 && sorted[j] === sorted[j - 1]) {
        continue;
      }
      let p = j + 1;
      let q = sorted.length - 1;
      while (p < q) {
        let sum = sorted[i] + sorted[j] + sorted[p] + sorted[q];
        if (sum === target) {
          res.push([sorted[i], sorted[j], sorted[p], sorted[q]]);
          while (p < q && sorted[p] === sorted[p + 1]) {
            p++;
          }
          while (p < q && sorted[q] === sorted[q - 1]) {
            q--;
          }
          p++;
          q--;
        } else if (sum < target) {
          p++;
        } else {
          q--;
        }
      }
    }
  }
  return res;
}
