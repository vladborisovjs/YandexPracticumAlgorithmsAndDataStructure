const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
const map = {};
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const sorted = input[1]
      .split(' ')
      .map((el) => el.split('').sort().join(''));
    for (let i = 0; i < sorted.length; i++) {
      if (!map[sorted[i]]) {
        map[sorted[i]] = `${i}`;
        continue;
      }
      map[sorted[i]] += ` ${i}`;
    }
    Object.values(map).map((el) => console.log(el));
    rl.close();
  }
});
