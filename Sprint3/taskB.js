/**
 * На клавиатуре старых мобильных телефонов каждой цифре соответствовало несколько букв. Примерно так:

 2:'abc',
 3:'def',
 4:'ghi',
 5:'jkl',
 6:'mno',
 7:'pqrs',
 8:'tuv',
 9:'wxyz'

 Вам известно в каком порядке были нажаты кнопки телефона, без учета повторов. Напечатайте все комбинации букв, которые можно набрать такой последовательностью нажатий.
 Формат ввода
 На вход подается строка, состоящая из цифр 2-9 включительно. Длина строки не превосходит 10 символов.

 Формат вывода
 Выведите все возможные комбинации букв через пробел.
 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const phone = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
};
let result = [];
rl.on('line', (line) => {
  combinations(line, '', result);
  console.log(result.join(' '));
  rl.close();
});

function combinations(numbers, path, result) {
  if (numbers === '') {
    result.push(path);
    return;
  }
  for (let letter of phone[numbers[0]]) {
    path += letter;
    combinations(numbers.slice(1), path, result);
    path = path.slice(0, path.length - 1);
  }
}
