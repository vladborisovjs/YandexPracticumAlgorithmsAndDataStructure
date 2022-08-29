//69669326
/**
 * Тимофей решил организовать соревнование по спортивному программированию, чтобы найти талантливых стажёров.
 * Задачи подобраны, участники зарегистрированы, тесты написаны. Осталось придумать, как в конце соревнования будет определяться победитель.

 Каждый участник имеет уникальный логин. Когда соревнование закончится,
 к нему будут привязаны два показателя: количество решённых задач Pi и размер штрафа Fi.
 Штраф начисляется за неудачные попытки и время, затраченное на задачу.

 Тимофей решил сортировать таблицу результатов следующим образом: при сравнении двух участников выше будет идти тот, у которого решено больше задач.
 При равенстве числа решённых задач первым идёт участник с меньшим штрафом.
 Если же и штрафы совпадают, то первым будет тот, у которого логин идёт раньше в алфавитном (лексикографическом) порядке.

 Тимофей заказал толстовки для победителей и накануне поехал за ними в магазин.
 В своё отсутствие он поручил вам реализовать алгоритм быстрой сортировки (англ. quick sort) для таблицы результатов.
 Так как Тимофей любит спортивное программирование и не любит зря расходовать оперативную память,
 то ваша реализация сортировки не может потреблять O(n) дополнительной памяти для промежуточных данных (такая модификация быстрой сортировки называется "in-place").

 Формат ввода
 В первой строке задано число участников n, 1 ≤ n ≤ 100 000.
 В каждой из следующих n строк задана информация про одного из участников.
 i-й участник описывается тремя параметрами:

 уникальным логином (строкой из маленьких латинских букв длиной не более 20)
 числом решённых задач Pi
 штрафом Fi
 Fi и Pi — целые числа, лежащие в диапазоне от 0 до 109.
 Формат вывода
 Для отсортированного списка участников выведите по порядку их логины по одному в строке.
 * */
/**
 * ПРИНЦИП РАБОТЫ
 *  Вначале определяем опорный элемент (центр)
 *  Заводим 2 указателя left/right, ссылающиеся
 *  на начало и конец массива
 *  Далее двигаем левый указатель вправо до тех пор,
 *  пока он указывает на элемент меньший опорного.
 *  Правый указатель двигаем влево, пока стоим на элементе
 *  превосходящий опорный
 *  В итоге получаем элементы, которые нарушают порядок и поменяем их местами
 *  Двигаемся до тех пор пока указатели не столкнутся
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 *  Быстрая сортировка разделяет массив на 2 части при помощи опорного элемента
 *  Элементы меньше опоры перемещаются влево от опоры,
 *  элементы больше опоры вправо от опоры. Повторяем до тех пор
 *  пока массив не будет отсортирован
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 *  Общая сложность алгоритма зависит от кол-ва разделений, входных данных
 *  и методом определения опорного элемента. Так как опорный элемент средний,
 *  то сложность О(NlogN)
 * ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
 *  Требует О(1) памяти
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
const participants = [];

/**
 * Класс Участника
 */
class Person {
  constructor(name, solved, penalty) {
    this.name = name;
    this.solved = solved;
    this.penalty = penalty;
  }
  /**
   * @returns {string}
   */
  getName() {
    return this.name;
  }
}

rl.on('line', (line) => {
  input.push(line);
  if (input.length === parseInt(input[0], 10) + 1) {
    for (let i = 1; i < input.length; i++) {
      [username, solved, penalty] = input[i].split(' ');
      participants.push(
        new Person(username, -parseInt(solved, 10), parseInt(penalty, 10))
      );
    }
    let result = quickSort(participants, 0, participants.length - 1);
    for (let participant of result) {
      console.log(participant.getName());
    }
    rl.close();
  }
});

/**
 * @param {object} array
 * @param {object} pivot
 * @returns {boolean}
 */
function isLessPiv(array, pivot) {
  return (
    array.solved < pivot.solved ||
    (array.solved === pivot.solved && array.penalty < pivot.penalty) ||
    (array.solved === pivot.solved &&
      array.penalty === pivot.penalty &&
      array.name < pivot.name)
  );
}

/**
 * @param {object} array
 * @param {object} pivot
 * @returns {boolean}
 */
function isGreaterPiv(array, pivot) {
  return (
    array.solved > pivot.solved ||
    (array.solved === pivot.solved && array.penalty > pivot.penalty) ||
    (array.solved === pivot.solved &&
      array.penalty === pivot.penalty &&
      array.name > pivot.name)
  );
}

/**
 *
 * @param {object[]} array
 * @param {number} left
 * @param {number} right
 * @returns {object[]}
 */
function quickSort(array, left, right) {
  if (left >= right) {
    return array;
  }
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (isLessPiv(array[i], pivot)) {
      i++;
    }

    while (isGreaterPiv(array[j], pivot)) {
      j--;
    }

    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  quickSort(array, left, j);
  quickSort(array, i, right);
  return array;
}
