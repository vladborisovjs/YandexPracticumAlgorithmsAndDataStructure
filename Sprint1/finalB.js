//ID: 69540157
/**
 * Игра «Тренажёр для скоростной печати» представляет собой поле из клавиш 4x4.
 * В нём на каждом раунде появляется конфигурация цифр и точек.
 * На клавише написана либо точка, либо цифра от 1 до 9.

 В момент времени t игрок должен одновременно нажать на все клавиши, на которых написана цифра t.
 Гоша и Тимофей могут нажать в один момент времени на k клавиш каждый.
 Если в момент времени t нажаты все нужные клавиши, то игроки получают 1 балл.
 Найдите число баллов, которое смогут заработать Гоша и Тимофей, если будут нажимать на клавиши вдвоём.

 Формат ввода
 В первой строке дано целое число k (1 ≤ k ≤ 5).

 В четырёх следующих строках задан вид тренажёра –— по 4 символа в каждой строке.
 Каждый символ —– либо точка, либо цифра от 1 до 9.
 Символы одной строки идут подряд и не разделены пробелами.

 Формат вывода
 Выведите единственное число –— максимальное количество баллов, которое смогут набрать Гоша и Тимофей.
 * */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
const strMaxCount = 5;
rl.on('line', (line) => {
  input.push(line);
  if (input.length === strMaxCount) {
    let result = 0;
    let pushedCount = 0;
    const canPush = parseInt(input[0], 10);
    const fields = input
      .slice(1, input.length)
      .join('')
      .split('.')
      .filter((el) => !el.includes('.') && el)
      .join('');
    const time = Math.max(...fields.split('').map((x) => parseInt(x, 10)));
    for (let i = 1; i <= time; i++) {
      if (fields.includes(`${i}`)) {
        pushedCount = 0;
        for (let j = 0; j < fields.length; j++) {
          if (i == fields[j]) {
            pushedCount++;
          }
        }

        if (pushedCount <= canPush * 2) {
          result++;
        }
      }
    }
    process.stdout.write(result + '\n');
    rl.close();
  }
});
