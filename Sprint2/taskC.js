/**
 *  Вася размышляет, что ему можно не делать из того списка дел, который он составил.
 *  Но, кажется, все пункты очень важные! Вася решает загадать число и удалить дело, которое идёт под этим номером.
 *  Список дел представлен в виде односвязного списка.
 *  Напишите функцию solution, которая принимает на вход голову списка и номер удаляемого дела и возвращает голову обновлённого списка.
 * */

// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

function solution(node, idx) {
  if (idx === 0) {
    node = node.next;
  } else {
    let previous = getNode(node, idx - 1);
    let nextNode = getNode(node, idx + 1);
    previous.next = nextNode;
  }
  return node;
}

function getNode(node, idx) {
  while (idx > 0) {
    node = node.next;
    idx -= 1;
  }
  return node;
}

// function test() {
//   var node3 = new Node('node3');
//   var node2 = new Node('node2', node3);
//   var node1 = new Node('node1', node2);
//   var node0 = new Node('node0', node1);
//   var newHead = solution(node0, 1);
//   console.log(newHead);
//   // result is node0 -> node2 -> node3
// }

// test();
