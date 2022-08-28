const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (line) => {
  const n = parseInt(line, 10);
  let control = 0;
  let n1 = n;
  let n2 = n;
  generate(control, n1, n2, '');
  rl.close();
});

function generate(control, n1, n2, bracket) {
  if (n1 === 0 && n2 === 0) {
    console.log(bracket);
  } else {
    if (n1 > 0) {
      generate(control + 1, n1 - 1, n2, bracket + '(');
    }
    if (control > 0 && n2 > 0 && n1 < n2) {
      generate(control + 1, n1, n2 - 1, bracket + ')');
    }
  }
}
