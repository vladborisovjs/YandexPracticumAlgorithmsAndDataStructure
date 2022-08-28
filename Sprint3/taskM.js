const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
let median;
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 4) {
    const arr1 = input[2].split(' ').map((x) => parseInt(x, 10));
    const arr2 = input[3].split(' ').map((x) => parseInt(x, 10));

    const union = Array.from(new Set([...arr1, ...arr2].sort((a, b) => a - b)));
    // console.log(union);
    // console.log(union.length);
    if (union.length % 2 === 0) {
      const ind = union.length / 2;
      median = (union[ind] + union[ind - 1]) / 2;
    } else {
      const ind = Math.floor(union.length / 2);
      median = union[ind];
    }
    console.log(median);
    rl.close();
  }
});
