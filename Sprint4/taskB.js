/**
 * Гоша написал программу, которая сравнивает строки исключительно по их хешам.
 * Если хеш равен, то и строки равны.
 * Тимофей увидел это безобразие и поручил вам сломать программу Гоши, чтобы остальным неповадно было.

 В этой задаче вам надо будет лишь найти две различные строки, которые для заданной хеш-функции будут давать одинаковое значение.

 В данной задаче необходимо использовать в качестве значений отдельных символов их коды в таблице ASCII.

 Формат ввода
 В задаче единственный тест без ввода

 Формат вывода
 Отправьте две строки, по одной в строке.
 Строки могут состоять только из маленьких латинских букв и не должны превышать в длину 1000 знаков каждая.
 Код отправлять не требуется.
 Строки из примера использовать нельзя.

 Пример вывода:

 ezhgeljkablzwnvuwqvp

 gbpdcvkumyfxillgnqrv
 * */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const map = {};
let str = "";
let hash = "";

launch();

function polynomialHash(str) {
  const base = 1000;
  const module = 123987123;
  let hashVal = 0;
  for (let char of str) {
    hashVal = (hashVal * base + char.charCodeAt()) % module;
  }
  return hashVal;
}

function generateStr() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < 20; i++) {
    str += letters.charAt(Math.floor(Math.random() * 20));
  }
  return str;
}

function launch() {
  while (true) {
    str = generateStr();
    hash = polynomialHash(str);
    if (!map.hasOwnProperty(hash)) {
      map[hash] = str;
    } else {
      console.log(`${map[hash]}`);
      console.log(`${str}`);
      break;
    }
  }
}
