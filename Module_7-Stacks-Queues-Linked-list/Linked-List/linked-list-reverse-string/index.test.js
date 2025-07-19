const linkedlistReverseString = require("./index");

test("Reversed the string with the help of linkedlist", () => {
  expect(linkedlistReverseString("Adnan")).toBe("nandA");
  expect(linkedlistReverseString("Khan")).toBe("nahK");
});
