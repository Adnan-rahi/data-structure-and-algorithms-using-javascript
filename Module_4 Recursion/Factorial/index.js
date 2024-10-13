function factorail(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorail(num - 1);
}

module.exports = factorail;
