const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 4) {
    check();
    rl.close();
  }
});

function check() {
  let children = 0;
  const greed = input[1]
    .split(' ')
    .map((x) => parseInt(x, 10))
    .sort((a, b) => b - a);
  const cookies = input[3]
    .split(' ')
    .map((x) => parseInt(x, 10))
    .sort((a, b) => a - b);
  for (let i = 0; i < greed.length; i++) {
    if (greed[i] <= cookies.slice(-1)) {
      cookies.pop();
      children++;
    }
  }
  console.log(children);
}
