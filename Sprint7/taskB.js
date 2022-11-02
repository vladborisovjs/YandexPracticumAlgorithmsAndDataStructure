/**
 * Дано количество учебных занятий, проходящих в одной аудитории.
 * Для каждого из них указано время начала и конца.
 * Нужно составить расписание, в соответствии с которым в классе можно будет провести как можно больше занятий.
 *
 * Если возможно несколько оптимальных вариантов,
 * то выведите любой.
 * Возможно одновременное проведение более чем одного занятия нулевой длительности.
 *
 * Формат ввода
 * В первой строке задано число занятий. Оно не превосходит 1000.
 * Далее для каждого занятия в отдельной строке записано время начала и конца, разделённые пробелом.
 * Время задаётся одним целым числом h, если урок начинается/заканчивается ровно в h часов.
 * Если же урок начинается/заканчивается в h часов m минут, то время записывается как h.m.
 * Гарантируется, что каждое занятие начинается не позже, чем заканчивается.
 * Указываются только значащие цифры.
 *
 * Формат вывода
 * Выведите в первой строке наибольшее число уроков, которое можно провести в аудитории.
 * Далее выведите время начала и конца каждого урока в отдельной строке в порядке их проведения.
 * */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = []
rl.on('line', line => {
    input.push(line);
    const n = Number(input[0]);
    const schedule = [];
    let counter = 0;
    const intervals = [];
    if (input.length === n + 1) {
        for (let i = 1; i < input.length; i++) {
            schedule.push(input[i].split(" ").map((el) => Number(el)))
        }
        const sorted = schedule.sort((a,b) => {
            const [aStart, aEnd] = a;
            const [bStart, bEnd] = b;

            if (aEnd === bEnd) {
                if (aStart === bStart) {
                    return 0;
                }

                if (aStart > bStart) {
                    return 1;
                }

                return -1;
            }

            if (aEnd > bEnd) {
                return 1;
            }

            return -1;
        });

        let time = sorted[0][0];

        for (let i = 0; i < n; i++) {
            const [start, end] = sorted[i];
            if (time <= start) {
                intervals.push(sorted[i]);
                counter++;
                time = end;
            }
        }

        console.log(counter)

        intervals.forEach((el) => {
            console.log(el.join(' '));
        })
        rl.close();
    }
})
