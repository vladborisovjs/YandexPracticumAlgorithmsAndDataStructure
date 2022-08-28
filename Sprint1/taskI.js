const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', line => {
    const num = Math.log(line) / Math.log(4);
    const result = num === (num | 0) ? 'True' : 'False';
    process.stdout.write(result + '\n');
    rl.close();
})