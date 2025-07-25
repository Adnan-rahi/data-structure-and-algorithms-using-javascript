const Stack = require("./stack");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function depthFirstTraversal(root) {
  if (!root) return [];

  let result = [];
  let stack = [];

  stack.push(root);

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.data);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return result;
}

// Using Stack Class

// function depthFirstTraversal(root) {
//   if (!root) return [];

//   let stack = new Stack();
//   let result = [];

//   stack.push(root);

//   while (!stack.isEmpty()) {
//     const current = stack.pop();
//     result.push(current.data);

//     if (current.right) {
//       stack.push(current.right);
//     }

//     if (current.left) {
//       stack.push(current.left);
//     }
//   }

//   return result;
// }

module.exports = { Node, depthFirstTraversal };
