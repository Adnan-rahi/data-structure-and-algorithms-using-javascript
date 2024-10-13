function eraseDuplicates(arr) {
  const uniqueArr = [];

  for (i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

module.exports = eraseDuplicates;
