const ValidIPv4 = require('./index')

const result1 = ValidIPv4("192.168.64.21");
const result2 = ValidIPv4("0.0.0.0.0");

console.log(result1, result2);