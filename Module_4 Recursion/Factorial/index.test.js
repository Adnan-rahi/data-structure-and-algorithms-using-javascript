const factorail = require("./index");

test("Factorial", () => {
  expect(factorail(0)).toBe(1);
  expect(factorail(5)).toBe(120);
  expect(factorail(10)).toBe(3628800);
});
