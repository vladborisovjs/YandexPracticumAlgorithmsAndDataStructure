/**
 * Вечером ребята решили поиграть в игру «Большое число».
 Даны числа. Нужно определить, какое самое большое число можно из них составить.

 Формат ввода
 В первой строке записано n — количество чисел. Оно не превосходит 100.
 Во второй строке через пробел записаны n неотрицательных чисел, каждое из которых не превосходит 1000.

 Формат вывода
 Нужно вывести самое большое число, которое можно составить из данных чисел.
 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const arr = input[1].split(' ');
    const result = arr.sort((a, b) => b + a - (a + b)).join('');
    console.log(result);
    rl.close();
  }
});
