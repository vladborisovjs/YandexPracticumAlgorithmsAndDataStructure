/**
 * У Тимофея было n(0≤n≤32) стажёров. Каждый стажёр хотел быть лучше своих предшественников, поэтому
 i-й стажёр делал столько коммитов, сколько делали два предыдущих стажёра в сумме.
 Два первых стажёра были менее инициативными —– они сделали по одному коммиту.

 Пусть Fi—– число коммитов, сделанных
 i-м стажёром (стажёры нумеруются с нуля). Тогда выполняется следующее:
 F0=F1=1. Для всех i≥2 выполнено Fi=Fi−1+Fi−2.

 Определите, сколько кода напишет следующий стажёр –— найдите Fn.
 Решение должно быть реализовано рекурсивно.

 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const n = parseInt(line, 10);
  const result = fibonacci(n);
  process.stdout.write(result + '\n');
  rl.close();
});

function fibonacci(n) {
  return n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}
