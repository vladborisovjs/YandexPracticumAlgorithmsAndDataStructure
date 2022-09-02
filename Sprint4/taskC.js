/**
 * Алла не остановилась на достигнутом –— теперь она хочет научиться быстро вычислять хеши произвольных подстрок данной строки. Помогите ей!

 На вход поступают запросы на подсчёт хешей разных подстрок.
 Ответ на каждый запрос должен выполняться за O(1).
 Допустимо в начале работы программы сделать предподсчёт для дальнейшей работы со строкой.

 В данной задаче необходимо использовать в качестве значений отдельных символов их коды в таблице ASCII.

 Формат ввода
 В первой строке дано число a (1 ≤ a ≤ 1000) –— основание, по которому считается хеш.
 Во второй строке дано число m (1 ≤ m ≤ 107) –— модуль.
 В третьей строке дана строка s (0 ≤ |s| ≤ 106), состоящая из больших и маленьких латинских букв.

 В четвертой строке дано число запросов t –— натуральное число от 1 до 105.
 В каждой из следующих t строк записаны через пробел два числа l и r –— индексы начала и конца очередной подстроки. (1 ≤ l ≤ r ≤ |s|).

 Формат вывода
 Для каждого запроса выведите на отдельной строке хеш заданной в запросе подстроки.
 * */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
  if (input.length === parseInt(input[3], 10) + 4) {
    const hostStr = input[2].split("").map((x) => x.charCodeAt());
    const a = parseInt(input[0], 10);
    const m = parseInt(input[1], 10);
    const requestsInd = input
      .slice(4)
      .map((x) => x.split(" ").map((y) => parseInt(y, 10)));
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
