const { Node, maxDepth } = require("./index");

describe("Binary Tree Maximum Depth", () => {
  test("Calculate the maximum depth of binay tree", () => {
    const root = new Node(3);
    const node9 = new Node(9);
    const node20 = new Node(20);
    const node15 = new Node(15);
    const node7 = new Node(7);

    root.left = node9;
    root.right = node20;
    node20.left = node15;
    node20.right = node7;

    expect(maxDepth(root)).toBe(3);
  });

  test("Calculate the maximum depth of binary tree with only left children", () => {
    const root = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);

    root.left = node2;
    node2.left = node3
    node3.left = node4

    expect(maxDepth(root)).toBe(4)
  });
});
