// 72269081

/**
 * ПРИНЦИП РАБОТЫ
 *   В данной задаче воспользуемся алгоритмом Прима для поиска минимального остовного дерева.
 *   На вход подается граф и для каждого ребра задается его стоимость. Берем произвольную вершину
 *   и находим ребро обладающее наименьшей стоимостью.
 *   Только в задаче требуется найти вес максимального остовного дерева
 *   и вместо ребра с минимальным весом берем с максимальный.
 *   Пока мы не рассмотрим все ребра:
 *     Извлекаем ребро с максимальным весом и добаляем в кучу
 *     Добавляем следующую вершину, которая принадлежит выбранному ребру
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 *   При помощи класса Edge - создаем массив ребр с весами.
 *   При помощи класса Heap - мы создаем приоритетную очередь ребер, откуда мы будем извлекать
 *   ребро с максимальным весом.
 *   При помощи класса Graph - мы создаем список смежности и ищем вес максимального остовного дерева
 *   Функция addVertex() добавляет вершину в остов.
 *   Пока существует куча и длина множества notAdded, берем максимальный вес из кучи edges
 *   Проверяем, что вершины этого ребра нет во множестве вершин, добавленных в остов и, в таком случае, к значению
 *   максимального остовного дерева totalW прибавляем вес максимального ребра
 *   Если в графе несколько компонент связности, выведем сообщение: 'Oops! I did it again'.
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 *   Алгоритм зависит от способа хранения графа и способа хранения вершин.
 *   Для решиния задачи используется список смежности и приоритетную очередь (Куча)
 *   Следовательно временная сложность алгоритма получается O(|E|*log|V|)
 * ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
 *   Массив ребер O(|E|)
 *   Список смежности O(|V| + |E|)
 *   Куча O(|E| + O(log|E|))
 *   Итого O(|V| + |E|)
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
        const [n, m] = readEdges();
        let edges = [];

        for (let i = 0; i < m; i++) {
            const [from, to, weight] = readEdges();
            edges[i] = new Edge(from, to, weight);
        }

        const graph = new Graph();
        const sum = graph.findMaxSpanningTree(edges, n);
        console.log(sum);
        rl.close();
    }
})

/**
 * Класс Ребра
 * */
class Edge {
    constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}

/**
 * Класс Куча
 */
class Heap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    /**
     * Добавляем ребро в кучу
     * @param {{from: number, to: number, weight: number}} key
     * */
    add(key) {
        const index = this.size + 1;
        this.heap[index] = key;
        this.size++;
        this.siftUp(index);
    }

    /**
     * Извлекаем макс по весу ребро
     * */
    pop() {
        const el = this.heap[1];
        this.heap[1] = this.heap[this.size];
        this.size--;
        this.siftDown(1);
        return el;
    }

    /**
     * Метод просеивания вверх
     * @param {number} idx
     * */
    siftUp(idx) {
        if (idx === 1) {
            return idx;
        }
        const pIdx = Math.floor(idx / 2);

        if (this.heap[pIdx].weight < this.heap[idx].weight) {
            swap(this.heap, idx, pIdx);
            return this.siftUp(pIdx);
        }

        return idx;
    }

    /**
     * Метод просеивания вниз
     * @param {number} idx
     * */
    siftDown(idx) {
        const left = 2 * idx;
        const right = 2 * idx + 1;
        let idxLargest;

        if (this.size < left) {
            return idx;
        }

        if (right <= this.size && this.heap[left].weight < this.heap[right].weight) {
            idxLargest = right;
        } else {
            idxLargest = left;
        }

        if (this.heap[idx].weight < this.heap[idxLargest].weight) {
            swap(this.heap, idx, idxLargest);
            return this.siftDown(idxLargest);
        }
        return idx;
    }

    /**
     * Получаем размер кучи
     * */
    getSize() {
        return this.size;
    }

}

/**
 * Класс графа
 */
class Graph {
    constructor() {
    }
    /**
     * Список смежности
     * @param {array<Edge>} edges
     * @param {number} n
     * */
    setAdjacencyList(edges, n) {
        let list = new Map(Array.from({ length: n }, (_, i) => [i + 1, new Set()]));

        edges.forEach((e) => {
            list.set(e.from, list.get(e.from).add(e));
            list.set(e.to, list.get(e.to).add(e));
        });

        return list;
    }
    /**
     * Ищем максимальный остов
     * @param {array<Edge>} edges
     * @param {number} n
     * */
    findMaxSpanningTree(edges, n) {
        let totalW = 0;
        const added = new Set();
        const vertices = Array.from({length: n}, (_, i) => i + 1);
        const notAdded = new Set(vertices);
        const heap = new Heap();
        const adjacencyList = this.setAdjacencyList(edges, n);
        function addVertex(v) {
            added.add(v);
            notAdded.delete(v);
            for (let e of adjacencyList.get(v)) {
                if (notAdded.has(e.from) || notAdded.has(e.to)) {
                    heap.add(e)
                }
            }
        }
        const [v] = vertices;
        addVertex(v);
        while (notAdded.size && heap.getSize()) {
            const e = heap.pop();
            if (notAdded.has(e.to)) {
                totalW += e.weight;
                addVertex(e.to);
            }

            if (notAdded.has(e.from)) {
                totalW += e.weight;
                addVertex(e.from)
            }
        }
        return notAdded.size > 0 ? 'Oops! I did it again' : totalW;
    }
}

/**
* Парсим строки в массив чисел
* */
function readEdges() {
    let edge = input[line].split(' ').map((el) => Number(el));
    line++;
    return edge;
}

/**
 * Меняем местами элементы
 *  @param {object} arr
 *  @param {number} i
 *  @param {number} j
 * */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}