const eraseDuplicates = require("./remove-duplicate");

test("Remove Duplicate Entries from the given array", () => {
  expect(eraseDuplicates([1, 2, 3, 2, 3, 2, 3])).toEqual([1, 2, 3]);
  expect(eraseDuplicates([true, true, false, true, false])).toEqual([
    true,
    false,
  ]);
});
