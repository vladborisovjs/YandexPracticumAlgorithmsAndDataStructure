const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const n = Number(line);
  console.log(
    Math.round(countTrees(2 * n) / (countTrees(n) * countTrees(n + 1)))
  );
  rl.close();
});

function countTrees(n) {
  return n === 0 ? 1 : countTrees(n - 1) * n;
}
