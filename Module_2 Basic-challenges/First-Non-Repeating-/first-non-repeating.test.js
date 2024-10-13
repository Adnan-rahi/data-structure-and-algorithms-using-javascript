const firstNonRepeatingCharacter = require("./first-non-repeating");

test("Find First non repeating Character in the given arrays", () => {
  expect(firstNonRepeatingCharacter("aabccdeff")).toBe("b");
  expect(firstNonRepeatingCharacter('')).toBe(null)
  expect(firstNonRepeatingCharacter('hello world')).toBe('h')
});
