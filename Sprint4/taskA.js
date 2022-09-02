/**
 * Алле очень понравился алгоритм вычисления полиномиального хеша.
 * Помогите ей написать функцию, вычисляющую хеш строки s.
 * В данной задаче необходимо использовать в качестве значений отдельных символов их коды в таблице ASCII.
 Формат ввода
 В первой строке дано число a (1 ≤ a ≤ 1000) –— основание, по которому считается хеш.

 Во второй строке дано число m (1 ≤ m ≤ 109) –— модуль.

 В третьей строке дана строка s (0 ≤ |s| ≤ 106), состоящая из больших и маленьких латинских букв.

 Формат вывода
 Выведите целое неотрицательное число –— хеш заданной строки.
 * */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 3) {
    console.log(
      polynomialHash(parseInt(input[0], 10), parseInt(input[1], 10), input[2])
    );
    rl.close();
  }
});

function polynomialHash(base, module, str) {
  let hashVal = 0;
  for (let char of str) {
    hashVal = (hashVal * base + char.charCodeAt()) % module;
  }
  return hashVal;
}
