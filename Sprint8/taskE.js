/**
 * У Риты была строка s, Гоша подарил ей на 8 марта ещё n других строк ti, 1≤ i≤ n.
 * Теперь Рита думает, куда их лучше поставить.
 * Один из вариантов —– расположить подаренные строки внутри имеющейся строки s,
 * поставив строку ti сразу после символа строки s с номером ki (в частности, если ki=0,
 * то строка вставляется в самое начало s).
 *
 * Помогите Рите и определите, какая строка получится после вставки в s всех подаренных Гошей строк.
 *
 * Формат ввода
 * В первой строке дана строка s.
 * Строка состоит из строчных букв английского алфавита,
 * не бывает пустой и её длина не превышает 105 символов.
 *
 * Во второй строке записано количество подаренных строк — натуральное число n, 1 ≤ n ≤ 105.
 *
 * В каждой из следующих n строк через пробел записаны пары ti и ki.
 * Строка ti состоит из маленьких латинских букв и не бывает пустой.
 * ki — целое число, лежащее в диапазоне от 0 до |s|. Все числа ki уникальны.
 * Гарантируется, что суммарная длина всех строк ti не превосходит 105.
 *
 * Формат вывода
 * Выведите получившуюся в результате вставок строку.
 * */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    input.push(line);
    if (input.length > 1 && input.length === Number(input[1]) + 2) {
        const original = input[0];
        const n = Number(input[1]);
        const inserts = [];
        let result = '';
        let offset = 0;
        for (let i = 2; i < n + 2; i ++) {
            [str, ind] = input[i].split(" ")
            inserts.push([Number(ind), str])
        }
        const sorted = inserts.sort((a,b) => a[0] - b [0])
        for (let i = 0; i < sorted.length; i++) {
            result += original.slice(offset, sorted[i][0]) + sorted[i][1];
            offset = sorted[i][0];
        }
        result += original.slice(offset, original.length)
        console.log(result);
        rl.close();
    }
});