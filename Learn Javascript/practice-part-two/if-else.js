let age = 67;

/**
 * Determines and logs the appropriate discount based on age
 * Uses conditional statements to check age ranges
 */
function ifElse() {
  if (age < 6) {
    console.log("free");
  } else if (age <= 17) {
    console.log("child discount");
  } else if (age <= 26) {
    console.log("student discount");
  } else if (age <= 66) {
    console.log("full price");
  } else {
    console.log("senior citizen discount");
  }
}

// Execute the function to determine the discount
ifElse(); // Output: senior citizen discount

// Age categories:
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Alternative approach with comments showing the logic flow:

function calculateDiscount() {
  if (age < 6) {
    console.log("free"); // Age 0-5
  } else if (age >= 6 && age <= 17) {
    console.log("child discount"); // Age 6-17
  } else if (age >= 18 && age <= 26) {
    console.log("student discount"); // Age 18-26
  } else if (age >= 27 && age <= 66) {
    console.log("full price"); // Age 27-66
  } else {
    console.log("senior citizen discount"); // Age 67+
  }
}

// Call the alternative function
calculateDiscount(); // Output: senior citizen discount