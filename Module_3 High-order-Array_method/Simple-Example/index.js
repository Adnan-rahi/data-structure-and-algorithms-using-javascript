const numbers = [1, 2, 3, 4, 5, 6];

// Array map() method.

const doubleNumbers = numbers.map((num) => num * 2);

// console.log(doubleNumbers);

// ________________________________________________________________________________________

// Array filter() method

const evenNumbers = numbers.filter((num) => num % 2 === 0);

// console.log(evenNumbers);

// ________________________________________________________________________________________

// Array reduce() method

const sum = numbers.reduce((accmulate, currentValue) => accmulate + currentValue, 0);

// console.log(sum);

// ___________________________________________________________________________________________


// Array forEach() method

    // numbers.forEach((num) => console.log(num))

// ______________________________________________________________________________________________


// Array find() method

const findNumbers = numbers.find((num) => num > 4);

// console.log(findNumbers);


// _________________________________________________________________________________________________

// Array some() method

const hasEvenNumber = numbers.some((num) => num > 5);

// console.log(hasEvenNumber);

// ____________________________________________________________________________

// Array every() method

const everyNumber = numbers.every((num) => num < 0)

console.log(everyNumber)
