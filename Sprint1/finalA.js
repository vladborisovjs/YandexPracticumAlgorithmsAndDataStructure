//ID: 69548057
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
