/**
 * Палиндром —– это строка, которая одинаково читается как слева направо, так и справа налево.
 *
 * Из данной строки s путём удаления и перестановки букв надо получить палиндром максимальной длины.
 * Среди всех таких палиндромов надо получить лексикографически минимальный.
 * Количество удалений и перестановок символов может быть любым.
 *
 * Формат ввода
 * В единственной строке дана строка s. Длина строки |s| ≤ 10^5.
 * Строка состоит из строчных букв английского алфавита.
 *
 * Формат вывода
 * Выведите полученный палиндром. Заметьте, что ответ определяется однозначно.
 * */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', line => {
    console.log(makePalindrome(line));
    rl.close();
})

function makePalindrome(str) {
    let center = '';
    const dict = {};
    const chars = [];

    for (let i = 0; i < str.length; i++) {
        if (!dict[str[i]]) {
            dict[str[i]] = 1;
        } else {
            dict[str[i]]++;
        }
    }

    const keys = Object.keys(dict).sort();
    let j = 0;
    for (let char of keys) {
        if (dict[char] % 2 === 1) {
            if (!center) {
                center = char
            }
            dict[char]--;
        }

        for (let i = 0; i < Math.floor(dict[char] / 2); i++) {
            chars[j] = char;
            j++;
        }
    }

    return chars.join('') + center + chars.reverse().join('');
}