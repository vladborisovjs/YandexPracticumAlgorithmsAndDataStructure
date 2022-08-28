/**
 * Напишите программу, которая определяет, будет ли положительное целое число степенью четвёрки.

 Подсказка: степенью четвёрки будут все числа вида 4n, где n – целое неотрицательное число.

 Формат ввода
 На вход подаётся целое число в диапазоне от 1 до 10000.

 Формат вывода
 Выведите «True», если число является степенью четырёх, «False» –— в обратном случае.
 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', line => {
    const num = Math.log(line) / Math.log(4);
    const result = num === (num | 0) ? 'True' : 'False';
    process.stdout.write(result + '\n');
    rl.close();
})