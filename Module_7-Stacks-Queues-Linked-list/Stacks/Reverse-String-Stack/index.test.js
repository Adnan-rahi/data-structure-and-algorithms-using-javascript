const reverseStringStack = require("./index");

test("Reversed a String", () => {
  expect(reverseStringStack("Javascript")).toBe("tpircsavaJ");
  expect(reverseStringStack("data structure")).toBe("erutcurts atad");
});
