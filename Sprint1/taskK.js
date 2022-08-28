const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = []
rl.on('line', line => {
    input.push(line);
    if (input.length === 3) {
        const x = parseInt(input[1].split(' ').join(''), 10);
        const k = parseInt(input[2]);
        const result = `${x + k}`.split('').join(' ');
        process.stdout.write(result + '\n');
        rl.close();
    }
})