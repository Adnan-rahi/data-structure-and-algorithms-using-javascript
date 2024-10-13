const maxSubarraySumQuad = require("./index");

test("Finding maximum subarray sum using O(n^2) solution", () => {
  const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
  const k1 = 3;
  expect(maxSubarraySumQuad(arr1, k1)).toBe(24);

  const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
  const k2 = 4;
  expect(maxSubarraySumQuad(arr2, k2)).toBe(0);
});
