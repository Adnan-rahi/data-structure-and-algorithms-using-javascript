function countVowels(str) {
  const formattedStr = str.toLowerCase();

  let count = 0;

  for (i = 0; i < formattedStr.length; i++) {
    let char = formattedStr[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;
