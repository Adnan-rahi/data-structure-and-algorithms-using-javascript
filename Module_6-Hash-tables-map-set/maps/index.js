const nameMap = new Map([
  [1, "Adnan"],
  [2, "Nouman"],
  [3, "Xaryab"],
]);

const annonymous = () => {};
const obj1 = {};

const map2 = new Map([
  ["name", "Adnan"],
  [1, "one"],
  [true, "Yes true"],
  [null, "null"],
  [annonymous, "empty function"],
  [obj1, "empty object"],
]);

// Getting Values
console.log("Geting values from the object");
console.log(nameMap.get(1));
console.log(map2.get(annonymous));
console.log(map2.get(obj1));

// Setting values
console.log("Setting a new value to the object");
nameMap.set(4, "Abbas");
nameMap.set(5, "Umar");
console.log(nameMap);

// Checking values
console.log("Check the value exists in the object");
console.log(nameMap.has(1));
console.log(nameMap.has(6));

// Delete values
console.log("Delete value from the object");
nameMap.delete(1);
console.log(nameMap.has(1));

// Get size of the object
console.log("Check how much values in the object");
console.log(nameMap.size);

// (For of loop) iterating

console.log("iterating through the key and value of the object");
for (let [key, value] of nameMap) {
  console.log(key, value);
}

// using forEach()
console.log("Using forEach method");
nameMap.forEach((key, value) => {
  console.log(key, value);
});

// Looping keys and values
console.log("Looping keys and values");
console.log(nameMap.keys());
console.log(nameMap.values());

// clear the Object
nameMap.clear();
console.log("Clear the Object");
console.log("Now size of the object is ", nameMap.size);
