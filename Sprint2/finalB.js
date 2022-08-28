//69600699

/**
 * ПРИНЦИП РАБОТЫ
 *    Дек был реализован при помощи двусторонней очереди, чтобы можно было
 *    добавлять и извлекать с обоих концов
 *    На вход подается 2 числа. Это максимальное кол-во операций дека
 *    и максимальное значение дека соответственно. Далее идут непосредственно операции дека
 *    Сам дек был реализован при помощи двусторонней очереди на базе массива, чтобы можно было
 *    добавлять и извлекать с обоих концов
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 *     Есть ограничение на максимальный размер очереди. Поэтому реализовываем кольцевой буфер
 *     у которого есть максимальный размер и 2 указателя на голову и хвост. Указатели head/tail
 *     будут начинаться с индекса 0, а далле при выполнении методов очереди мы будем менять указатели
 *     и перезаписывать head/tail.
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 *    Все операции: Добавление/извлечение/проверка на пустоту и полноту работают за О(1)
 *    из-за ограничения размера. Нам не нужно снова выделять память, в противном случае сложность О(n)
 * ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
 *    Так как максимальный размер дека задается числом n, значит он будет занимать О(n) памяти
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
/**
 * Класс двусторонней очереди
 */
class Queue {
  /**
   * @param {string} maxSize Максимальный размер очереди
   */
  constructor(maxSize) {
    this.array = new Array(maxSize).fill(null);
    this.maxSize = maxSize;
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  /**
   * Метод добавляет елемент в хвост очереди
   * и меняет ее размер
   * @param {number} value
   */
  pushBack(value) {
    if (this.isFull()) {
      console.log('error');
    } else {
      this.array[this.tail] = value;
      this.tail = (this.tail + 1) % this.maxSize;
      this.size += 1;
    }
  }

  /**
   * Метод добавляет елемент в голову очереди
   * и меняет ее размер
   * @param {number} value
   */
  pushFront(value) {
    if (this.isFull()) {
      console.log('error');
    } else {
      this.head = (this.head - 1 + this.maxSize) % this.maxSize;
      this.array[this.head] = value;
      this.size += 1;
    }
  }

  /**
   *  Метод извлекает и выводит значение из головы очереди
   *  и меняет ее размер
   */
  popFront() {
    if (this.isEmpty()) {
      console.log('error');
    } else {
      const value = this.array[this.head];
      this.head = (this.head + 1) % this.maxSize;
      this.size -= 1;
      console.log(value);
    }
  }

  /**
   * Метод извлекает и выводит хвостовое значение очереди
   * и меняет ее размер
   */
  popBack() {
    if (this.isEmpty()) {
      console.log('error');
    } else {
      this.tail = (this.tail - 1 + this.maxSize) % this.maxSize;
      this.size -= 1;
      console.log(this.array[this.tail]);
    }
  }

  /**
   * Метод проверяет пустоту очереди
   * @returns boolean
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Метод проверяет полноту очереди
   * @returns boolean
   */
  isFull() {
    return this.size === this.maxSize;
  }
}

rl.on('line', (line) => {
  input.push(line);
  const maxCmd = parseInt(input[0], 10);
  const beforeCmdStr = 2;
  if (input.length === maxCmd + beforeCmdStr) {
    const maxDeckSize = parseInt(input[1], 10);
    const queue = new Queue(maxDeckSize);
    for (let i = 2; i < input.length; i++) {
      if (input[i] === 'pop_back') {
        queue.popBack();
      }

      if (input[i] === 'pop_front') {
        queue.popFront();
      }

      if (input[i].includes('push_front')) {
        queue.pushFront(parseInt(input[i].split(' ')[1], 10));
      }

      if (input[i].includes('push_back')) {
        queue.pushBack(parseInt(input[i].split(' ')[1], 10));
      }
    }
    rl.close();
  }
});
