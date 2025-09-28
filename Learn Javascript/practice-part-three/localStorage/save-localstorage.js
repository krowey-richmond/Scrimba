// ------------------------------
// Save a simple string to localStorage
// ------------------------------
let person = "Richmond";

// setItem(key, value) → saves data (only as strings)
localStorage.setItem("myname", person); 
console.log(localStorage.getItem("myname")); // read → "Richmond"

// removeItem(key) → deletes specific stored item
localStorage.removeItem("myname");

// ------------------------------
// Save an array into localStorage
// ------------------------------
let arr = ["Richmond", "Master", "Coder"];

// localStorage cannot store arrays/objects directly → must convert to JSON
localStorage.setItem("names", JSON.stringify(arr));

// Retrieve and parse back into array
let storedArr = JSON.parse(localStorage.getItem("names"));
console.log(storedArr[1]); // "Master"

// ------------------------------
// Save an object into localStorage
// ------------------------------
let user = { name: "Richmond", age: 24 };

// Store as JSON string
localStorage.setItem("user", JSON.stringify(user));

// Retrieve and convert back into object
let storedUser = JSON.parse(localStorage.getItem("user"));

// Log object properties
console.log(storedUser.name); // "Richmond"
console.log(storedUser.age);  // 24
