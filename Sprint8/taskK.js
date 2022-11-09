/**
 * Алла придумала новый способ сравнивать две строки: чтобы сравнить строки a и b,
 * в них надо оставить только те буквы,
 * которые в английском алфавите стоят на четных позициях.
 * Затем полученные строки сравниваются по обычным правилам.
 * Помогите Алле реализовать новое сравнение строк.
 *
 * Формат ввода
 * На вход подаются строки a и b по одной в строке.
 * Обе строки состоят из маленьких латинских букв,
 * не бывают пустыми и не превосходят 105 символов в длину.
 *
 * Формат вывода
 * Выведите -1, если a < b, 0, если a = b, и 1, если a > b.
 * */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
    input.push(line);
    if (input.length === 2) {
        const str1 = input[0].split("").filter((el) => el.charCodeAt(0) % 2 === 0).join("");
        const str2 = input[1].split("").filter((el) => el.charCodeAt(0) % 2 === 0).join("");
        if (str1 < str2) {
            console.log(-1);
        } else if (str1 > str2) {
            console.log(1);
        } else {
            console.log(0);
        }
        rl.close();
    }
});