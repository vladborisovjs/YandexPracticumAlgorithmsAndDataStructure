const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
const dict = {};
const busyVals = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const str1 = input[0].split('');
    const str2 = input[1].split('');
    console.log(compare(str1, str2));
    rl.close();
  }
});

function compare(str1, str2) {
  if (str1.length !== str2.length) {
    return 'NO';
  }
  for (let i = 0; i < str1.length; i++) {
    if (
      (dict.hasOwnProperty(str1[i]) && dict[str1[i]] !== str2[i]) ||
      (!dict.hasOwnProperty(str1[i]) && busyVals.includes(str2[i]))
    ) {
      return 'NO';
    }
    dict[str1[i]] = str2[i];
    busyVals.push(str2[i]);
  }
  return 'YES';
}
