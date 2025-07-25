const Queue = require("./queue");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Using Queue class
function breadthFirstTraversal(root) {
  if (!root) return [];

  const result = [];
  const queue = new Queue();

  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    result.push(current.data);

    if (current.left) {
      queue.enqueue(current.left);
    }

    if (current.right) {
      queue.enqueue(current.right);
    }
  }

  return result;
}

// function breadthFirstTraversal(root) {
//   if (!root) return [];

//   let result = [];
//   let queue = [];

//   queue.push(root);

//   while (queue.length > 0) {
//     let current = queue.shift();
//     result.push(current.data);

//     if (current.left) {
//       queue.push(current.left);
//     }

//     if (current.right) {
//       queue.push(current.right);
//     }
//   }
//   return result;
// }




module.exports = { Node, breadthFirstTraversal };
