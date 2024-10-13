const sumUpTo = require("./index");

test("Summing up positive integers", () => {
  expect(sumUpTo(5)).toBe(15);
  expect(sumUpTo(10)).toBe(55);
});
