/**
 * Дана матрица. Нужно написать функцию, которая для элемента возвращает всех его соседей.
 * Соседним считается элемент, находящийся от текущего на одну ячейку влево, вправо, вверх или вниз.
 * Диагональные элементы соседними не считаются.

 Например, в матрице A соседними элементами для (0, 0) будут 2 и 0. А для (2, 1) –— 1, 2, 7, 7.

 Формат ввода
 В первой строке задано n — количество строк матрицы.
 Во второй — количество столбцов m. Числа m и n не превосходят 1000.
 В следующих n строках задана матрица. Элементы матрицы — целые числа, по модулю не превосходящие 1000.
 В последних двух строках записаны координаты элемента, соседей которого нужно найти. Индексация начинается с нуля.

 Формат вывода
 Напечатайте нужные числа в возрастающем порядке через пробел.
 * */
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
