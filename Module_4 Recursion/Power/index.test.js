const power = require("./index");

test("Calculate the power of base to exponent", () => {
  expect(power(2, 2)).toEqual(4);
  expect(power(3, 3)).toEqual(27);
});
