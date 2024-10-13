function formatPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join("");

  const preFix = numbers.slice(3, 6).join("");

  const lineCode = numbers.slice(6).join("");

  return `(${areaCode}) ${preFix}-${lineCode}`;
}

//Solution 2

// function formatPhoneNumber(numbers) {
//   const formatted = numbers.join("");

//   return `(${formatted.substring(0, 3)}) ${formatted.substring(
//     3,
//     6
//   )}-${formatted.substring(6)}`;
// }

// Solution 3
// Arrow function with implicit return

// const formatPhoneNumber = (numbers) =>
//   `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers
//     .slice(6)
//     .join("")}`;

module.exports = formatPhoneNumber;
