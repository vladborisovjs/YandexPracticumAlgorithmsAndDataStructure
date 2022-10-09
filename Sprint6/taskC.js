/*
* Задан неориентированный граф.
*  Обойдите с помощью DFS все вершины, достижимые из заданной вершины s,
*  и выведите их в порядке обхода, если начинать обход из s.

Формат ввода
В первой строке дано количество вершин n (1 ≤ n ≤ 105) и рёбер m (0 ≤ m ≤ 105).
*  Далее в m строках описаны рёбра графа.
*  Каждое ребро описывается номерами двух вершин u и v (1 ≤ u, v ≤ n).
*  В последней строке дан номер стартовой вершины s (1 ≤ s ≤ n).
*  В графе нет петель и кратных рёбер.

Формат вывода
Выведите вершины в порядке обхода,
*  считая что при запуске от каждой конкретной вершины её соседи будут
*  рассматриваться в порядке возрастания (то есть если вершина 2 соединена с 1 и 3,
*  то сначала обход пойдёт в 1, а уже потом в 3).
* */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
let curLine = 0;
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
    let arr = input[curLine].trim(" ").split(" ").map(num => Number(num));
    curLine++;
    return arr;
}

function readInt() {
    const value = Number(input[curLine]);
    curLine++;
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
    dfs(list, startVertex);
}

function buildList(n, edges) {
    let list = Array.from(new Array(n + 1), () => []);

    edges.forEach(([u, v]) => {
        list[u].push(v);
        list[v].push(u);
    });

    list = list.map(i => i.sort((a,b) => b - a))

    return list;
}

function dfs(list, startVertex) {
    const stack = new Stack();
    const visited = new Array(list.length).fill(false);
    stack.push(startVertex);

    while (stack.size() > 0) {
        const v = stack.pop();
        if (!visited[v]) {
            result += `${v} `;
            visited[v] = true;

            for (let u of list[v]) {
                if (!visited[u]) {
                    stack.push(u);
                }
            }
        }
    }
}

class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty() {
        return !this.linkedList.head;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.linkedList.head.value;
    }

    push(value) {
        this.linkedList.prepend(value);
    }

    pop() {
        const removedHead = this.linkedList.removeHead();
        return removedHead || null;
    }

    size() {
        return this.linkedList.getLength();
    }
}

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        let node = new LinkedListNode(value);
        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new LinkedListNode(value);
        }
        this.length++;
    }

    prepend(value) {
        let node = new LinkedListNode(value);
        if (this.length === 0) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    removeHead() {
        let current = this.head;
        this.head = current.next;
        this.length--;
        return current.value;
    }

    removeAt(position) {
        if (position < 0 || position > this.length) {
            console.log('Incorrect value of position');
            return;
        }

        let current = this.head;
        if (position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }
            prev.next = current.next;
        }
        this.length--;
    }

    printNodes() {
        return this.head;
    }

    printValues() {
        let current = this.head;
        const arr = [];
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }

    isEmpty() {
        return this.length === 0;
    }

    getLength() {
        return this.length;
    }
}
