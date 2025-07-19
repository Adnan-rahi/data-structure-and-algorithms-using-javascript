const longestConsective = require("./index");

test("Longest Consecutive Sequences", () => {
  expect(longestConsective([100, 4, 200, 1, 3, 2])).toBe(4);
  expect(longestConsective([0, 3, 7, 2, 5, 8, 4, 6, 9, 1])).toBe(10);
});
