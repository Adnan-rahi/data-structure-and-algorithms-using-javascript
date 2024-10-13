function RangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  const numbers = RangeOfNumbers(startNum, endNum - 1);

  numbers.push(endNum);

  return numbers;
}

module.exports = RangeOfNumbers;
