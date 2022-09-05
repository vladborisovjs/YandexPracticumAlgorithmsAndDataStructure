// class CNode {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

function solution(root1, root2) {
  const arr1 = LMR(root1);
  const arr2 = LMR(root2);
  return arr1.join(" ") === arr2.join(" ");
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

// function test() {
//   var node1 = new CNode(1, null, null);
//   var node2 = new CNode(2, null, null);
//   var node3 = new CNode(3, node1, node2);
//
//   var node4 = new CNode(1, null, null);
//   var node5 = new CNode(2, null, null);
//   var node6 = new CNode(3, node4, node5);
//
//   console.log(solution(node3, node6));
// }
//
// test();
