class Stack {
  constructor() {
    this.max = 100;
    this.stack = [];
    this.top = -1;
  }

  // Add an element to the top of the stack

  push(value) {
    if (this.isFull()) {
      return false;
    }

    this.top++;
    this.stack[this.top] = value;
    return true;
  }

  // Remove the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    this.top--;
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.stack[this.pop];
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return this.top === this.maxSize - 1;
  }
}

module.exports = Stack;
