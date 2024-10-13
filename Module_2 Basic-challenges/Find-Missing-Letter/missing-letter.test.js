const findMissingLetter = require("./missing-letter");

test("Find singal missing letter in the given array", () => {
  expect(findMissingLetter(["a", "c", "d", "e"])).toBe("b");
  expect(findMissingLetter(["X", "Z"])).toBe("Y");
});
