const twoSum = require("./index");

describe("Two Sum", () => {
    test('Test 1', () => {
        const nums = [3, 2, 4]
        const target = 6;
        const result = twoSum(nums, target)
        expect(result).toEqual(expect.arrayContaining([1, 2]))
    });

     test("Test 2", () => {
       const nums = [3, 3];
       const target = 6;
       const result = twoSum(nums, target);
       expect(result).toEqual(expect.arrayContaining([0, 1]));
     });
});
