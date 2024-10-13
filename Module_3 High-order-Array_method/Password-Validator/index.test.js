const passwordValidator = require("./index");

test("Check the password is valid or Invalid", () => {
  expect(passwordValidator("Abcd1234")).toBe(true);
  expect(passwordValidator("1234abcd")).toBe(false);
  expect(passwordValidator("12345678")).toBe(false);
  expect(passwordValidator("1234567")).toBe(false);
  expect(passwordValidator("Adnan1Khan")).toBe(true);
});
