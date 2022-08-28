//ID: 69540157
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
const strMaxCount = 5;
rl.on('line', (line) => {
  input.push(line);
  if (input.length === strMaxCount) {
    let result = 0;
    let pushedCount = 0;
    const canPush = parseInt(input[0], 10);
    const fields = input
      .slice(1, input.length)
      .join('')
      .split('.')
      .filter((el) => !el.includes('.') && el)
      .join('');
    const time = Math.max(...fields.split('').map((x) => parseInt(x, 10)));
    for (let i = 1; i <= time; i++) {
      if (fields.includes(`${i}`)) {
        pushedCount = 0;
        for (let j = 0; j < fields.length; j++) {
          if (i == fields[j]) {
            pushedCount++;
          }
        }

        if (pushedCount <= canPush * 2) {
          result++;
        }
      }
    }
    process.stdout.write(result + '\n');
    rl.close();
  }
});
