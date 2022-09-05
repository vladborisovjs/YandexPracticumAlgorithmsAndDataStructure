// class CNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
function solution(root) {
  return isBalanced(root);
}

function height(root) {
  if (root === null) {
    return 0;
  }
  return Math.max(height(root.left), height(root.right)) + 1;
}

function isBalanced(root) {
  if (root === null) {
    return true;
  }

  let lh = height(root.left);
  let rh = height(root.right);

  return (
    Math.abs(lh - rh) <= 1 && isBalanced(root.left) && isBalanced(root.right)
  );
}
// function test() {
//   var node3 = new CNode(2);
//   var node4 = new CNode(7);
//   var node5 = new CNode(10);
//   console.log(solution(node5));
// }
//
// test();
