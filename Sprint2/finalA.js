// 69599295

/**
 * ПРИНЦИП РАБОТЫ
 *     На вход подается 1 строка, записанная в обратной польской нотации
 *     Саму строчку конвертируем в массив элементов и начинаем обход
 *     Если элемент является операндом, то элемент помещается в голову стека
 *     Если элемент является знаком операции, то эту операцию применяем к 2м значениям,
 *     которые берем из стека. Результат операции записываем в голову стека
 *     После полного обхода массива результат вычисление будет записан в голове стека
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 *     Для решения задачи был использован стек на основе связного списка,
 *     который позволяет эффективно извлекать и удалять элементы
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 *     Добавление в стек О(1)
 *     Удаление О(1)
 * ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
 *     Стек содержит n элементов, а значит он занимает O(n) памяти
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Класс узла связного списка
 */
class LinkedListNode {
  /**
   * @param {string} value
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Класс связного списка
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * Добавление в конец списка
   * @param {string} value
   */
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

  /**
   * Добавление в начало списка
   * @param {string} value
   */
  prepend(value) {
    let node = new LinkedListNode(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /**
   * Удаление головы списка
   * путем переприсваивания
   * @returns {string}
   */
  removeHead() {
    let current = this.head;
    this.head = current.next;
    this.length--;
    return current.value;
  }

  /**
   * Вывод значение головы списка
   * @returns {number} результат выражения
   */
  print() {
    return this.head.value;
  }
}

/**
 * Класс Стек
 */
class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * Добавление в голову списка
   * @param {number} value
   */
  push(value) {
    this.linkedList.prepend(value);
  }

  /**
   * Удаление из головы списка
   * @returns {object|null}
   */
  pop() {
    const removedHead = this.linkedList.removeHead();
    return removedHead || null;
  }

  /**
   * Печать головы списка
   * @returns {number} значение головы списка
   */
  print() {
    return this.linkedList.print();
  }
}

const stack = new Stack();
/**
 * Функция возращает результат выражения
 * @param {string} operation
 * @param {number} firstLiteral
 * @param {number} secondLiteral
 */
function calculate(operation, firstLiteral, secondLiteral) {
  switch (operation) {
    case '+':
      return secondLiteral + firstLiteral;
    case '-':
      return secondLiteral - firstLiteral;
    case '/':
      return Math.floor(secondLiteral / firstLiteral);
    case '*':
      return secondLiteral * firstLiteral;
  }
}

rl.on('line', (line) => {
  const arr = line.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      stack.push(calculate(arr[i], stack.pop(), stack.pop()));
    } else {
      stack.push(parseInt(arr[i], 10));
    }
  }
  process.stdout.write(stack.print() + '\n');
  rl.close();
});
