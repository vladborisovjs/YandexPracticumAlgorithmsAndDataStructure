// class CNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
let result = 0;

function solution(node) {
  if (node && node.value > result) {
    result = node.value;
  }
  if (node && node.left) {
    solution(node.left);
  }
  if (node && node.right) {
    solution(node.right);
  }
  return result;
}

// function test() {
//   var node1 = new CNode(21);
//   var node2 = new CNode(15);
//   var node3 = new CNode(3);
//   node3.left = node1;
//   node3.right = node2;
//   var node4 = new CNode(2);
//   node4.left = node3;
//   // console.log(node4);
//   console.log(solution(node4));
// }
//
// test();
