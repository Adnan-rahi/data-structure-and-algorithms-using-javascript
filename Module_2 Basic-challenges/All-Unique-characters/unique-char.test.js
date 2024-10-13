const allCharactersAreUnique = require("./unique-char");

test("Unique Characters in a String", () => {
  expect(allCharactersAreUnique("abcdefg")).toBe(true);
  expect(allCharactersAreUnique("abcdefgA")).toBe(true);
  expect(allCharactersAreUnique("programming")).toBe(false);
  expect(allCharactersAreUnique("")).toBe(true);
  expect(allCharactersAreUnique("a")).toBe(true);
  expect(allCharactersAreUnique("abs")).toBe(true);
});
