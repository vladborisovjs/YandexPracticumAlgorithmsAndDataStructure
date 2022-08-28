/**
 * 69754313
 *
 * ПРИНЦИП РАБОТЫ
 *  В начале создаем словарь, содержащий все слова из всех документов и их количество
 *  {"слово": {документ: кол-во}}
 *  На основе этого словаря для каждого запроса вычисляем релевантные документы
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 *  Создав словарь всех слов из документов, мы на основе него создаем
 *  Map, где для каждого слова указано кол-во его вхождений в каждый из документов
 *  Далле используем встроенную сортировку, чтобы отсортировать в порядке убывания
 *  по количеству вхождений и выводим не более 5 индексов релевантных документов
 *  для каждого запроса
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 *  n - кол-во документов, m - число запросов
 *  Построение индекса O(n)
 *  Обработка каждого запроса O(m*n*log*n)
 * ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ
 *  Для построение индекса нужно O(n) памяти
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
let docsAmount;
let requestsAmount;
const docsArr = [];
const requestsArr = [];
const dict = {};
const limit = 5;
let result = '';
rl.on('line', (line) => {
  input.push(line);
  docsAmount = Number(input[0]);
  requestsAmount = Number(input[docsAmount + 1]);
  if (input.length === docsAmount + requestsAmount + 2) {
    setArrays();
    createDict(docsArr);
    findRelevantDocs(requestsArr);
    console.log(result);
    rl.close();
  }
});

/**
 * Метод создания словаря
 * @param {array} docs
 */
function createDict(docs) {
  for (let i = 0; i < docs.length; i++) {
    for (let j = 0; j < docs[i].length; j++) {
      const word = docs[i][j];
      if (!dict[word]) {
        dict[word] = { [i]: 0 };
      }
      const wordDict = dict[word];

      if (!wordDict[i]) {
        wordDict[i] = 0;
      }
      wordDict[i] = wordDict[i] + 1;
    }
  }
}

/**
 * Метод вычисляет релевантные документы на основе словаря
 * @param {*} requests
 */
function findRelevantDocs(requests) {
  requests.forEach((phrase) => {
    const wordsSet = new Set(phrase);
    const relevant = {};
    for (let word of wordsSet) {
      if (dict[word]) {
        for (let [key, value] of Object.entries(dict[word])) {
          if (!relevant[key]) {
            relevant[key] = 0;
          }
          relevant[key] = relevant[key] + value;
        }
      }
    }
    getRelevant(relevant);
  });
}

/**
 * Метод выводит самые релевантные индексы документов
 * для каждого запроса
 * @param {*} relevant
 */
function getRelevant(relevant) {
  let sorted = [];
  let count = 0;
  let sequence = '';
  for (let el in relevant) {
    sorted.push([el, relevant[el]]);
  }

  sorted = sorted.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });

  for (let [key, value] of sorted) {
    sequence += `${Number(key) + 1} `;
    count++;
    if (count >= limit) {
      break;
    }
  }
  result += `${sequence}\n`;
}

/**
 * Метод создает коллекции всех документов и всех запросов
 */
function setArrays() {
  for (let i = 1; i < docsAmount + 1; i++) {
    docsArr.push(input[i].split(' '));
  }

  for (let i = docsAmount + 2; i < input.length; i++) {
    requestsArr.push(input[i].split(' '));
  }
}
