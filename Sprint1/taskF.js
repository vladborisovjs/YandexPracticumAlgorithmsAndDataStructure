const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', line => {
    const valStr = line.toLowerCase().replace(/[^a-z]/g, '');
    const result = valStr === valStr.split('').reverse().join('') ? 'True' : 'False';
    process.stdout.write(result + '\n');
    rl.close();
})