const permutaions = require("./index");

test("permutaions", () => {
  expect(permutaions("abc")).toEqual([
    "abc",
    "acb",
    "bac",
    "bca",
    "cab",
    "cba",
  ]);
  expect(permutaions("dog")).toEqual([
    "dog",
    "dgo",
    "odg",
    "ogd",
    "gdo",
    "god",
  ]);
  expect(permutaions("")).toEqual([""]);
});
