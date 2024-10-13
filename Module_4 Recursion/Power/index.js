// NO Resursions
// function power(base, exponent) {
//   let result = 1;

//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }

//   return result;
// }

// Recursion 

function power(base, exponent) {
    if(exponent === 0){
        return 1
    } else {
        return base * power(base, exponent - 1)
    }
}

module.exports = power;
