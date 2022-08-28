/**
 * Тимофей записал два числа в двоичной системе счисления и попросил Гошу вывести их сумму, также в двоичной системе.
 * Встроенную в язык программирования возможность сложения двоичных чисел применять нельзя. Помогите Гоше решить задачу.

 Решение должно работать за O(N), где N –— количество разрядов максимального числа на входе.

 Формат ввода
 Два числа в двоичной системе счисления, каждое на отдельной строке. Длина каждого числа не превосходит 10 000 символов.

 Формат вывода
 Одно число в двоичной системе счисления.
 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    const num1 = BigInt('0b' + input[0]);
    const num2 = BigInt('0b' + input[1]);
    const result = (num1 + num2).toString(2);
    process.stdout.write(result + '\n');
    rl.close();
  }
});
