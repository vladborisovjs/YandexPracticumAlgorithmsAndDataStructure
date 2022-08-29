/**
 * Васе нужно распечатать свой список дел на сегодня. Помогите ему: напишите функцию, которая печатает все его дела. Известно, что дел у Васи не больше 5000.
 Внимание: в этой задаче не нужно считывать входные данные. Нужно написать только функцию, которая принимает на вход голову списка и печатает его элементы.

 * */
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

function solution(node) {
  let result = `${node.value}`;
  getNode(result, node.next);
}

function getNode(result, node) {
  result += `\n${node.value}`;
  console.log(node);
  if (node.next) {
    getNode(result, node.next);
  } else {
    console.log(result);
  }
}

function test() {
  var node3 = new Node('node3');
  var node2 = new Node('node2', node3);
  var node1 = new Node('node1', node2);
  var node0 = new Node('node0', node1);
  solution(node0);
  /*
    Output is:
    node0
    node1
    node2
    node3
    */
}
test();
