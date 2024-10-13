const helloWorld = require("./Hello-world");

test('Returning "Hello World!" as a string', () => {
  expect(helloWorld()).toBe("Hello World!");
});
