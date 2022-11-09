/**
 * Гоша измерял температуру воздуха n дней подряд.
 * В результате у него получился некоторый временной ряд.
 * Теперь он хочет посмотреть, как часто встречается некоторый шаблон в получившейся последовательности.
 * Однако температура — вещь относительная,
 * поэтому Гоша решил, что при поиске шаблона длины m (a1, a2, ..., am)
 * стоит также рассматривать сдвинутые на константу вхождения.
 * Это значит, что если для некоторого числа c в исходной последовательности
 * нашёлся участок вида (a1 + c, a2 + c, ... , am + c),
 * то он тоже считается вхождением шаблона (a1, a2, ..., am).
 *
 * По заданной последовательности измерений X и шаблону
 * A=(a1, a2, ..., am) определите все вхождения A в X, допускающие сдвиг на константу.
 *
 * Формат ввода
 * В первой строке дано количество сделанных измерений n — натуральное число,
 * не превышающее 10^4. Во второй строке через пробел записаны n целых чисел
 * xi, 0 ≤ xi ≤ 10^3 –— результаты измерений.
 * В третьей строке дано натуральное число m –— длина искомого шаблона, 1≤ m ≤ n.
 * В четвёртой строке даны m целых чисел ai — элементы шаблона, 0 ≤ ai ≤ 10^3.
 *
 * Формат вывода
 * Выведите через пробел в порядке возрастания все позиции,
 * на которых начинаются вхождения шаблона A в последовательность X.
 * Нумерация позиций начинается с единицы.
 * */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    input.push(line);
    if (input.length === 4) {
        const n = Number(input[0]);
        const search = input[1].split(" ").map((el) => Number(el))
        const m = Number(input[2])
        const tmp = input[3].split(" ").map((el) => Number(el))
        console.log(findAll(n, search, m, tmp).join(" "))
        rl.close();
    }
});

function findAll(n, search, m, tmp) {
    const positions = [];
    let start = 0;
    if (m > n) {
        return positions;
    }

    while (true) {
        const position = find(search, tmp, start)
        if (position === -1) {
            break;
        }
        positions.push(position);
        start = position;
    }

    return positions;
}

function find(search, tmp, start) {
    let result = -1;

    if (start >= search.length || search.length - start < tmp.length) {
        return result;
    }

    for (let i = start; i < search.length - tmp.length + 1; i++) {
        let shift = null;
        let match = true;

        for (let j = 0; j < tmp.length; j++) {
            if (shift === null) {
                shift = tmp[j] - search[i]
            }

            if (search[i + j] + shift !== tmp[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            result = i + 1;
            break;
        }
    }

    return result;
}