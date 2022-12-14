/**
 * У Тимофея было очень много стажёров, целых N (0 ≤ N ≤ 106) человек.
 * Каждый стажёр хотел быть лучше своих предшественников, поэтому i-й стажёр делал столько коммитов, сколько делали два предыдущих стажёра в сумме.
 * Два первых стажёра были менее инициативными — они сделали по одному коммиту.

 Пусть Fi —– число коммитов, сделанных i-м стажёром (стажёры нумеруются с нуля).
 Первые два стажёра сделали по одному коммиту: F0=F1=1. Для всех i≥ 2 выполнено Fi=Fi−1+Fi−2.

 Определите, сколько кода напишет следующий стажёр –— найдите последние k цифр числа Fn.

 Как найти k последних цифр

 Чтобы вычислить k последних цифр некоторого числа x, достаточно взять остаток от его деления на число 10^k.
 Эта операция обозначается как x mod 10^k. Узнайте, как записывается операция взятия остатка по модулю в вашем языке программирования.

 Также обратите внимание на возможное переполнение целочисленных типов, если в вашем языке такое случается.

 Формат ввода
 В первой строке записаны через пробел два целых числа n (0 ≤ n ≤ 106) и k (1 ≤ k ≤ 8).

 Формат вывода
 Выведите единственное число – последние k цифр числа Fn.

 Если в искомом числе меньше k цифр, то выведите само число без ведущих нулей.
 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (line) => {
  let [n, k] = [line.split(' ')[0], line.split(' ')[1]];
  const arr = [0, 1];
  let fib;
  if (n < 2) {
    fib = 1;
  } else {
    for (let i = 0; i < n; i++) {
      s = (arr[0] + arr[1]) % 10 ** k;
      arr[0] = arr[1];
      arr[1] = s;
      fib = arr[1];
    }
    n -= 1;
  }
  process.stdout.write(fib + '\n');
  rl.close();
});
