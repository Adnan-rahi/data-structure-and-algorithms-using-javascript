// Solution with built-in method

// function reverseString(str) {
//   return str.split(" ").reverse().join(" ");
// }

// Second method

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

module.exports = reverseString;
