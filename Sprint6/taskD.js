/*
* Задан неориентированный граф.
*  Обойдите поиском в ширину все вершины, достижимые из заданной вершины s,
*  и выведите их в порядке обхода, если начинать обход из s.

Формат ввода
В первой строке дано количество вершин n (1 ≤ n ≤ 105) и рёбер m (0 ≤ m ≤ 105).
*  Далее в m строках описаны рёбра графа.
*  Каждое ребро описывается номерами двух вершин u и v (1 ≤ u, v ≤ n).
*  В последней строке дан номер стартовой вершины s (1 ≤ s ≤ n).

Гарантируется, что в графе нет петель и кратных рёбер.

Формат вывода
Выведите вершины в порядке обхода,
*  считая что при запуске от каждой конкретной вершины её соседи будут рассматриваться
*  в порядке возрастания (то есть если вершина 2 соединена с 1 и 3,
*  то сначала обход пойдёт в 1, а уже потом в 3).
* */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
let line = 0;
let result = '';
rl.on('line', line => {
    input.push(line);
    const maxLen = Number(input[0].split(' ')[1]) + 2;
    if (input.length === maxLen) {
        solve();
        console.log(result);
        rl.close();
    }
})

function readArray() {
    let arr = input[line].split(" ").map(num => Number(num));
    line++;
    return arr;
}

function readInt() {
    const value = Number(input[line]);
    line++;
    return value;
}

function solve() {
    const [n, m] = readArray();
    let edges = [];
    for (let i = 0; i < m; i++) {
        edges.push(readArray());
    }
    const list = buildList(n, edges);
    const startVertex = readInt();
    bfs(list, startVertex);
}

function bfs(list, startVertex) {
    const queue = new Queue();
    const visited = new Array(list.length).fill(false);

    queue.push(startVertex);
    visited[startVertex] = true;

    while(queue.size()) {
        const v = queue.pop();
        result += `${v} `;

        for (let u of list[v]) {
            if (!visited[u]) {
                queue.push(u);
                visited[u] = true;
            }
        }
    }
}
function buildList(n, edges) {
    let list = Array.from(new Array(n + 1), () => []);

    edges.forEach(([u, v]) => {
        list[u].push(v);
        list[v].push(u);
    });

    list = list.map(i => i.sort((a,b) => a - b))

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
        if (this.qSize === 0) {
            throw new Error('error');
        }

        const x = this.head.value
        this.head = this.head.next;

        this.qSize--;
        return x;
    }

    size() {
        return this.qSize;
    }
}