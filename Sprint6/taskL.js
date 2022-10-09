/*
* Неориентированный граф называется полным, если в нём каждая пара вершин соединена ребром.

Вам дан неориентированный граф из n вершин и m рёбер. Выясните, является ли этот граф полным.

Формат ввода
В первой строке дано число вершин n (1 ≤ n ≤ 105) и число рёбер m (0 ≤ m ≤ 5 ⋅ 105).
*  В следующих m строках записаны рёбра в виде пар вершин u и v (1 ≤ u, v ≤ n).

Формат вывода
Если граф является полным, выведите «YES», иначе выведите «NO».
* */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
let line = 0;
rl.on('line', line => {
    input.push(line);
    const maxLen = Number(input[0].split(' ')[1]) + 1;
    if (input.length === maxLen) {
        solve();
        rl.close();
    }
})

function solve() {
    const [n, m] = readArray();
    let edges = [];
    for (let i = 0; i < m; i++) {
        edges.push(readArray());
    }

    const list = buildList(n, edges);
    console.log(isFull(list));
}

function buildList(n, edges) {
    let list = Array.from(new Array(n), () => new Set());
    edges.forEach(([u, v]) => {
        if (v !== u) {
            list[u - 1].add(v - 1);
            list[v - 1].add(u - 1);
        }
    });

    return list;
}

function isFull(list) {
    for (let i of list) {
        if (list.length - i.size !== 1) {
            return 'NO';
        }
    }
    return 'YES';
}

function readArray() {
    let arr = input[line].trim(" ").split(" ").map(num => Number(num));
    line++;
    return arr;
}