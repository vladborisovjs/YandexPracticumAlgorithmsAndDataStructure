/**
 * У Гоши есть любимое число S.
 * Помогите ему найти все уникальные четвёрки чисел в массиве, которые в сумме дают заданное число S.

 Формат ввода
 В первой строке дано общее количество элементов массива n (0 ≤ n ≤ 1000).

 Во второй строке дано целое число S.

 В третьей строке задан сам массив.
 Каждое число является целым и не превосходит по модулю 109.

 Формат вывода
 В первой строке выведите количество найденных четвёрок чисел.

 В последующих строках выведите найденные четвёрки.
 Числа внутри одной четверки должны быть упорядочены по возрастанию.
 Между собой четвёрки упорядочены лексикографически.
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
    const target = parseInt(input[1], 0);
    const arr = input[2].split(" ").map((x) => parseInt(x, 10));
    const result = sum4(arr, target);
    console.log(result.length);
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].join(" "));
    }
    rl.close();
  }
});

function sum4(arr, target) {
  const sorted = arr.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < sorted.length; j++) {
      if (j > i + 1 && sorted[j] === sorted[j - 1]) {
        continue;
      }
      let p = j + 1;
      let q = sorted.length - 1;
      while (p < q) {
        let sum = sorted[i] + sorted[j] + sorted[p] + sorted[q];
        if (sum === target) {
          res.push([sorted[i], sorted[j], sorted[p], sorted[q]]);
          while (p < q && sorted[p] === sorted[p + 1]) {
            p++;
          }
          while (p < q && sorted[q] === sorted[q - 1]) {
            q--;
          }
          p++;
          q--;
        } else if (sum < target) {
          p++;
        } else {
          q--;
        }
      }
    }
  }
  return res;
}
