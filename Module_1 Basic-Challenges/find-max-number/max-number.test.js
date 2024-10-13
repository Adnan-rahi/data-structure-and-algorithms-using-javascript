const maxNumber = require("./max-number");

test("Finding the maximum number in an array", () => {
  expect(maxNumber([1, 5, 3, 9, 2])).toBe(9);
  expect(maxNumber([0, -1, -5, 2])).toBe(2);
  expect(maxNumber([10, 10, 10, 10])).toBe(10);
});