/**
 * Астрологи объявили день очередей ограниченного размера. Тимофею нужно написать класс MyQueueSized, который принимает параметр max_size, означающий максимально допустимое количество элементов в очереди.

 Помогите ему —– реализуйте программу, которая будет эмулировать работу такой очереди. Функции, которые надо поддержать, описаны в формате ввода.

 Формат ввода
 В первой строке записано одно число — количество команд, оно не превосходит 5000.
 Во второй строке задан максимально допустимый размер очереди, он не превосходит 5000.
 Далее идут команды по одной на строке. Команды могут быть следующих видов:

 push(x) — добавить число x в очередь;
 pop() — удалить число из очереди и вывести на печать;
 peek() — напечатать первое число в очереди;
 size() — вернуть размер очереди;
 При превышении допустимого размера очереди нужно вывести «error». При вызове операций pop() или peek() для пустой очереди нужно вывести «None».
 Формат вывода
 Напечатайте результаты выполнения нужных команд, по одному на строке.
 * */
class MyQueueSized {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    if (!this.array.length) {
      return 'None';
    }
    const first = this.array[0];
    this.array = this.array.slice(1);
    return first;
  }

  peek() {
    return this.array[0] || 'None';
  }

  size() {
    return this.array.length;
  }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
const queue = new MyQueueSized();

rl.on('line', (line) => {
  input.push(line);
  if (input.length === parseInt(input[0], 10) + 2) {
    for (let i = 2; i < input.length; i++) {
      if (input[i] === 'peek') {
        console.log(queue.peek());
      }
      if (input[i] === 'size') {
        console.log(queue.size());
      }
      if (input[i] === 'pop') {
        console.log(queue.pop());
      }
      if (input[i].includes('push')) {
        if (queue.size() === parseInt(input[1], 10)) {
          console.log('error');
        } else {
          queue.push(parseInt(input[i].split(' ')[1], 10));
        }
      }
    }
    rl.close();
  }
});
