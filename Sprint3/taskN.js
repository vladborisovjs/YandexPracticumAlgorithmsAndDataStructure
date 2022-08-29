/**
 * Алла захотела, чтобы у неё под окном были узкие клумбы с тюльпанам.
 * На схеме земельного участка клумбы обозначаются просто горизонтальными отрезками, лежащими на одной прямой.
 * Для ландшафтных работ было нанято n садовников. Каждый из них обрабатывал какой-то отрезок на схеме.
 * Процесс был организован не очень хорошо, иногда один и тот же отрезок или его часть могли быть обработаны сразу несколькими садовниками.
 * Таким образом, отрезки, обрабатываемые двумя разными садовниками, сливаются в один. Непрерывный обработанный отрезок затем станет клумбой. Нужно определить границы будущих клумб.
 Формат ввода
 В первой строке задано количество садовников n. Число садовников не превосходит 100000.
 В следующих n строках через пробел записаны координаты клумб в формате: start end, где start —– координата начала, end —– координата конца. Оба числа целые, неотрицательные и не превосходят
 107. start строго меньше, чем end.

 Формат вывода
 Нужно вывести координаты каждой из получившихся клумб в отдельных строках. Данные должны выводится в отсортированном порядке —– сначала клумбы с меньшими координатами, затем —– с бОльшими.
 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
let coords = [];
let result = '';
rl.on('line', (line) => {
  input.push(line);
  const n = Number(input[0]);
  if (input.length === n + 1) {
    for (let i = 1; i < input.length; i++) {
      coords.push(input[i].split(" ").map(x => Number(x)));
    }
    const groups = group(coords);
    for (let i = 0; i < groups.length; i++) {
      result += `${groups[i].join(' ')}\n`;
    }
    console.log(result);
    rl.close();
  }
});

function group(coords) {
  coords.sort((a,b) => a[0] - b[0]);
  const groups = [coords[0]];
  let k = 0;

  for (let i = 1; i < coords.length; i++) {
    if (groups[k][1] >= coords[i][0]) {
      groups[k] = [groups[k][0], groups[k][1] > coords[i][1] ? groups[k][1] : coords[i][1]]
    } else {
      groups.push(coords[i])
      k++;
    }
  }

  return groups;
}