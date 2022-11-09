// 73974920

/**
 * ПРИНЦИП РАБОТЫ
 *   1 Создаем префиксное дерево на основе слов,
 *   а в терминальные узлы будем записывать длину слова
 *   2 Создаем булев массив, в dp[0] = true - базовый случай
 *   3 Далле проходим по дереву и при нахождении терминального узла обновляем
 *   по индексу элемент массива dp[i] = true
 *   4 Ответ будет находиться в последнем элементе массива
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 *   После создание дерева и вспомогательного массива, для каждого индекса будем проходить по
 *   префиксному дереву. Когда мы сталкиваемся с терминальным узлом записываем true, иначе оставляем false.
 *   В итоге произойдет сравнение всех подстрок строки шпаргалки с входными словами,
 *   расположенными в префиксном дереве.
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 *   O(L) - построение дерева, L - суммарная длина слов во множестве
 *   O(N * M) - функция поиска, где N — длина текста,
 *   M = max(Mi) - длина самого длинного из искомых шаблонов.
 *   T * O(L) + O(N * M), T - кол-во допустимых слов
 * ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
 *   O(L) - построение дерева, L - суммарная длина слов во множестве
 *   O(n) - булев массив, где n - длина текста
 * */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    input.push(line);
    if (input.length > 1 && input.length === Number(input[1]) + 2) {
        const text = input[0];
        const words = [];
        for (let i = 2; i < input.length; i++) {
            words.push(input[i]);
        }
        console.log(cheatSheet(text, words) ? 'YES' : 'NO');
        rl.close();
    }
});
/**
 * Класс узела Бора
 * */
class TrieNode {
    constructor(value) {
        this.value = value;
        this.next = {};
        this.terminal = false;
    }
}

/**
 * Класс Бора
 * */
class Trie {
    constructor(words) {
        this.words = words;
    }
    /**
     * Метод для создания Бора
     * */
    create() {
        const root = new TrieNode(null);
        for (let word of this.words) {
            let node = root;
            for (let i = 0; i < word.length; i++) {
                node.next[word[i]] = node.next.hasOwnProperty(word[i]) ?
                    node.next[word[i]] : new TrieNode(node.next[word[i]])
                node = node.next[word[i]]
            }
            node.terminal = word.length;
        }
        return root;
    }
}

/**
 *  Метод для проверки разбиения текста
 *  @param {string} text
 *  @param {string[]} words
 * */
function cheatSheet(text, words) {
    let root = new Trie(words).create();
    const dp = [true, ...new Array(text.length).fill(false)];
    for (let i = 0; i < text.length; i++) {
        let node = root;
        if (dp[i]) {
            for (let j = i; j < text.length + 1; j++) {
                if (node.terminal) {
                    dp[j] = true;
                }

                if (j === text.length || (node.next.hasOwnProperty(text[j]) ?
                    !node.next[text[j]] : true)) {
                    break;
                }

                node = node.next[text[j]]
            }
        }
    }
    return dp[dp.length - 1];
}