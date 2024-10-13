const generateHashtag = require("./index");

const result = generateHashtag("frontend developer");
const result1 = generateHashtag(
  "This course is all about data structure and alghorithms using JavaScript, which is very useful for logic building This course is all about data structure and alghorithms using JavaScript, which is very useful for logic building"
);
console.log(result+'\n', result1);
