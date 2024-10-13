function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

// Shorter method

// const reverseString = (str) =>
//   str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);

//     reverseString('Hello')

module.exports = reverseString;
