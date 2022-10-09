/*
* Дан ациклический ориентированный граф (так называемый DAG, directed acyclic graph).
* Найдите его топологическую сортировку, то есть выведите его вершины в таком порядке,
*  что все рёбра графа идут слева направо.
*  У графа может быть несколько подходящих перестановок вершин.
*  Вам надо найти любую топологическую сортировку.

Формат ввода
В первой строке даны два числа – количество вершин n (1 ≤ n ≤ 105) и количество рёбер m (0 ≤ m ≤ 105).
*  В каждой из следующих m строк описаны рёбра по одному на строке.
*  Каждое ребро представлено парой вершин (from, to), 1≤ from, to ≤ n,
*  соответственно номерами вершин начала и конца.

Формат вывода
Выведите номера вершин в требуемом порядке.
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
    const maxLen = Number(input[0].split(' ')[1]) + 1;
    if (input.length === maxLen) {
        solve();
        rl.close();
    }
})

function readArray() {
    let arr = input[curLine].trim(" ").split(" ").map(num => Number(num));
    curLine++;
    return arr;
}

function solve() {
    const [n, m] = readArray();
    let edges = [];
    for (let i = 0; i < m; i++) {
        edges.push(readArray());
    }

    const list = buildList(n, edges);
    const color = new Array(n).fill('white');
    const stack = new Stack();
    function launch() {
        for (let i = 0; i < n; i++) {
            if (color[i] === 'white') {
                topSort(i);
            }
        }
    }


    function topSort(v) {
        color[v] = 'gray';

        for (let w of list[v]) {
            if (color[w] === 'white') {
                topSort(w);
            }
        }

        color[v] = 'black';
        stack.push(v);
    }
    launch();
    console.log(stack.print().map(el => el + 1).join(" "));
}



function buildList(n, edges) {
    let list = Array.from(new Array(n), () => []);

    edges.forEach(([u, v]) => {
        list[u - 1].push(v - 1);
    });

    list = list.map(i => i.sort((a,b) => b - a))

    return list;
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

    print() {
        return this.linkedList.printValues();
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
