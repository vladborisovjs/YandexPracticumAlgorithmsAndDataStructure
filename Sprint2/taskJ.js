/**
 * Любимый вариант очереди Тимофея — очередь, написанная с использованием связного списка.
 * Помогите ему с реализацией. Очередь должна поддерживать выполнение трёх команд:

 get() — вывести элемент, находящийся в голове очереди, и удалить его. Если очередь пуста, то вывести «error».
 put(x) — добавить число x в очередь
 size() — вывести текущий размер очереди
 Формат ввода
 В первой строке записано количество команд n — целое число, не превосходящее 1000. В каждой из следующих n строк записаны команды по одной строке.

 Формат вывода
 Выведите ответ на каждый запрос по одному в строке.
 * */
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    let node = new LinkedListNode(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new LinkedListNode(value);
    }
    this.length++;
  }

  removeHead() {
    if (this.getLength()) {
      let oldHead = this.head.value;
      let current = this.head;
      this.head = current.next;
      this.length--;
      return oldHead;
    }
  }

  getHead() {
    return this.head;
  }

  getLength() {
    return this.length;
  }
}

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  put(value) {
    this.linkedList.append(value);
  }

  get() {
    if (!this.linkedList.getLength()) {
      return 'error';
    }
    const head = this.linkedList.removeHead();
    if (head !== undefined) {
      return head;
    }
  }

  size() {
    return this.linkedList.getLength();
  }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
const queue = new Queue();

rl.on('line', (line) => {
  input.push(line);
  if (input.length === parseInt(input[0], 10) + 1) {
    for (let i = 1; i < input.length; i++) {
      if (input[i] === 'size') {
        console.log(queue.size());
      }
      if (input[i] === 'get') {
        console.log(queue.get());
      }
      if (input[i].includes('put')) {
        queue.put(parseInt(input[i].split(' ')[1], 10));
      }
    }
    rl.close();
  }
});
