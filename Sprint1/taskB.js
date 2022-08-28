const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', line => {
    const num = line.split(' ').map((x) => parseInt(x, 10));
    const {a,b,c} = {a:num[0], b:num[1], c:num[2]};
    const result = ((a % 2 === 0) && (b % 2 === 0) && (c % 2 === 0) || (a % 2 !== 0) && (b % 2 !== 0) && (c % 2 !== 0)) ? 'WIN' : 'FAIL';
    process.stdout.write(result + '\n');
    rl.close();
})