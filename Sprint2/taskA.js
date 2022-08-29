/**
 * Алла получила задание, связанное с мониторингом работы различных серверов.
 * Требуется понять, сколько времени обрабатываются определённые запросы на конкретных серверах.
 * Эту информацию нужно хранить в матрице, где номер столбца соответствуют идентификатору запроса,
 * а номер строки — идентификатору сервера. Алла перепутала строки и столбцы местами.
 * С каждым бывает. Помогите ей исправить баг.

 Есть матрица размера m × n. Нужно написать функцию, которая её транспонирует.

 Транспонированная матрица получается из исходной заменой строк на столбцы.

 Например, для матрицы А (слева) транспонированной будет следующая матрица (справа):

 Формат ввода
 В первой строке задано число n — количество строк матрицы.
 Во второй строке задано m — число столбцов, m и n не превосходят 1000. В следующих n строках задана матрица. Числа в ней не превосходят по модулю 1000.

 Формат вывода
 Напечатайте транспонированную матрицу в том же формате, который задан во входных данных. Каждая строка матрицы выводится на отдельной строке, элементы разделяются пробелами.
 * */
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
