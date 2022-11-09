/**
 * Напишите программу, которая будет заменять в тексте все вхождения строки s на строку t.
 * Гарантируется, что никакие два вхождения шаблона s не пересекаются друг с другом.
 *
 * Формат ввода
 * В первой строке дан текст —– это строка из строчных букв английского алфавита,
 * длина которой не превышает 10^6.
 *
 * Во второй строке записан шаблон s, вхождения которого будут заменены.
 *
 * В третьей строке дана строка t, которая будет заменять вхождения.
 *
 * Обе строки s и t состоят из строчных букв английского алфавита,
 * длина каждой строки не превосходит 10^5. Размер итоговой строки не превосходит 2⋅ 10^6.
 *
 * Формат вывода
 * В единственной строке выведите результат всех замен — текст, в котором все вхождения s заменены на t.
 * */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    input.push(line);
    if (input.length === 3) {
        const original = input[0];
        const template = input[1];
        const repStr = input[2];
        const found = search(template, original);
        const result = [];
        let start = 0;
        for (let el of found) {
            result.push(original.slice(start, el));
            result.push(repStr);
            start = el + template.length;
        }

        if (start < original.length) {
            result.push(original.slice(start, original.length))
        }
        console.log(result.join(""));
        rl.close();
    }
});

function search(template, original) {
    const result = [];
    const pi = new Array(template.length).fill(0);
    const s = template + '#' + original;
    let pi_prev = 0;
    for (let i = 1; i < s.length; i++) {
        let k = pi_prev;
        while (k > 0 && s[k] !== s[i]) {
            k = pi[k - 1];
        }

        if (s[k] === s[i]) {
            k++;
        }

        if (i < template.length) {
            pi[i] = k;
        }
        pi_prev = k;

        if (k === template.length) {
            result.push(i - 2 * template.length)
        }
    }

    return result;
}