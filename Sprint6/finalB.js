// 71999145

/**
 * ПРИНЦИП РАБОТЫ
 *   Из условия задачи все дороги направлены от меньшего номера к большему,
 *   если изменить направление одного из типов на противоположное, то в случае цикла следует
 *   что условие оптимальности не выполняется. Следовательно все задача сводится к нахождению циклов в графе
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 *   Представляем граф при помоди списка смежности.
 *   Далее при помощи метода hasCycle определяем оптимальность карты.
 *   Для удобства сделаем цветовой массив, где будем помечать вершины
 *    - белый - не посещенный город,
 *    - серый - уже посещенный, но не все его ребра обработаны,
 *    - черный - город уже посещен и все его ребра обработаны.
 *
 *    Если в процессе обхода графа мы натыкаемся на серый город, то это означает, что в графе есть цикл.
 *    Значит между парой городов есть маршрут с разным типом дорог и следовательно карта не является оптимальной
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 *   Обход графа O(|V| + |E|)
 * ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
 *   Хранение графа в худшем случае O(|V|^2)
 * */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
let line = 1;

rl.on('line', line => {
    input.push(line);
    if (input.length === Number(input[0])) {
        const list = setList(Number(input[0]));
        console.log(hasCycles(list));
        rl.close();
    }
})

/**
 * Построение списка смежности
 * @param {number} n
 * */
function setList(n) {
    const list = Array.from(new Array(n), () => []);

    for (let i = 0; i < n - 1; i++) {
        const road = readArray(n - i - 1);
        road.forEach((type, j) => {
            if (type === 'R') {
                list[i].push(j + i + 1);
            }

            if (type === 'B') {
                list[j + i + 1].push(i);
            }
        })
    }

    return list;
}
/**
 * Класс узла стэка
 * */
class Node {
    constructor(value = null, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

/**
 * Структура данных Стэк
 * */
class Stack {
    constructor() {
        this.tail = null
        this.size = 0;
    }

    /**
     * Добавление в стэк
     * @param {number} x
     * */
    push(x) {
        const newTail = new Node(x);
        if (this.size === 0) {
            this.tail = newTail;
        }

        if (this.tail) {
            newTail.prev = this.tail;
            this.tail.next = newTail
        }
        this.tail = newTail;

        this.size++;
    }

    /**
     * Извлечение из стэка
     * */
    pop() {
        const x = this.tail.value
        this.tail = this.tail.prev;

        this.size--;
        return x;
    }

    /**
     * Получение размера стэка
     * */
    getSize() {
        return this.size;
    }
}

/**
 * Метод проверяющий наличие циклов в графе
 * @param {[int[]]} list
 * */
function hasCycles(list) {
    const color = Array.from(new Array(list.length), () => 'white');

    for (let i = 0; i < list.length; i++) {
        if (color[i] !== 'white') {
            continue;
        }

        const stack = new Stack();
        stack.push(i);

        while (stack.getSize()) {
            const v = stack.pop();

            if (color[v] === 'white') {
                color[v] = 'gray';
                stack.push(v)

                for (let u of list[v]) {
                    if (color[u] === 'gray') {
                        return 'NO';
                    }

                    if (color[u] === 'white') {
                        stack.push(u);
                    }
                }
            } else if (color[v] === 'gray') {
                color[v] = 'black';
            }
        }
    }

    return 'YES';
}

/**
 * Парсим строки в массив строк
 * */
function readArray(limit) {
    let arr = input[line].split("", limit);
    line++;
    return arr;
}