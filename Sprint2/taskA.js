const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let result = '';
const input = [];
const matrix = [];
const transposeMatrix = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === parseInt(input[0], 10) + 2) {
    let row = parseInt(input[0], 10);
    let column = parseInt(input[1], 10);
    for (let i = 2; i < input.length; i++) {
      matrix.push(input[i].split(' ').map((x) => parseInt(x, 10)));
    }

    for (let i = 0; i < matrix.length - (row - column); i++) {
      transposeMatrix[i] = [];
      for (let j = 0; j < matrix.length; j++) {
        transposeMatrix[i].push(matrix[j][i]);
      }
    }

    for (let i = 0; i < transposeMatrix.length; i++) {
      result += `${transposeMatrix[i].join(' ')}\n`;
    }
    process.stdout.write(result);
    rl.close();
  }
});
