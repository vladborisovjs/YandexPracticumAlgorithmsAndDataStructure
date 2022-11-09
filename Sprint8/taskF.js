/**
 * Дан набор слов, слова могут повторяться.
 * Среди них надо найти самое частое слово.
 * Если таких слов несколько, то выведите лексикографически наименьшее.
 *
 * Формат ввода
 * В первой строке дано число n (1 ≤ n ≤ 10^3) — количество строк.
 * В следующих n строках даны слова, состоящие из строчных букв английского алфавита.
 * Слово не бывает пустым.
 * Суммарная длина слов не превосходит 10^7.
 * Длина одного слова не превосходит 10^5.
 *
 * Формат вывода
 * Выведите единственную строку – наиболее частое слово,
 * лексикографически минимальное, если самых частых слов несколько.
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
        const words = {};
        let freq = 0;
        let mostFreq = null;
        for (let i = 1; i <= n; i++) {
            if (!words[input[i]]) {
                words[input[i]] = 1;
            } else {
                words[input[i]]++;
            }
        }
        const keys = Object.keys(words).sort();
        for (let word of keys) {
            if (words[word] > freq) {
                freq = words[word];
                mostFreq = word;
            }
        }
        console.log(mostFreq);
        rl.close();
    }
});