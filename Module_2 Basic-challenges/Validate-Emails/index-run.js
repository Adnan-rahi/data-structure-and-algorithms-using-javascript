const validateEmail = require("./index");

const result1 = validateEmail("xyzemailcom");
const result2 = validateEmail("abc@gmail.com");

console.log(result1 + "\n", result2);
