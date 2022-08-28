const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', line => {
    const num = line.split(' ').map((x) => parseInt(x, 10));
    const {a, x,b,c} = {a:num[0], x:num[1], b:num[2], c:num[3]};
    process.stdout.write(a*x*x + b*x + c + '\n');
    rl.close();
})