const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
let longestStr = 0;
let candidateStr = '';
const matches = {
  0: null,
  1: null
};
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const str = input[1].split(' ').join('');
    for (let i = 0; i < str.length; i++) {
      candidateStr += str[i];
      matches[str[i]] += 1;
      if (matches['0'] === matches['1']) {
        longestStr = candidateStr.length;
        continue;
      }

      if (
        new Set(candidateStr.split(' ')).size === 2 &&
        ((matches['0'] > matches['1'] && str[i + 1] && str[i + 1] === '1') ||
          (matches['0'] < matches['1'] && str[i + 1] && str[i + 1] === '0'))
      ) {
        candidateStr += str[i + 1];
        matches[str[i + 1]] += 1;
      } else {
        // console.log(candidateStr);
        const temp = candidateStr.slice(1);
        // console.log(temp);
      }
    }
    console.log(longestStr);
    rl.close();
  }
});
