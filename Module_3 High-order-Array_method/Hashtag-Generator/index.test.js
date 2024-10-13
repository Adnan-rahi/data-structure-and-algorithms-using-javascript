const generateHashtag = require("./index");

test("Generate hashtag for given string", () => {
  expect(generateHashtag("javascript")).toBe("#Javascript");
  expect(generateHashtag('data structure and alghorithms')).toBe('#DataStructureAndAlghorithms')
});
