// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

function solution(node, elem) {
  let count = -1;
  let idx = getInd(node, elem, count);
  return idx;
}

function getInd(node, elem, count) {
  count += 1;
  if (!node) {
    return -1;
  }
  if (node && node.value === elem) {
    return count;
  } else {
    return getInd(node.next, elem, count);
  }
}

// function test() {
//   var node3 = new Node('node3');
//   var node2 = new Node('node2', node3);
//   var node1 = new Node('node1', node2);
//   var node0 = new Node('node0', node1);
//   var idx = solution(node0, 'node23');
//   console.log(idx);
//   // result is idx === 2
// }

// test();
