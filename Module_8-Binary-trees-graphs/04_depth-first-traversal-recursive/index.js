class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

function depthFirstTraversalRecursive(root) {
  if (root === null) return [];
  const result = [];

  function traverse(node) {
    if (node !== null) {
      result.push(node.data);

      traverse(node.left);

      traverse(node.right);
    }
  }

  traverse(root);
  return result;
}

module.exports = { Node, depthFirstTraversalRecursive };
