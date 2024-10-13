const highestScoringWord = require("./index");

test("Highest Scoring Word in the given string", () => {
  expect(highestScoringWord("what time are we climbing up the volcano")).toBe(
    "volcano"
  );
});
