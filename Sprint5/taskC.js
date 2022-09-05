// class CNode {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

function solution(root) {
  return isAnagram(LMR(root));
}

function LMR(root) {
  let arr = [];
  if (root.left !== null) {
    arr.push(...LMR(root.left));
  }

  arr.push(root.value);

  if (root.right !== null) {
    arr.push(...LMR(root.right));
  }

  return arr;
}

function isAnagram(arr) {
  if (arr.length % 2 === 0) {
    return false;
  }

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// function test() {
//   var node1 = new CNode(3, null, null);
//   var node2 = new CNode(4, null, null);
//   var node3 = new CNode(4, null, null);
//   var node4 = new CNode(3, null, null);
//   var node5 = new CNode(2, node1, node2);
//   var node6 = new CNode(2, node3, node4);
//   var node7 = new CNode(1, node5, node6);
//   console.log(solution(node7));
// }
//
// test();
