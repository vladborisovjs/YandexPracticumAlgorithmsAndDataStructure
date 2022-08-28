const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === parseInt(input[3], 10) + 4) {
    const hostStr = input[2].split('').map((x) => x.charCodeAt());
    const a = parseInt(input[0], 10);
    const m = parseInt(input[1], 10);
    const requestsInd = input
      .slice(4)
      .map((x) => x.split(' ').map((y) => parseInt(y, 10)));
    const hashes = polynomialHash(a, m, hostStr);
    for (let i = 0; i < parseInt(input[3], 10); i++) {
      let start = requestsInd[i][0];
      let end = requestsInd[i][1];
      let result =
        ((hashes[end] % m) -
          hashes[start - 1] * prePow(a, end - start + 1, m)) %
        m;
      console.log(result > 0 ? result : m + result);
    }

    rl.close();
  }
});

function polynomialHash(base, module, str) {
  let hashVal = [0, str[0]];
  for (let i = 2; i < str.length + 1; i++) {
    hashVal[i] = (hashVal[i - 1] * base + str[i - 1]) % module;
  }
  return hashVal;
}

function prePow(x, p, r) {
  let m = x % r;
  let t = 1;
  while (p) {
    if (p % 2) {
      t *= m;
      t %= r;
    }
    m *= m;
    m %= r;
    p = (p / 2) | 0;
  }

  return t % r;
}
