/*
* Алла пошла на стажировку в студию графического дизайна, где ей дали такое задание:
*  для очень большого числа ориентированных графов преобразовать их список рёбер в список смежности.
*  Чтобы побыстрее решить эту задачу, она решила автоматизировать процесс.

Помогите Алле написать программу,
*  которая по списку рёбер графа будет строить его список смежности.

Формат ввода
В первой строке дано число вершин n (1 ≤ n ≤ 100) и число ребер m (1 ≤ m ≤ n(n-1)).
*  В следующих m строках заданы ребра в виде пар вершин (u,v), если ребро ведет от u к v.

Формат вывода
Выведите информацию о рёбрах, исходящих из каждой вершины.

В строке i надо написать число рёбер, исходящих из вершины i,
*  а затем перечислить вершины, в которые ведут эти рёбра –— в порядке возрастания их номеров.
* */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on('line', line => {
    input.push(line);
    const vertex = Number(input[0].split(' ')[0])
    const maxLen = Number(input[0].split(' ')[1]) + 1;
    if (input.length === maxLen) {
        for (let i = 1; i <= vertex; i++) {
            const edges = input.filter((el, index) => Number(el.split(' ')[0]) === i && index)
            console.log(edges.length, (edges.map((el) => el.split(' ')[1]) || '' + ' ').join(" "))
        }
        rl.close();
    }
})