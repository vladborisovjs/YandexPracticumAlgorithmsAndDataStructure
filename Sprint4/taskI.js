const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
const keys = {};
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 4) {
    const arr1 = input[1].split(' ');
    const arr2 = input[3].split(' ');
    console.log(findSegment(arr1, arr2));
    rl.close();
  }
});

function findSegment(arr1, arr2) {
  const all = [...arr1, ...arr2];
  const common = [];
  for (let i = 0; i < all.length; i++) {
    keys[all[i]] = 1;
  }
  for (let x in keys) {
    if (arr1.indexOf(x) !== -1 && arr2.indexOf(x) !== -1) {
      common.push(x);
    }
  }
  return common.length;
}
