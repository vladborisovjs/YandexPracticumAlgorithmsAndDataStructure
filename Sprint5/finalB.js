// 70826414

/**
 * ПРИНЦИП РАБОТЫ
 *  В задаче рассматривается 4 варианта:
 *    у узла нет узлов
 *    у узла есть левый узел
 *    у узла есть правый узел
 *    у узла есть оба потомка
 * Первый случай -  мы просто удаляем узел.
 * Во 2 и 3 мы заменяем удаляемый узел на потомка
 * В 4 мы должны найти в правом поддереве минимальный элемент и переместить его на место удаляемого узла
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 *   Алгоритм корректен, работают все 4 случая при удалении узла из дерева
 *   В первых 3-х мы берем потомка (если он есть, иначе просто удаляем узел) и заменяем им удаляемый узел
 *   Если у нас два потомка - тогда чтобы не нарушить структуру дерева, мы берем и рекурсивно проходим правое поддерево
 *   в поисках минимального элемента. После нахождения элемента заменяем им удаляемый узел. Правое и левое поддеревья становятся
 *   потомками нового узла, тем самым дерево сохраняет свою структуру.
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 *   Поиск удаляемого узла и поиск кранего правого узла в худшем случае O(log(h))
 * ПРОСТРАННСТВЕННАЯ СЛОЖНОСТЬ
 *   O(n) на хранение элементов бинарного дерева
 * */
//
//  class Node {
//     constructor(value, left = null, right = null) {
//         this.value = value;
//         this.left = left;
//         this.right = right;
//     }
// }
/**
 * @param {object} node
 * @param {number} key
 * */
function remove(node, key) {
    if (!node) {
        return node;
    }

    if (key < node.value) {
        node.left = remove(node.left, key);
    } else if(key > node.value) {
        node.right = remove(node.right, key);
    } else {
        if (!node.left) {
            return node.right;
        } else if (!node.right) {
            return node.left;
        }

        const min = minValue(node.right);
        node.value = min.value;
        node.right = remove(node.right, min.value);
    }

    return node;
}
/**
 * @param {object} node
 * */
function minValue(node) {
    let current = node;

    while (current.left) {
        current = current.left
    }

    return current;
}

// function test() {
//     var node1 = new Node(2, null, null);
//     var node2 = new Node(3, node1, null);
//     var node3 = new Node(1, null, node2);
//     var node4 = new Node(6, null, null);
//     var node5 = new Node(8, node4, null);
//     var node6 = new Node(10, node5, null);
//     var node7 = new Node(5, node3, node6);
//     var newHead = remove(node7, 10);
//     console.log(newHead.value === 5);
//     console.log(newHead.right === node5);
//     console.log(newHead.right.value === 8);
// }
//
// test()