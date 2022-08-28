const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const str1 = input[0]
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
    const str2 = input[1]
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
    for (let i = 0; i < str2.length; i++) {
      if (str1[i] !== str2[i]) {
        process.stdout.write(str2[i] + '\n');
        break;
      }
    }
    rl.close();
  }
});
