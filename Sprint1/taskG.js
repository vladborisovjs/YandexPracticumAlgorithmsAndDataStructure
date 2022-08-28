/**
 * Вася реализовал функцию, которая переводит целое число из десятичной системы в двоичную. Но, кажется, она получилась не очень оптимальной.

 Попробуйте написать более эффективную программу.

 Не используйте встроенные средства языка по переводу чисел в бинарное представление.

 Формат ввода
 На вход подаётся целое число в диапазоне от 0 до 10000.

 Формат вывода
 Выведите двоичное представление этого числа.
 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let binaryStr = '';
rl.on('line', (line) => {
  const num = parseInt(line, 10);
  calc(num);
  rl.close();
});

function calc(num) {
  if (num >= 1) {
    let quotient = (num / 2) | 0;
    binaryStr = `${num - 2 * quotient}${binaryStr}`;
    return calc(quotient);
  }
  process.stdout.write(binaryStr + '\n');
}
