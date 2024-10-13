const formatPhoneNumber = require("./index");

test("Format phone Number", () => {
  expect(formatPhoneNumber([9, 9, 9, 9, 9, 9, 9, 9, 9, 9])).toBe('(999) 999-9999');
});
