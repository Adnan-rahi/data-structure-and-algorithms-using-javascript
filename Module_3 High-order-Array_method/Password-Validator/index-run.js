const passwordValidator = require("./index");

const result = passwordValidator("Abcd1234");
const result1 = passwordValidator("password");

console.log(result+'\n', result1)