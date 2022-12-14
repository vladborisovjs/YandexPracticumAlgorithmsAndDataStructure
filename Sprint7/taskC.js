/**
 * Гуляя по одному из островов Алгосского архипелага,
 * Гоша набрёл на пещеру, в которой лежат кучи золотого песка.
 * К счастью, у Гоши есть с собой рюкзак грузоподъёмностью до M килограмм,
 * поэтому он может унести с собой какое-то ограниченное количество золота.
 *
 * Всего золотых куч n штук, и все они разные.
 * В куче под номером i содержится mi килограммов золотого песка,
 * а стоимость одного килограмма — ci алгосских франков.
 *
 * Помогите Гоше наполнить рюкзак так,
 * чтобы общая стоимость золотого песка в пересчёте на алгосские франки была максимальной.
 *
 * Формат ввода
 * В первой строке задано целое число M — грузоподъёмность рюкзака Гоши (0 ≤ M ≤ 108).
 *
 * Во второй строке дано количество куч с золотым песком — целое число n (1 ≤ n ≤ 105).
 *
 * В каждой из следующих n строк описаны кучи: i-ая куча задаётся двумя целыми числами ci и mi,
 * записанными через пробел (1 ≤ ci ≤ 107, 1 ≤ mi ≤ 108).
 *
 * Формат вывода
 * Выведите единственное число —– максимальную сумму (в алгосских франках),
 * которую Гоша сможет вынести из пещеры в своём рюкзаке.
 * */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on('line', line => {
    input.push(line);
    const max = Number(input[0]);
    const heapAmount = Number(input[1]);
    const heaps = [];
    let weight = 0;
    let total = 0;
    let h = 0;
    if (input.length === heapAmount + 2) {
        for (let i = 2; i < input.length; i++) {
            heaps.push(input[i].split(" ").map((el) => Number(el)))
        }
        const sorted = heaps.sort((a, b) => a[0] > b[0] ? -1 : a[0] < b[0] ? 1 : 0);

        while (weight < max && h < heapAmount) {
            const [c, m] = sorted[h];

            for (let i = 0; i < m && weight < max; i++) {
                weight += 1;
                total += c;
            }
            h++;
        }
        console.log(total);
        rl.close();
    }
})