// class CNode {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

function solution(root) {
  return getSum(root, 0);
}

function getSum(node, value) {
  const currentValue = value * 10 + node.value;
  let sum = 0;

  if (node.left !== null) {
    sum += getSum(node.left, currentValue);
  }

  if (node.right !== null) {
    sum += getSum(node.right, currentValue);
  }

  if (sum === 0) {
    return currentValue;
  }

  return sum;
}

// function test() {
//   var node1 = new CNode(2, null, null);
//   var node2 = new CNode(1, null, null);
//   var node3 = new CNode(3, node1, node2);
//   var node4 = new CNode(2, null, null);
//   var node5 = new CNode(1, node4, node3);
//   console.assert(solution(node5) === 275);
// }
