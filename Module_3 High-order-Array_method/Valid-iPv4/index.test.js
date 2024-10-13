const ValidIPv4 = require("./index");

test("Check is the IP address is valid", () => {
  expect(ValidIPv4("0.0.0.0")).toBe(true);
  expect(ValidIPv4("1.2.3")).toBe(false);
  expect(ValidIPv4("1.2.3.4.5")).toBe(false);
  expect(ValidIPv4("123.41.34.89")).toBe(true);
});
