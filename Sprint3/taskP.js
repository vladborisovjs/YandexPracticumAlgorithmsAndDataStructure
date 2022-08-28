const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
let countBlocks = 0;
let lastRightSeqInd = 0;
let lastChecked = '';
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const arr = input[1].split(' ').map((x) => parseInt(x, 10));
    const sorted = input[1]
      .split(' ')
      .map((x) => parseInt(x, 10))
      .sort((a, b) => a - b)
      .join(' ');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === i) {
        lastRightSeqInd = i;
        countBlocks++;
        lastChecked += `${i} `;
      } else if (arr[i] === lastRightSeqInd) {
        const part = arr.slice(lastRightSeqInd, i).join(' ');
        if (sorted.includes(part)) {
          lastRightSeqInd = parseInt(part[part.length - 1], 10);
          countBlocks++;
          lastChecked += `${part} `;
        }
      } else {
        // console.log('index', i);
        lastChecked += `${arr[i]} `;
        // console.log('lC', lastChecked);
        const part = lastChecked
          .trim()
          .split(' ')
          .map((x) => parseInt(x, 10))
          .sort((a, b) => a - b)
          .join(' ');
        // console.log('part', part, 'sorted', sorted);
        if (sorted.includes(part) && part.length > 2) {
          console.log(part);
          lastRightSeqInd = parseInt(part[part.length - 1], 10);
          countBlocks++;
        }
      }
    }
    console.log(countBlocks);
    rl.close();
  }
});
