// Declare variables for arithmetic operations
var a;
var b;

// Initialize variables
a = 3;
b = 5;

// Log the sum of a and b
console.log(a + b);

// Initialize variables with new values
var a = 5;
var b = 10;
var c = "I am a";

// Modify and log the variables
a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a);
console.log(b);
console.log(c);

// Create a string with double quotes inside
var myStr = 'I am a "double quoted" string inside "double quotes".';
console.log(myStr);

// Concatenate strings
var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

// Append to a string using +=
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr);

// Concatenate a string with a variable
var myName = "Richmond";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);

// Append a string with a variable
var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

// Find the length of a string
var lastNameLength = 0;
var lastName = "Krowey";

// Assign the length of lastName to lastNameLength
lastNameLength = lastName.length;
console.log(lastNameLength);

// Get the first letter of a string
var firstLetterOfLastName = "";
var lastName = "Krowey";

// Assign the first letter of lastName to firstLetterOfLastName
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

// Get the last letter of a string
var lastName = "Krowey";

// Assign the last letter of lastName to lastLetterOfLastName
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

/**
 * Returns a string created by filling in the blanks of a sentence with the provided parameters.
 * @param {string} myNoun - The noun to use in the sentence.
 * @param {string} myAdjective - The adjective to use in the sentence.
 * @param {string} myVerb - The verb to use in the sentence.
 * @param {string} myAdverb - The adverb to use in the sentence.
 * @returns {string} - The completed sentence.
 */
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Create a result variable and assign it a string
  // The string should include the four parameters
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
  // Your code above this line
  return result;
}

// Change the words here to test your function
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Arrays

// Declare an array with numbers and a string
var myArray = [1, 2, "three"];
console.log(myArray); // Output: [1, 2, "three"]

// Declare a nested array (an array of arrays)
var ourArray = [
  ["the universe", 42],
  ["everything", 101010],
];
console.log(ourArray); // Output: [["the universe", 42], ["everything", 101010]]

// Reassign ourArray to a new array of numbers
var ourArray = [50, 60, 70];
console.log(ourArray[0]); // logs the first element: 50

// Declare an array and modify its first element
var myArray = [18, 64, 99];

// Only change code below this line.
myArray[0] = 45; // Change the first element from 18 to 45
console.log(myArray); // Output: [45, 64, 99]

// Accessing elements in a nested array
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

// Only change code below this line.
var myData = myArray[3][0]; // Access the first element of the fourth sub-array: [10,11,12]
console.log(myData); // Output: [10, 11, 12]

// Using push() to add elements to the end of an array
var myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line.
myArray.push(["dog", 3]); // Add ["dog", 3] to the end
console.log(myArray); // Output: [["John", 23], ["cat", 2], ["dog", 3]]

// Using push() to add multiple elements to the end of an array
var ourArray = [24, 5, 2, 54];
var myData = ourArray.push(3, "dog"); // Adds 3 and "dog" to the end
console.log(ourArray); // Output: [24, 5, 2, 54, 3, "dog"]

// Using pop() to remove the last element from an array
var ourArray = [
  ["the universe", 42],
  ["everything", 101010],
];
var myData = ourArray.pop(); // Removes and returns the last element
console.log(ourArray); // Output: [["the universe", 42]]

// Using shift() to remove the first element from an array
var ourArray = [
  ["the universe", 42],
  ["everything", 101010],
];
var myData = ourArray.shift(); // Removes and returns the first element
console.log(ourArray); // Output: [["everything", 101010]]

// Using unshift() to add an element to the beginning of an array
var ourArray = [
  ["the universe", 42],
  ["everything", 101010],
];
var myData = ourArray.unshift(["a", 12]); // Adds ["a", 12] to the start
console.log(ourArray); // Output: [["a", 12], ["the universe", 42], ["everything", 101010]]

var myList = [
  ["cereal", 3],
  ["milk", 2],
  ["bananas", 3],
  ["juice", 2],
  ["eggs", 12],
];

// Declare a function reusableFunction that logs "Hi World" to the console
function reusableFunction() {
  // Log a message to the console
  console.log("Hi World");
}

// Call the reusableFunction to display the message
reusableFunction();

// Declare a function that takes two arguments and logs their sum
function functionWithArgs(a, b) {
  // Log the sum of a and b
  console.log(a + b);
}

// Call functionWithArgs with 10 and 5 as arguments
functionWithArgs(10, 5);

// Demonstrate local scope by declaring a variable inside a function
function myLocalScope() {
  var myVar = 5; // myVar is only accessible inside this function
  console.log(myVar); // Logs 5
}
myLocalScope();

// Declare a global variable
var outerWear = "T-Shirt";

// Function demonstrating variable shadowing with local scope
function myOutfit() {
  var outerWear = "sweater"; // Local variable shadows the global one
  return outerWear; // Returns "sweater"
}

// Log the result of myOutfit and the global outerWear variable
console.log(myOutfit()); // Logs "sweater"
console.log(outerWear); // Logs "T-Shirt"

// Function that multiplies its argument by 5 and returns the result
function timesFive(num) {
  return num * 5;
}
// Call timesFive with 5 and assign the result to timesFive variable
timesFive = timesFive(5);

// Function that adds an item to the end of an array and removes the first element
function nextInLine(arr, item) {
  // Add item to the end of the array
  arr.push(item);
  // Remove and return the first element of the array
  return arr.shift();
}

// Example array for testing nextInLine
var testArr = [1, 2, 3, 4, 5];

// Log the array before and after calling nextInLine
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Logs the removed element
console.log("After: " + JSON.stringify(testArr));

// Function that returns "Yes, that was true" if input is truthy, otherwise "No, that was false"
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

console.log(trueOrFalse(true)); // Output: Yes, that was true

// Function that checks if the value is equal to 12 using loose equality (==)
function testEqual(val) {
  if (val == 12) {
    // Loose equality allows type coercion
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10)); // Output: Not Equal

// Function that checks if two values are strictly equal (===)
function compareEquality(a, b) {
  if (a === b) {
    // Strict equality, no type coercion
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10")); // Output: Not Equal

// Function that checks if the value is strictly not equal to 17
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Strict inequality, no type coercion
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(17)); // Output: Equal

// Function that checks if the value is greater than 100, greater than 10, or 10 or under
function testGreaterThan(val) {
  if (val > 100) {
    // Checks if value is over 100
    return "Over 100";
  }
  if (val > 10) {
    // Checks if value is over 10 but not over 100
    return "Over 10";
  }
  return "10 or Under"; // Value is 10 or less
}

console.log(testGreaterThan(10)); // Output: 10 or Under

// Function that checks if value is between 25 and 50 (inclusive) using logical AND
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    // Checks if value is in the range [25, 50]
    return "Yes";
  }
  return "No";
}

console.log(testLogicalAnd(10)); // Output: No

// Function that checks if value is outside the range 10 to 20 using logical OR
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    // True if value is less than 10 or greater than 20
    return "Outside";
  }
  return "Inside"; // Value is between 10 and 20 (inclusive)
}

console.log(testLogicalOr(15)); // Output: Inside
// Function demonstrating if...else statement
function testElse(val) {
  var result = "";
  // Check if the value is greater than 5
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    // If not, value is 5 or smaller
    result = "5 or Smaller";
  }
  return result;
}

// Test the testElse function with value 4
console.log(testElse(4));

// Function demonstrating if...else if...else statement
function testElseIf(val) {
  // Check if value is greater than 10
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    // Check if value is less than 5
    return "Smaller than 5";
  } else {
    // Value is between 5 and 10 (inclusive)
    return "Between 5 and 10";
  }
}

// Test the testElseIf function with value 7
console.log(testElseIf(7));

// Function that returns a size description based on the input number
function testSize(num) {
  // Check for different size ranges and return corresponding string
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

// Test the testSize function with value 19
console.log(testSize(19));

// Array of golf score names for different outcomes
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// Function that returns a golf score name based on par and strokes
function golfScore(par, strokes) {
  // Check for each golf scoring condition and return the corresponding name
  if (strokes == 1) {
    return names[0]; // Hole-in-one
  } else if (strokes <= par - 2) {
    return names[1]; // Eagle
  } else if (strokes == par - 1) {
    return names[2]; // Birdie
  } else if (strokes == par) {
    return names[3]; // Par
  } else if (strokes == par + 1) {
    return names[4]; // Bogey
  } else if (strokes == par + 2) {
    return names[5]; // Double Bogey
  } else if (strokes == par + 3) {
    // Fixed comparison operator
    return names[6]; // Go Home!
  }
}

// Test the golfScore function with par 4 and strokes 4
console.log(golfScore(4, 4));

// Function demonstrating switch statement with numbers
function caseInSwitch(val) {
  var answer = "";
  // Use switch to assign a string based on the value of val
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

// Test the caseInSwitch function with value 1
console.log(caseInSwitch(1));

// Function demonstrating switch statement with strings and default case
function switchOfStuff(val) {
  var answer = "";
  // Use switch to assign a string based on the value of val, with a default case
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

// Test the switchOfStuff function with value "gfc"
console.log(switchOfStuff("gfc"));

// Function demonstrating grouped cases in switch statement
function sequentialSizes(val) {
  var answer = "";
  // Group cases to assign "Low", "Mid", or "High" based on value
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

// Test the sequentialSizes function with value 6
console.log(sequentialSizes(6));

// Variable to keep track of card count for card counting system
var count = 0;

// Function that implements a simple card counting system
function cc(card) {
  // Adjust count based on the card value
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  // Decide whether to "Bet" or "Hold" based on count
  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }

  // Return the count and action as a string
  return count + " " + holdbet;
}

// Call cc function with different cards to update count and log the result
cc(2);
cc("K");
cc(10);
cc("K");
cc("A");
console.log(cc(4));
// Define an object representing a dog with properties
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

// Define a user object with various properties, including spaces in some keys
var user = {
  name: "John",
  age: 30,
  race: "human",
  "is Admin": true,
  "account balance": 3087.54,
};

// Access object properties using dot and bracket notation
var username = user.name; // Access 'name' property using dot notation
var userAge = user.age; // Access 'age' property using dot notation
var isAdmin = user["is Admin"]; // Access 'is Admin' property using bracket notation
var userBalance = user["account balance"]; // Access 'account balance' property using bracket notation
var race = user.race; // Access 'race' property using dot notation

console.log(username); // "John"
console.log(userAge); // 30
console.log(race); // "human"
console.log(isAdmin); // true
console.log(userBalance); // 3087.54

// Update the user's account balance by adding 1000
user["account balance"] += 1000; // add 1000 to the balance

console.log(user["account balance"]); // 4087.54

// Add a new property 'password' to the user object
user.password = "123456";
console.log(username);
console.log(userAge);
console.log(isAdmin);
console.log(user["account balance"]);
console.log(user.password); // 123456

// Delete the 'race' property from the user object
delete user.race;
console.log(user.race); // undefined

// Define an object with several properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};

// Function to check if a property exists in myObj and return its value or "Not Found"
function checkObj(checkProp) {
  // Check if myObj has the property checkProp
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

// Test the checkObj function with a property that doesn't exist
console.log(checkObj("hello"));

// Define a nested object representing storage in a car
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

// Access a deeply nested property using bracket notation
var gloveBoxContents = myStorage.car.inside["glove box"]; // Get the contents of the glove box

console.log(gloveBoxContents);

// Define an array of objects, each with a type and a list of items
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

// Access the second item in the list of the second object (trees)
var secondTree = myPlants[1].list[1];

console.log(secondTree);

// Setup a collection object representing a music album collection
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};
// Make a deep copy of the collection for testing purposes
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Function to update records in the collection object
function updateRecords(id, prop, value) {
  // If value is an empty string, delete the property
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    // If the property is "tracks", ensure it exists as an array and add the value
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    // Otherwise, set the property to the given value
    collection[id][prop] = value;
  }

  return collection;
}

// Test the updateRecords function by adding a track and updating an artist
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));
// Create an empty array to store numbers
var myArray = [];

// Initialize a counter variable
var i = 0;
// Use a while loop to add numbers 0 through 4 to myArray
while (i < 5) {
  myArray.push(i);
  i++;
}

console.log(myArray); // Output: [0, 1, 2, 3, 4]

// Create an empty array to store numbers
var myArray = [];

// Use a for loop to add numbers 1 through 5 to myArray
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

console.log(myArray); // Output: [1, 2, 3, 4, 5]

// Setup for do...while loop example
var myArray = [];
var i = 10;
// Use a do...while loop to add the value of i to myArray at least once
do {
  myArray.push(i);
  i++;
} while (i < 5);
console.log(i, myArray); // Output: 11 [10]

// Setup: Array of contact objects with various properties
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

/**
 * Looks up a contact by first name and returns the requested property.
 * If the property does not exist, returns "No such property".
 * If the contact does not exist, returns "No such contact".
 * @param {string} name - The first name of the contact to look up.
 * @param {string} prop - The property to retrieve from the contact.
 * @returns {*} - The value of the property, or an error message.
 */
function lookUpProfile(name, prop) {
  // Loop through each contact in the contacts array
  for (var i = 0; i < contacts.length; i++) {
    // Check if the current contact's firstName matches the provided name
    if (contacts[i].firstName === name) {
      // Return the property value if it exists, otherwise return "No such property"
      return contacts[i][prop] || "No such property";
    }
  }
  // If no contact with the given name is found, return "No such contact"
  return "No such contact";
}
// Test the lookUpProfile function by looking up Sherlock's likes
var data = lookUpProfile("Sherlock", "likes");
console.log(data); // Output: ["Intriguing Cases", "Violin"]

// Generate a random integer between 0 and 19 (inclusive)
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// Function to generate a random whole number between 0 and 9 (inclusive)
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

// Function to generate a random integer between myMin and myMax (inclusive)
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5, 15);
console.log(myRandom);

// Function to convert a string to an integer using base 10
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");

// Function to convert a binary string to an integer (base 2)
function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");

// Example of the ternary operator: condition ? exprIfTrue : exprIfFalse

// Function to check if two values are strictly equal using the ternary operator
function checkEqual(a, b) {
  return a === b ? true : false;
}
checkEqual(1, 2);

// Function to check the sign of a number using nested ternary operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(0));
// Callback function example: display will be called with the result
function display(result) {
  console.log(result);
}

// Function that adds two numbers and uses a callback to display the result
function add(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum); // Call the callback with the sum
}
add(102, 20, display); // Output: 122

// Anonymous function assigned to a variable to sum two numbers
let sum = function (x, y) {
  return x + y;
};

console.log(sum(10, 34)); // Output: 44

// Immediately Invoked Function Expression (IIFE) that logs "Hello"
(function () {
  console.log("Hello");
})();

// setTimeout with an anonymous function to log "WELCOME" after 5 seconds
setTimeout(function () {
  console.log("WELCOME");
}, 1000);

// Recursive function that counts down from a given number to 0
function countDown(num) {
  console.log(num);
  num--;
  if (num >= 0) {
    countDown(num); // Recursive call
  }
}
countDown(10); // Output: 10, 9, ..., 0

// Constructor function for creating Person objects with first and last name
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

const person1 = new Person("Elon", "Musk");
const person2 = new Person("Bill", "Gates");

console.log(person1); // Output: Person { firstName: 'Elon', lastName: 'Musk' }
console.log(person2); // Output: Person { firstName: 'Bill', lastName: 'Gates' }

// Adding a new property 'age' to person1 instance
person1.age = 52;

console.log(person1); // Output includes age property

// Adding a method 'greet' to person2 instance
person2.greet = function () {
  console.log("Hello");
};

person2.greet(); // Output: Hello

// Constructor function with a method to get full name
function Persona(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
const person3 = new Persona("Elon", "Musk");
const person4 = new Persona("Bill", "Gates");
console.log(person3.getFullName()); // Output: Elon Musk
console.log(person4.getFullName()); // Output: Bill Gates

// Demonstrating prototype property in constructor functions

// Constructor function for Person with first and last name
function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

// Add a shared property 'gender' to all Person instances via prototype
Person.prototype.gender = "Male";

// Create two Person instances
const person5 = new Person("Elon", "Musk");
const person6 = new Person("Bill", "Gates");

console.log(person6); // Output: Person { firstName: 'Bill', lastName: 'Gates' }, gender via prototype

// Demonstrating prototype reassignment and its effect

// Constructor function for Persons with a name property
function Persons() {
  this.name = "Elon Musk";
}

// Add 'age' property to Persons prototype
Persons.prototype.age = 25;

// Create an instance before prototype reassignment
const person7 = new Persons();

// Reassign prototype to a new object with different age
Persons.prototype = { age: 52 };

// Create another instance after prototype reassignment
const person8 = new Persons();

console.log(person7.age); // Output: 25 (old prototype)
console.log(person8.age); // Output: 52 (new prototype)

// Object destructuring example

const person = {
  firstName1: "Elon",
  lastName1: "Musk ",
};

// Destructure properties from person 
// let { firstName1: fName, lastName1: lName } = person; or
let { firstName1, lastName1 } = person;

console.log(lastName1); // Output: Musk 

// Object literal syntax extensions in ES6

let firstName2 = "Richmond";
let lastName2 = "Krowey";

// Use property shorthand to create an object
const people = {
  firstName2,
  lastName2,
};

console.log(people); // Output: { firstName2: 'Richmond', lastName2: 'Krowey' }
// JavaScript Class Example

class Billionaire {
  constructor(first, last) {
    this.firstName3 = first;
    this.lastName3 = last;
  }
  greet() {
    console.log("Hello");
  }
  changeName(newName) {
    this.firstName3 = newName;
  }
}

// Create two instances of the Billionaire class
const person9 = new Billionaire("Elon", "Musk");
const person10 = new Billionaire("Bill", "Gates");

console.log(person9); // Output: Billionaire { firstName3: 'Elon', lastName3: 'Musk' }
console.log(person10); // Output: Billionaire { firstName3: 'Bill', lastName3: 'Gates' }

// Accessing class properties and methods
console.log(person9.firstName3); // Output: Elon
person9.greet(); // Output: Hello

// Modifying class properties using a method
person9.changeName("Darwin");
console.log(person9.firstName3); // Output: Darwin

// Demonstrating getter and setter in a class
class Personal {
  constructor(name) {
    this._name = name; // Private property convention with underscore
  }
  // Getter for the 'name' property
  get name() {
    return this._name;
  }
  // Setter for the 'name' property
  set name(newName) {
    this._name = newName;
  }
}

const person11 = new Personal("Elon Musk");
console.log(person11.name); // Output: Elon Musk

// Use the setter to change the name
person11.name = "Bill Gates";
console.log(person11.name); // Output: Bill Gates


// Class expression example
const Persosn = class {
  constructor(first, last) {
    this.firstName4 = first; // Assign first name to firstName4 property
    this.lastName4 = last;   // Assign last name to lastName4 property
  }
};

// Create an instance of Persosn using the class expression
const person12 = new Persosn("Elon", "Musk");
console.log(person12); // Output: Persosn { firstName4: 'Elon', lastName4: 'Musk' }

// Class inheritance example

// Define a base class Personss with a constructor and a greet method
class Personss {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hello " + this.name);
  }
}

// Define a Student class that extends Personss
class Student extends Personss {
  constructor(name, grade) {
    super(name); // Call the constructor of the parent class (Personss)
    this.grade = grade;
  }
  // Override the greet method to include grade information
  greet() {
    console.log("Hello " + this.name + ", you are in grade " + this.grade);
  }
}

// Create an instance of Student and demonstrate usage
const student = new Student("Elon Musk", "A");
console.log(student); // Output: Student { name: 'Elon Musk', grade: 'A' }
student.greet(); // Output: Hello Elon Musk, you are in grade A


// Static method example
class Personsss {
  constructor(name) {
    this.name = name;
  }
  // Static method: can be called on the class itself, not on instances
  static greet(x) {
    console.log("Hello " + x.name);
  }
}

const person13 = new Personsss("Elon Muskkk");
Personsss.greet(person13); // Output: Hello Elon Muskkk

// Private method example
class Personssss {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  // Private method: only accessible within the class
  #fullName() {
    return this.fname + " " + this.lname;
  }
  greet() {
    console.log("Ohai " + this.#fullName());
  }
}

const person14 = new Personssss("Elon", "Musk");
person14.greet(); // Output: Ohai Elon Musk
