function Count(str, char) {
  let character = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      character++;
    }
  }

  return character;
}

module.exports = Count;
