// class Node {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

function insert(node, key) {
  if (node.value > key) {
    if (node.left) {
      insert(node.left, key);
    } else {
      node.left = new Node(key);
    }
  }
  if (node.value <= key) {
    if (node.right) {
      insert(node.right, key);
    } else {
      node.right = new Node(key);
    }
  }
  return node;
}

// function test() {
//   var node1 = new Node(7, null, null);
//   var node2 = new Node(8, node1, null);
//   var node3 = new Node(7, null, node2);
//   var newHead = insert(node3, 6);
//   console.log(newHead);
//   // console.assert(newHead === node3);
//   // console.assert(newHead.left.value === 6);
// }
//
// test();
