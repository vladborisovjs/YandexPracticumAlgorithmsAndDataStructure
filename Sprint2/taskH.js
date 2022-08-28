const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  process.stdout.write(is_correct_bracket_seq(line) + '\n');
  rl.close();
});

function is_correct_bracket_seq(string) {
  const start = '[{(';
  const end = ']})';
  const queue = [];
  const map = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (start.includes(char)) {
      queue.push(char);
    } else if (end.includes(char)) {
      const last = queue.pop();
      if (map[char] !== last) {
        return 'False';
      }
    }
  }
  return !queue.length ? 'True' : 'False';
}
