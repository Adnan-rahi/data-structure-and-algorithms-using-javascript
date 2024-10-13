function sumOfEvenSquares(numbers) {
  const evenSquare = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, square) => sum + square, 0);

  return evenSquare;
}

module.exports = sumOfEvenSquares;
