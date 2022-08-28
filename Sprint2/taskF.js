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
