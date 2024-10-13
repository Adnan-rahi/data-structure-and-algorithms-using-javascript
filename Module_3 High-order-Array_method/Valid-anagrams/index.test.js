const validAnagrams = require("./index");

test("Check the given strings for valid anagrams", () => {
  expect(validAnagrams('listen', 'silent')).toBe(true);
  expect(validAnagrams('apple', 'banana')).toBe(false)
  expect(validAnagrams('astronomer', 'moonstarer')).toBe(true)
});
