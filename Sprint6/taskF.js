/*
* Найдите кратчайшее расстояние между парой вершин в неориентированном графе.
*  Граф может быть несвязным.

Формат ввода
В первой строке дано количество вершин n (1 ≤ n ≤ 105) и рёбер m (1 ≤ m ≤ 105).
*  Далее в m строках описаны рёбра графа.
*  Каждое ребро описывается номерами двух вершин u и v (1 ≤ u, v ≤ n).
*  В последней строке дан номер стартовой вершины s (1 ≤ s ≤ n) и конечной t (1 ≤ t ≤ n).
*  Гарантируется, что в графе нет петель и кратных рёбер.

Формат вывода
Выведите длину кратчайшего пути (в рёбрах) между заданной парой вершин.
*  Если пути не существует, то выведите -1.
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
    const maxLen = Number(input[0].split(' ')[1]) + 2;
    if (input.length === maxLen) {
        solve();
        rl.close();
    }
})

function readArray() {
    let arr = input[line].split(" ").map(num => Number(num));
    line++;
    return arr;
}

function solve() {
    const [n, m] = readArray();
    let edges = [];
    for (let i = 0; i < m; i++) {
        edges.push(readArray());
    }
    const list = buildList(n, edges);
    const [from, to] = readArray();
    console.log(minDistance(list, from, to));
}

function minDistance(list, from, to) {
    const queue = new Queue();
    const visited = [];
    visited[from] = true;
    queue.push([from, 1]);

    while (queue.size()) {
        const [v, w] = queue.pop();

        if (v === to) {
            return w - 1;
        }

        for (let u of list[v]) {
            if (!visited[u]) {
                visited[u] = true;
                queue.push([u, w + 1])
            }
        }

    }
    return -1;
}

function buildList(n, edges) {
    let list = Array.from(new Array(n + 1), () => []);

    edges.forEach(([u, v]) => {
        list[u].push(v);
        list[v].push(u);
    });

    return list;
}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.qSize = 0
    }

    push(x) {
        const newTail = new Node(x);
        if (this.qSize === 0) {
            this.head = newTail;
        }

        if (this.tail) {
            this.tail.next = newTail
        }
        this.tail = newTail;

        this.qSize++;
    }

    pop() {
        const x = this.head.value
        this.head = this.head.next;

        this.qSize--;
        return x;
    }

    size() {
        return this.qSize;
    }
}