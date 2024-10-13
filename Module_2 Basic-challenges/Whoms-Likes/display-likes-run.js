const displayLikes = require("./display-likes");

const result1 = displayLikes([]);
const result2 = displayLikes(["Ahsan"]);
const result3 = displayLikes(["Ahsan", "Hamza"]);
const result4 = displayLikes(["Ahsan", "Hamza", "Furqan", "Wajid"]);
const result5 = displayLikes(["Ahsan", "Hamza", "Furqan", "Wajid", "Danish"]);

console.log(result1, '\n', result2, '\n', result3, '\n', result4, '\n', result5 );
