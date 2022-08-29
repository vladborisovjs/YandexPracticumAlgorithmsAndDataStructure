/**
 * Реализовать сортировку пузырьком
 *
 * Формат ввода
 В первой строке на вход подаётся натуральное число n — длина массива, 2 ≤ n ≤ 1000.
 Во второй строке через пробел записано n целых чисел.
 Каждое из чисел по модулю не превосходит 1000.

 Обратите внимание, что считывать нужно только 2 строки: значение n и входной массив.

 Формат вывода
 После каждого прохода по массиву, на котором какие-то элементы меняются местами, выводите его промежуточное состояние.
 Таким образом, если сортировка завершена за k меняющих массив итераций, то надо вывести k строк по n чисел в каждой — элементы массива после каждой из итераций.
 Если массив был изначально отсортирован, то просто выведите его.
 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const arr = input[1].split(' ').map((x) => parseInt(x, 10));
    bubbleSort(arr);
    rl.close();
  }
});

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let dumb = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = dumb;
      }
    }
    console.log(arr.join(' '));
    if (isSorted(arr)) {
      break;
    }
  }
}

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
