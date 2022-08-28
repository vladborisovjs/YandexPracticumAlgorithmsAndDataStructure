//69670719

/**
 * ПРИНЦИП РАБОТЫ
 *  Находим опорную точку (центр)
 *  Определяем левую и правую границу
 *  В цикле сдвигаем границы до тех пор пока будет дайдет/не найден элемент
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 *  Последовательность состоит из 2 отсортированных массивов
 *  в порядке возрастания, что в принципе подходит для решения
 *  задачи бинарным поиском. Разделяем массивы на равные части
 *  до тех пор пока не найдем элемент
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 *  Бинарный поиск n элементов имеет временную сложность О(log n)
 *
 * ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
 *  Бинарный поиск и поиск опорной точки имеют сложность О(1)
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 3) {
    const arr = input[2].split(' ').map((x) => parseInt(x, 10));
    const target = parseInt(input[1], 10);
    brokenSearch(arr, target);
    rl.close();
  }
});
/**
 *
 * @param {object} arr
 * @param {number} target
 * @returns {number}
 */
function brokenSearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (arr[left] <= arr[middle]) {
      if (target < arr[middle] && target >= arr[left]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target <= arr[right] && target > arr[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
}
