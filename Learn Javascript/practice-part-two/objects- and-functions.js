// Create a person object with three properties: name, age, and country
// Using my personal information as example values
let person = {
    name: "Richmond",
    age: 21,
    country: "Ghana"
};

/**
 * logData function
 * Creates and displays a formatted string using the person object data
 * Format: "Name is X years old and lives in Country"
 */
function logData() {
    // Construct and log the formatted string using object properties
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}

// Call the logData() function to test and verify it works correctly
logData(); // Expected output: "Richmond is 21 years old and lives in Ghana"