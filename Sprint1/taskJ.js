/**
 * Основная теорема арифметики говорит: любое число раскладывается на произведение простых множителей единственным образом, с точностью до их перестановки. Например:

 Число 8 можно представить как 2 × 2 × 2.
 Число 50 –— как 2 × 5 × 5 (или 5 × 5 × 2, или 5 × 2 × 5). Три варианта отличаются лишь порядком следования множителей.
 Разложение числа на простые множители называется факторизацией числа.

 Напишите программу, которая производит факторизацию переданного числа.

 Формат ввода
 В единственной строке дано число n (2 ≤ n ≤ 109), которое нужно факторизовать.

 Формат вывода
 Выведите в порядке неубывания простые множители, на которые раскладывается число n.
 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = '';
rl.on('line', (line) => {
  const num = parseInt(line, 10);
  const result = isPrime(num) ? num : factorization(num);
  process.stdout.write(result + '\n');
  rl.close();
});

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function factorization(n) {
  let div = 2;
  while (n > 1) {
    while (n % div === 0) {
      numbers += `${div} `;
      n /= div;
    }
    div === 2 ? div++ : (div += 2);
  }
  return numbers;
}
