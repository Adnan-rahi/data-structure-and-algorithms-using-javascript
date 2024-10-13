function sumOfArray(arr) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    for (let j = 0; j < arr.length; j++) {
      sum2 += arr[j];
    }
  }

  return sum1 + sum2;
}

const arr1 = [1, 2, 3, 4, 5];

console.time("Sum Of Array 1");
sumOfArray(arr1);
console.timeEnd("Sum Of Array 1");

const arr2 = Array.from({ length: 100000 }, (_, index) => index + 1);
console.time("Sum Of Array 2");
sumOfArray(arr2);
console.timeEnd("Sum Of Array 2");
