const isPalindrome = require("./palindrome");

test("Checcked for Palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("Hello")).toBe(false);
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
    expect(isPalindrome("12321")).toBe(true);
});
