const Queue = require("./queue");

function reversedStringWithQueue(str) {
  const queue = new Queue();

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  let reversedString = "";

  while (!queue.isEmpty()) {
    reversedString += queue.dequeue();
  }

  return reversedString;
}

module.exports = reversedStringWithQueue;
