/**
 * Найдите наибольший по длине общий префикс нескольких строк.
 *
 * Формат ввода
 * В первой строке дано число n (1 ≤ n ≤ 10^5).
 * Затем по одной на строке даны n строк, каждая не превышает 10^5 в длину.
 * Суммарная длина всех строк не превосходит 10^7.
 *
 * Формат вывода
 * Выведите единственное число — длину наибольшего префикса всех данных строк.
 * */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    input.push(line);
    if (input.length === Number(input[0]) + 1) {
        const n = Number(input[0]);
        const strings = []
        let max = 0;
        let prefix = 0;
        for (let i = 1; i < input.length; i++) {
            if (max < input[i].length) {
                max = input[i].length;
            }
            strings.push(input[i])
        }

        for (let j = 0; j < max; j++) {
            let char = null;
            let match = true;
            for (let str of strings) {
                if (char === null) {
                    char = str[j]
                }

                if (char !== str[j]) {
                    match = false
                    break;
                }
            }
            if (match) {
                prefix++;
                continue;
            }
            break;
        }
        console.log(prefix);
        rl.close();
    }
});