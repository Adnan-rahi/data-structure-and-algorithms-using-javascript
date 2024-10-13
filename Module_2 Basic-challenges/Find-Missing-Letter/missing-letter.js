function findMissingLetter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const startIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + 1];
    }
  }

  return "";
}

// Solution 2
// function findMissingLetter(arr) {
//   // Find the char code of the first letter in the array
//   let start = arr[0].charCodeAt(0);
//   // Loop through the array
//   for (let i = 1; i < arr.length; i++) {
//     // Find the char code of the current letter in the array
//     const current = arr[i].charCodeAt(0);
//     // If the difference between the current char code and the start char code is greater than 1, return the letter that is missing
//     if (current - start > 1) {
//       // Convert the char code to a letter
//       return String.fromCharCode(start + 1);
//     }
//     // Update the start char code
//     start = current;
//   }
//   // If no letter is missing, return an empty string
//   return '';
// }

module.exports = findMissingLetter;
