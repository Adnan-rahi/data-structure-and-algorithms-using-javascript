const wordFreqCounter = require("./index");

describe("WordFrequencyCounter", () => {
  it("Should count word frequency correctly", () => {
    const input =
      "The quick brown fox jumps over the lazy dog. The dog barks, and the fox runs away.";
    const expectedOutput = new Map([
      ["the", 4],
      ["quick", 1],
      ["brown", 1],
      ["fox", 2],
      ["jumps", 1],
      ["over", 1],
      ["lazy", 1],
      ["dog", 2],
      ["barks", 1],
      ["and", 1],
      ["runs", 1],
      ["away", 1],
    ]);
    const result = wordFreqCounter(input);
    expect(result).toEqual(expectedOutput);
  });

  it("Should handle empty input", () => {
    const input = "";
    const expectedOutput = new Map();

    const result = wordFreqCounter(input);
    expect(result).toEqual(expectedOutput);
  });

  it("Should handle input with singal word", () => {
    const input = "Adnan";
    const expectedOutput = new Map([["adnan", 1]]);

    const result = wordFreqCounter(input)
    expect(result).toEqual(expectedOutput)
  });
});
