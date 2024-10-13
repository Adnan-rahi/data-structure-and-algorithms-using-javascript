const allCharactersAreUnique = require('./unique-char');

const result1 = allCharactersAreUnique('abcdefg')
const result2 = allCharactersAreUnique('abcdefgA')
const result3 = allCharactersAreUnique("programming");

console.log(result1 + '\n', result2+'\n', result3)