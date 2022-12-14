//ID: 69548057
/**
 * Тимофей ищет место, чтобы построить себе дом. Улица, на которой он хочет жить, имеет длину n, то есть состоит из n одинаковых идущих подряд участков.
 * Каждый участок либо пустой, либо на нём уже построен дом.

 Общительный Тимофей не хочет жить далеко от других людей на этой улице.
 Поэтому ему важно для каждого участка знать расстояние до ближайшего пустого участка.
 Если участок пустой, эта величина будет равна нулю — расстояние до самого себя.

 Помогите Тимофею посчитать искомые расстояния. Для этого у вас есть карта улицы.
 Дома в городе Тимофея нумеровались в том порядке, в котором строились, поэтому их номера на карте никак не упорядочены.
 Пустые участки обозначены нулями.

 Формат ввода
 В первой строке дана длина улицы —– n (1 ≤ n ≤ 106).
 В следующей строке записаны n целых неотрицательных чисел — номера домов и обозначения пустых участков на карте (нули).
 Гарантируется, что в последовательности есть хотя бы один ноль. Номера домов (положительные числа) уникальны и не превосходят 109.

 Формат вывода
 Для каждого из участков выведите расстояние до ближайшего нуля. Числа выводите в одну строку, разделяя их пробелами.
 * */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
const strMaxCount = 2;
rl.on('line', (line) => {
  input.push(line);
  if (input.length === strMaxCount) {
    const nums = input[1].split(' ').map((x) => parseInt(x, 10));
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[i] = nums.length;
      }
    }

    for (let i = 1; i < nums.length; i++) {
      nums[i] = nums[i] === 0 ? 0 : nums[i - 1] + 1;
    }

    for (let i = nums.length - 2; i >= 0; i--) {
      nums[i] = nums[i] === 0 ? 0 : Math.min(nums[i + 1] + 1, nums[i]);
    }
    process.stdout.write(nums.join(' ') + '\n');
    rl.close();
  }
});
