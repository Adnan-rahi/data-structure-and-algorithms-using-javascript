function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(arr[i], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];

        arr[j] = arr[j + 1];

        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// // Solution 2
// function bubbleSort(arr) {
//   // Create a variable to track if any swaps have been made
//   let swapped = false;

//   // Loop until no swaps have been made
//   while (!swapped) {
//     // Set swapped to true
//     swapped = true;

//     // Loop through the array
//     for (let i = 0; i < arr.length; i++) {
//       // Check if the current element is greater than the next element
//       if (arr[i] > arr[i + 1]) {
//         // Swap the elements just like we did in solution 1
//         const temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         // Set swapped to false
//         swapped = false;
//       }
//     }
//   }

//   return arr;
// }

module.exports = bubbleSort;
