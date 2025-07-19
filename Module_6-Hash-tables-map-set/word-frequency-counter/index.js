function wordFreqCounter(str) {
  const words = str.toLowerCase().split(/\W+/);

  const wordFrequency = new Map();

  for (let word of words) {
    if (word === "") continue;

    if (wordFrequency.has(word)) {
      wordFrequency.set(word, wordFrequency.get(word) + 1);
    } else {
      wordFrequency.set(word, 1);
    }
  }
  return wordFrequency;
}

module.exports = wordFreqCounter;
