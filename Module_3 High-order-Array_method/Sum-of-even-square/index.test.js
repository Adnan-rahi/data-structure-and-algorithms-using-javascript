const sumOfEvenSquares = require("./index");

test("Some of even squares", () => {
  expect(sumOfEvenSquares([-1, 0, 1, 2, 3, 4])).toBe(20);
  expect(sumOfEvenSquares([])).toBe(0)
});
