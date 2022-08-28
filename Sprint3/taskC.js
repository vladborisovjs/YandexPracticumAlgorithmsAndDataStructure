const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    check();
    rl.close();
  }
});

function check() {
  let str = input[1];
  if (input[0].length === input[1].length && input[0] !== input[1]) {
    console.log('False');
    return;
  }
  for (let i = 0; i < input[0].length; i++) {
    let ind = str.search(input[0][i]);
    if (ind === -1) {
      console.log('False');
      return;
    } else {
      str = str.slice(ind, str.length);
    }
  }
  console.log('True');
  return;
}
