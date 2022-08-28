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
