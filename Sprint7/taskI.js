/**
 * Теперь черепашке Кондратине надо узнать не только,
 * сколько цветочков она может собрать, но и как ей построить свой маршрут для этого.
 * Помогите ей!
 *
 * Напомним, что Кондратине надо дойти от левого нижнего до правого верхнего угла,
 * а передвигаться она умеет только вверх и вправо.
 *
 * Формат ввода
 * В первой строке даны размеры поля n и m (через пробел).
 * Оба числа лежат в диапазоне от 1 до 1000. В следующих n строках задано поле.
 * Каждая строка состоит из m символов 0 или 1 и завершается переводом строки.
 * Если в клетке записана единица, то в ней растет цветочек.
 *
 * Формат вывода
 * Выведите в первой строке максимальное количество цветочков,
 * которое сможет собрать Кондратина.
 * Во второй строке выведите маршрут в виде последовательности символов «U» и «R»,
 * где «U» означает передвижение вверх, а «R» – передвижение вправо.
 *
 * Если возможных оптимальных путей несколько, то выведите любой.
 * */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on('line', line => {
    input.push(line);
    const [n, m] = input[0].split(" ").map((el) => Number(el));
    const fields = [];
    const result = [];
    const path = [];
    if (input.length === n + 1) {
        for (let i = 0; i < n; i++) {
            fields.push(input[i + 1].split("").map((el) => Number(el)));
            result.push(new Array(m).fill(-1))
        }

        for (let i = n - 1; i > -1; i--) {
            for (let j = 0; j < m; j++) {
                let s1 = i === n - 1 ? 0 : result[i + 1][j];
                let s2 = j === 0 ? 0 : result[i][j - 1];
                result[i][j] = Math.max(s1, s2) + fields[i][j]
            }
        }

        let k = 0;
        let l = m - 1;

        while (k < n - 1 || l > 0) {
            let s1 = k === n - 1 ? -1 : result[k + 1][l];
            let s2 = l === 0 ? -1 : result[k][l - 1];
            if (s1 > s2) {
                path.push('U');
                if (k !== n - 1) {
                    k++;
                }
            } else {
                path.push('R');
                if (l !== 0) {
                    l--;
                }
            }
        }

        console.log(result[0][m - 1]);
        console.log(path.reverse().join(""));
        rl.close();
    }
})
