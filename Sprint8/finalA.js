// 74033726

/**
 * ПРИНЦИП РАБОТЫ
 *   1 Распаковка строки
 *   2 Поиск общего префикса
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 *   Вначале считиваем строку. Заведем массив, в который будем добавлять все, кроме скобок.
 *   Если мы натыкаемся на закрывающуюся скобку, то при помощи конкатенации собираем в 1 строку и добавляем обратно в массив
 *   Обработав строку собираем все элементы массива в распакованную строку
 *   Сама распаковка происходит по следующим критериям:
 *     Пусть функция f умеет принимать ЗС и распаковывать её.
 *     Если ЗС D имеет вид D=AB, где A и B тоже ЗС, то f(D) = f(A) + f(B). Если D=n[A], то f(D) = f(A) × n.
 *   После распаковки, сравниваем каждый символ строк с другой распакованной строкой и находим общий префикс
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 *   O(M * N) - поиск общего префикса где M - длина строки, N - кол-во строк
 * ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
 *   O(M * N), где M - длина строки, N - кол-во строк
 * */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
const openSquareBracket = '[';
const closeSquareBracket = ']';

rl.on('line', (line) => {
    input.push(line);
    if (input.length === Number(input[0]) + 1) {
        const strings = [];
        for (let i = 1; i < input.length; i++) {
            strings.push(input[i]);
        }
        console.log(findPrefix(strings))
        rl.close();
    }
});

/**
 * Метод поиска префикса
 * @param {string[]} strings
 * */
function findPrefix(strings) {
    let prefix = null;

    for (let string of strings) {
        let unpackStr = unpack(string);
        if (prefix === null) {
            prefix = unpackStr;
        } else {
            for (let i = 0; i < Math.min(unpackStr.length, prefix.length); i++) {
                if (prefix[i] !== unpackStr[i]) {
                    prefix = prefix.slice(0, i);
                    break;
                }
            }
        }

        if (prefix === '') {
            return prefix;
        }
    }
    return prefix;
}

/**
 * Метод распаковки строки
 * @param {string} str
 * */
function unpack(str) {
    let i = 0;
    const result = [];

    while (i !== str.length) {
        let char = str[i];
        if (char === closeSquareBracket) {
            let last = result.pop();
            let part = '';
            while (isNaN(last)) {
                part = last + part;
                last = result.pop();
            }
            part = part.repeat(Number(last))
            result.push(part);
        } else if (char !== openSquareBracket) {
            result.push(char)
        }
        i++;
    }
    return result.join("");
}