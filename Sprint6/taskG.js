/*
* Под расстоянием между двумя вершинами в графе будем понимать длину кратчайшего пути между ними
*  в рёбрах. Для данной вершины s определите максимальное расстояние от неё до другой
*  вершины неориентированного графа.

Формат ввода
В первой строке дано количество вершин n (1 ≤ n ≤ 105) и рёбер m (0 ≤ m ≤ 105).
*  Далее в m строках описаны рёбра графа.
*  Каждое ребро описывается номерами двух вершин u и v (1 ≤ u, v ≤ n).
*  В последней строке дан номер вершины s (1 ≤ s ≤ n).
*  Гарантируется, что граф связный и что в нём нет петель и кратных рёбер.

Формат вывода
Выведите длину наибольшего пути от s до одной из вершин графа.
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
})

process.stdin.on('end', solve)

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
    const startVertex = Number(input[input.length - 1]);
    console.log(maxDistance(list, startVertex));
}

function maxDistance(list, startVertex) {
    const queue = new Queue();
    let maxDepth = 0;
    const visited = [];

    queue.push([startVertex, 1]);
    visited[startVertex] = true;

    while(queue.size()) {
        const [v, w] = queue.pop();

        for (let u of list[v]) {
            if (!visited[u]) {
                maxDepth = maxDepth > w ? maxDepth : w;
                queue.push([u, w + 1]);
                visited[u] = true;
            }
        }
    }

    return maxDepth;
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