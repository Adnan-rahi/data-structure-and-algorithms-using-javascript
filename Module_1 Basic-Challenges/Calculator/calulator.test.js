const calculator = require("./calculator");

test("Calculatons", () => {
  expect(calculator(5, 5, "+")).toBe(10);
});
