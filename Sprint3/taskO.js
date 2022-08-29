/**
 * Гоша долго путешествовал и измерил площадь каждого из n островов Алгосов, но ему этого мало!
 * Теперь он захотел оценить, насколько разнообразными являются острова в составе архипелага.

 Для этого Гоша рассмотрел все пары островов (таких пар, напомним, n * (n-1) / 2) и посчитал попарно разницу площадей между всеми островами.
 Теперь он собирается упорядочить полученные разницы, чтобы взять k-ую по порядку из них.

 Помоги Гоше найти k-ю минимальную разницу между площадями эффективно.

 Пояснения к примерам

 Пример 1

 Выпишем все пары площадей и найдём соответствующие разницы

 |2 - 3| = 1
 |3 - 4| = 1
 |2 - 4| = 2
 Так как нам нужна 2-я по величине разница, то ответ будет 1.

 Пример 2

 У нас есть два одинаковых элемента в массиве —– две единицы, поэтому минимальная (первая) разница равна нулю.

 Формат ввода
 В первой строке записано натуральное число n –— количество островов в архипелаге (2 ≤ n ≤ 100 000).

 В следующей строке через пробел записаны n площадей островов — n натуральных чисел, каждое из которых не превосходит 1 000 000.

 В последней строке задано число k. Оно находится в диапазоне от 1 до n(n - 1) / 2.

 Формат вывода
 Выведите одно число –— k-ую минимальную разницу.
 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
let result;
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 3) {
    const k = parseInt(input[2], 10);
    const costs = input[1]
      .split(' ')
      .map((x) => parseInt(x, 10))
      .sort((a, b) => a - b);
    result = getMinDiff(costs, k);
    console.log(result);
    rl.close();
  }
});

function getMinDiff(numbers, k) {
  let left = 0;
  let right = numbers[numbers.length - 1] - numbers[0];
  while (left < right) {
    const mid = ((right + left) / 2) | 0;
    if (checkInd(numbers, mid, k)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function checkInd(numbers, pos, k) {
  let left = 0;
  let count = 0;
  for (let i = 1; i < numbers.length; i++) {
    while ((numbers[i] - numbers[left]) > pos) {
      left += 1
    }
    count += i - left;
    if (count >= k) {
      return true;
    }
  }
  return false;
}