const nameSet = new Set(["Ali", "Wahab", "Saleem", "Umar", "Zeb"]);

// Adding New Values
nameSet.add("Nouman");
nameSet.add("Amir");

console.log("Adding New data to Set()");
console.log(nameSet);

// Check for Values
console.log("Checking for the specific value");
console.log(nameSet.has("Nouman"));

//Delete entry from the Set()
console.log("Delete value from the Set()");
console.log(nameSet.delete("Zeb"));
console.log(nameSet);

// Get total size of Set()
console.log("Get The total size of the Set()");
console.log(nameSet.size);

// Get all values from the set()
console.log("Get all values from the set()");
console.log(nameSet.values());

// Iterate through set()
console.log("Iterate through Set()");
for (const names of nameSet) {
  console.log(names);
}

// Convert Set() to Array
console.log("Convert Set() to array");
const nameArray = [...nameSet];
console.log(nameArray);

// Clear All the Set() values
console.log("Clear all the Set() values");
nameSet.clear();
console.log(nameSet);
