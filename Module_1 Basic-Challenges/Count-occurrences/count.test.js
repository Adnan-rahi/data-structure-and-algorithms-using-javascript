const Count = require("./count");

test("Count the occurrences", () => {
  expect(Count('Adnan khan', 'n')).toBe(3);
  expect(Count("Date", "t")).toBe(1);
});
