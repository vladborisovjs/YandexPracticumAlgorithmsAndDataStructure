const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', line => {
    let repeat = [];

    for (let i = 0; i < line.length; ++i) {
       repeat.push(line[i]);

       if (i >= line.length / 2) {
           break;
       }

       if (line.length % repeat.length !== 0) {
           continue;
       }

       let k = i + 1;

       while (k <=line.length && repeat === line.slice(k, repeat.length)) {
           k += repeat.length;
       }

       if (k === line.length) {
           console.log(line.length / repeat.length);
           return;
       }
    }

    console.log(1);
    rl.close();
})