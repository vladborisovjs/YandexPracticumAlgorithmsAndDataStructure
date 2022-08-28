const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = []
let longestLine = '';
let maxLength = 0;
rl.on('line', line => {
    input.push(line);
    if (input.length === 2) {
        maxLength = Math.max(...input[1].split(' ').map((x) => x.length));
        longestLine = input[1].split(' ').find((el) => el.length === maxLength);
        process.stdout.write(longestLine + '\n' + maxLength + '\n');
        rl.close();    
    }
})