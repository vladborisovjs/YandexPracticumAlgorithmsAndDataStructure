/**
 * В этой задаче вам необходимо посчитать префикс-функцию для заданной строки.
 *
 * Формат ввода
 * На вход подаётся строка, состоящая из строчных латинских букв. Длина строки не превосходит 10^6.
 *
 * Формат вывода
 * Если длина входной строки L,
 * то выведите через пробел L целых неотрицательных чисел —– массив значений префикс-функции исходной строки.
 * */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', line => {
    console.log(prefixFn(line).join(" "));
    rl.close();
})

function prefixFn(str) {
    const pi = new Array(str.length).fill(0);

    for (let i = 1; i < str.length; i++) {
        let k = pi[i - 1];
        while (k > 0 && str[k] !== str[i]) {
            k = pi[k - 1];
        }
        if (str[k] === str[i]) {
            k += 1;
        }
        pi[i] = k;
    }

    return pi;
}