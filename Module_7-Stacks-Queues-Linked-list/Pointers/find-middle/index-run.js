const findMiddle = require("./index");
const { LinkedList } = require("./linked-list");

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);

console.log(findMiddle(list));
