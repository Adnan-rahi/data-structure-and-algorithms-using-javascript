const reversedStringWithQueue = require("./index");

test("Reversed String with queue method", () => {
  expect(reversedStringWithQueue("12345")).toBe("54321");
  expect(reversedStringWithQueue("Pakistan")).toBe("natsikaP");
});
