const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const matrix = [];
let neibourses = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === parseInt(input[0], 10) + 4) {
    for (let i = 2; i < input.length - 2; i++) {
      matrix.push(input[i].split(' ').map((x) => parseInt(x, 10)));
    }
    let row = parseInt(input[input.length - 2], 10);
    let column = parseInt(input[input.length - 1], 10);
    if (row + 1 < parseInt(input[0], 10)) {
      neibourses.push(matrix[row + 1][column]);
    }
    if (column + 1 < parseInt(input[1], 10)) {
      neibourses.push(matrix[row][column + 1]);
    }
    if (row - 1 >= 0) {
      neibourses.push(matrix[row - 1][column]);
    }
    if (column - 1 >= 0) {
      neibourses.push(matrix[row][column - 1]);
    }
    process.stdout.write(
      neibourses
        .sort((a, b) => {
          return a - b;
        })
        .join(' ') + '\n'
    );
    rl.close();
  }
});
