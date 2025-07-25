const { LinkedList } = require("./linked-list");

function linkedlistReverseString(str) {
  const list = new LinkedList();

  for (let i = str.length - 1; i >= 0; i--) {
    list.add(str[i]);
  }

  let reversedString = "";
  let current = list.head;
  while (current !== null) {
    reversedString += current.data;

    current = current.next;
  }

  return reversedString;
}

module.exports = linkedlistReverseString;
