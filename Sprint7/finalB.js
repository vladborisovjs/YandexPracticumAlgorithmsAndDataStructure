// 73588690
/**
 * ПРИНЦИП РАБОТЫ
 *   1. Вначале суммируем все элементы, если при делении на 2 есть остаток, то false.
 *   2. Заведем массив dp, длина которого равна половине суммы всех элементов + 1 и заполним значением false - базовый случай
 *   3. Переход динамики.
 *   Будем рассматривать каждое число и проставлять в элемент массива dp[j] true если:
 *      - верно значение в любой ячейке с индексом j - scores[i]
 *      - элемент равен полусумме scores[i] === j
 *   4. Вычисления происходят от последнего элемента к первому
 *   5. После всех вычислений ответ будет в dp[half]
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 *   Последовательно перебираем все пары, используя предыдущее значение для уже рассчитынных пар.
 *   После полного обхода возвращаем последний элемент массива, если до этого сумма была четная
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 *   Обходим массив размерностью sum / 2 + 1, для n - партий
 *   => O(N*sum)
 * ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
 *   Храним массив с размерностью sum / 2 + 1 => O(sum)
 * */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on('line', line => {
    input.push(line);
    if (input.length === 2) {
        const scores = input[1].split(" ").map((el) => Number(el));
        console.log(sameSum(scores) ? 'True' : 'False')
        rl.close();
    }
})

/**
 * Ищем одинаковые суммы
 * @param {int[]} scores
 * */
function sameSum(scores) {
    const sum = scores.reduce((a, b) => a + b, 0);

    if (scores.length < 2 || sum % 2 !== 0) {
        return false;
    }

    const half = Math.floor(sum / 2);
    const dp = new Array(half + 1).fill(false);

    for (let i = 0; i < scores.length; i++) {
        for (let j = half; j > scores[i] - 1; j--) {
            if (dp[j - scores[i]] || scores[i] === j) {
                dp[j] = true;
            }
        }
    }

    return dp[half];
}