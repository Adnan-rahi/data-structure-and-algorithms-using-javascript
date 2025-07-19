const phNbrDirectory = require("./index");

const phoneNumbers = [
  "Adnan:123-456-7890",
  "Nouman:098-765-4321",
  "Zaryab:567-748-0393",
];

const result = phNbrDirectory(phoneNumbers);
console.log(result.get("Nouman"));
