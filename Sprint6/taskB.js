/*
* Алла успешно справилась с предыдущим заданием, и теперь ей дали новое.
*  На этот раз список рёбер ориентированного графа надо переводить в матрицу смежности.
*  Конечно же, Алла попросила вас помочь написать программу для этого.

Формат ввода
В первой строке дано число вершин n (1 ≤ n ≤ 100) и число рёбер m (1 ≤ m ≤ n(n-1)).
*  В следующих m строках заданы ребра в виде пар вершин (u,v),
*  если ребро ведет от u к v.

Формат вывода
Выведите матрицу смежности n на n.
*  На пересечении i-й строки и j-го столбца стоит единица,
*  если есть ребро, ведущее из i в j.
* */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on('line', line => {
    input.push(line);
    const vertex = Number(input[0].split(' ')[0])
    const maxLen = Number(input[0].split(' ')[1]) + 1;
    if (input.length === maxLen) {
        for (let i = 1; i <= vertex; i++) {
            let row = '';
            const edges = input
                .filter((el, index) => Number(el.split(' ')[0]) === i && index)
                .map((el) => el.split(' ')[1])
            for (let j = 1; j <= vertex; j++) {
                const found = edges.find((el) => el === `${j}`);
                if (found) {
                    row += '1 ';
                } else {
                    row += '0 ';
                }
            }
            console.log(row);
        }
        rl.close();
    }
})