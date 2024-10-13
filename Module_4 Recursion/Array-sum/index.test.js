const arraySum = require("./index");

test("Sum of all indexes of array", () => {
  expect(arraySum([1, 2, 3, 4, 5])).toEqual(15)
  expect(arraySum([-1, -3, -4])).toEqual(-8)
  expect(arraySum([])).toEqual(0)
});
