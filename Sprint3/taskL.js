/**
 * Вася решил накопить денег на два одинаковых велосипеда — себе и сестре.
 * У Васи есть копилка, в которую каждый день он может добавлять деньги (если, конечно, у него есть такая финансовая возможность).
 * В процессе накопления Вася не вынимает деньги из копилки.

 У вас есть информация о росте Васиных накоплений — сколько у Васи в копилке было денег в каждый из дней.

 Ваша задача — по заданной стоимости велосипеда определить

 первый день, в которой Вася смог бы купить один велосипед,
 и первый день, в который Вася смог бы купить два велосипеда.
 Подсказка: решение должно работать за O(log n).

 Формат ввода
 В первой строке дано число дней n, по которым велись наблюдения за Васиными накоплениями. 1 ≤ n ≤ 106.

 В следующей строке записаны n целых неотрицательных чисел. Числа идут в порядке неубывания. Каждое из чисел не превосходит 106.

 В третьей строке записано целое положительное число s — стоимость велосипеда. Это число не превосходит 106.

 Формат вывода
 Нужно вывести два числа — номера дней по условию задачи.

 Если необходимой суммы в копилке не нашлось, нужно вернуть -1 вместо номера дня.
 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 3) {
    const costs = input[1].split(' ').map((x) => parseInt(x, 10));
    const money = parseInt(input[[2]], 10);
    const firstDay = binarySearch(costs, money);
    const secondDay = binarySearch(costs, money * 2);
    process.stdout.write(firstDay + ' ' + secondDay);
    rl.close();
  }
});

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = -1;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (item <= arr[middle]) {
      found = middle + 1;
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return found;
}
