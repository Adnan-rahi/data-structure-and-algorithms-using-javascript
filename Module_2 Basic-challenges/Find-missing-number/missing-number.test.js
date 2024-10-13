const findMissingNumber = require("./missing-number");

test("Find a Singal missing number in array", () => {
  expect(findMissingNumber([1, 4, 3, 5])).toBe(2);
  expect(findMissingNumber([2, 8, 6, 7, 5, 4, 3])).toBe(1);
});


