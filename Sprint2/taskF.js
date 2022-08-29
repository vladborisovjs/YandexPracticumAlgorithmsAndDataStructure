/**
 * Нужно реализовать класс StackMax, который поддерживает операцию определения максимума среди всех элементов в стеке.
 * Класс должен поддерживать операции push(x), где x – целое число, pop() и get_max().

 Формат ввода
 В первой строке записано одно число n — количество команд, которое не превосходит 10000. В следующих n строках идут команды. Команды могут быть следующих видов:

 push(x) — добавить число x в стек;
 pop() — удалить число с вершины стека;
 get_max() — напечатать максимальное число в стеке;
 Если стек пуст, при вызове команды get_max() нужно напечатать «None», для команды pop() — «error».

 Формат вывода
 Для каждой команды get_max() напечатайте результат её выполнения.
 Если стек пустой, для команды get_max() напечатайте «None». Если происходит удаление из пустого стека — напечатайте «error».
 * */
class StackMax {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    const head = this.array.pop();
    if (head === undefined) {
      return 'error';
    }
  }

  get_max() {
    if (!this.array.length) {
      return 'None';
    }
    return Math.max(...this.array);
  }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
const stack = new StackMax();

rl.on('line', (line) => {
  input.push(line);
  if (input.length === parseInt(input[0], 10) + 1) {
    for (let i = 1; i < input.length; i++) {
      if (input[i] === 'pop' && stack.pop()) {
        console.log(stack.pop());
      }
      if (input[i] === 'get_max') {
        console.log(stack.get_max());
      }
      if (input[i].includes('push')) {
        stack.push(parseInt(input[i].split(' ')[1], 10));
      }
    }
    rl.close();
  }
});
