const Stack = require("./index");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  afterEach(() => {
    stack = null;
  });

  test("Push fn should add value to the stack", () => {
    stack.push(1);
    expect(stack.peek()).toBe(undefined);
  });

  test("Pop should remove and return the top element from the stack", () => {
    stack.push(1);
    stack.push(2);
    const poppedElement = stack.pop();
    expect(poppedElement).toBe(2);
    expect(stack.peek()).toBe(undefined);
  });

   test("peek should return the top element without removing it", () => {
     stack.push(1);
     stack.push(2);
     expect(stack.peek()).toBe(undefined);
     expect(stack.pop()).toBe(2);
     expect(stack.peek()).toBe(undefined);
   });

   test("isEmpty should return true if the stack is empty", () => {
     expect(stack.isEmpty()).toBe(true);
     stack.push(1);
     expect(stack.isEmpty()).toBe(false);
     stack.pop();
     expect(stack.isEmpty()).toBe(true);
   });
   

   test("isFull should return true if the stack is full", () => {
     expect(stack.isFull()).toBe(false);
     for (let i = 0; i < stack.maxSize; i++) {
       stack.push(i);
     }
     expect(stack.isFull()).toBe(false);
   });
});
