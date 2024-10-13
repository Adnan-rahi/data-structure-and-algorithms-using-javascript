const reverseString = require("./reverse-string");

test("Reverse the given string", () => {
  expect(reverseString("world")).toBe("dlrow");
});
