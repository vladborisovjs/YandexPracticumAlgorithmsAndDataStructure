// class CNode {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

function solution(root) {
  return comparator(root, null, null);
}

function comparator(root, l, r) {
  if (root === null) {
    return true;
  }

  if (l !== null && root.value <= l.value) {
    return false;
  }

  if (r !== null && root.value >= r.value) {
    return false;
  }
  return comparator(root.left, l, root) && comparator(root.right, root, r);
}

// function test() {
//   var node1 = new CNode(1, null, null);
//   var node2 = new CNode(4, null, null);
//   var node3 = new CNode(3, node1, node2);
//   var node4 = new CNode(8, null, null);
//   var node5 = new CNode(5, node3, node4);
//   console.log(solution(node5));
//   node4.value = 5;
//   console.log(solution(node5));
// }
// test();
