const getSum = require("./sum");

test("Calculate the sum of two numbers", () => {
  const num1 = 3;
  const num2 = 2;

  expect(getSum(num1, num2)).toBe(5);
});
