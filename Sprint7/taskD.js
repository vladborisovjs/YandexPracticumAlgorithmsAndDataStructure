/**
 * Гоша практикуется в динамическом программировании — он хочет быстро считать числа Фибоначчи.
 * Напомним, что числа Фибоначчи определены как последовательность .
 * Fn, n = 0,1, F0 = F1 = 1, Fn = Fn -1 + Fn-2, n ≥ 2.
 * Помогите Гоше решить эту задачу.
 *
 * Формат ввода
 * В единственной строке дано целое число n (0 ≤ n ≤ 10^6).
 *
 * Формат вывода
 * Вычислите значение Fn по модулю 10^9 + 7 и выведите его.
 * */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', line => {
    const n = Number(line) + 1;
    const dp = new Array(n + 1).fill(0);
    const mod = 10 ** 9 + 7;
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i < n + 1; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
    }
    console.log(dp[n])
    rl.close();
});