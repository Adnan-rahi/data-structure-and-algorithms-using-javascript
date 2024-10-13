const reverseString = require("./index");

test("Reverse the following string", () => {
  expect(reverseString("Nouman")).toBe("namuoN");
  expect(reverseString("Zaryab")).toBe("bayraZ");
});
