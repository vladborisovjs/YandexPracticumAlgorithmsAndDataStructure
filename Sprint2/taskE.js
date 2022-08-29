/**
 * Вася решил запутать маму —– делать дела в обратном порядке.
 * Список его дел теперь хранится в двусвязном списке.
 * Напишите функцию, которая вернёт список в обратном порядке.
 * */
class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

function solution(node) {
  newNode = node;
  dumb = newNode.next;
  newNode.next = null;
  newNode.prev = dumb;
  while (dumb) {
    dumb.prev = dumb.next;
    dumb.next = newNode;
    newNode = dumb;
    dumb = dumb.prev;
  }
  node = newNode;
  return node;
}

function test() {
  var node3 = new Node('node3');
  var node2 = new Node('node2', node3);
  var node1 = new Node('node1', node2);
  var node0 = new Node('node0', node1);
  node1.prev = node0;
  node2.prev = node1;
  node3.prev = node2;
  var newHead = solution(node0);
  console.log(newHead);
  /*
    result is newHead === node3
    node0.prev === node1
    node1.next === node0
    node1.prev === node2
    node2.next === node1
    node2.prev === node3
    node3.next === node2
    */
}

test();
