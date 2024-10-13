const countVowels = require("./count-vowel");

test("Count the Vowels in given String", () => {
  expect(countVowels("JavaScript")).toBe(3);
  expect(countVowels("Red Apple")).toBe(3);
});
