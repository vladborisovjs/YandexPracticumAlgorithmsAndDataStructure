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
