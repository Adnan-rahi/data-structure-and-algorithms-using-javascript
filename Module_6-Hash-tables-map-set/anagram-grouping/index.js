function anagramsGrouping(words) {
  const anagramGroups = new Map();

  for (const word of words) {
    const sortedchars = word.split("").sort().join("");

    if (anagramGroups.has(sortedchars)) {
      anagramGroups.get(sortedchars).push(word);
    } else {
      anagramGroups.set(sortedchars, [word]);
    }
  }

  return Array.from(anagramGroups.values());
}

module.exports = anagramsGrouping;
