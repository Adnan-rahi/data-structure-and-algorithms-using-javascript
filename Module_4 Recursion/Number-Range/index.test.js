const RangeOfNumbers = require("./index");

test("Calculating the range of numbers", () => {
  expect(RangeOfNumbers(3, 8)).toEqual([3, 4, 5, 6, 7, 8]);
  expect(RangeOfNumbers(5, 5)).toEqual([5]);
});
