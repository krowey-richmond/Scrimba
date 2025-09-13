let myPoints = 3;

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

// Adds 3 points to the myPoints variable
function add3Points() {
  myPoints += 3;
}

// Removes 1 point from the myPoints variable  
function remove1Point() {
  myPoints -= 1;
}

// Initial function calls for demonstration
add3Points();
console.log(myPoints); // Output: 6

add3Points();
console.log(myPoints); // Output: 9

add3Points();
console.log(myPoints); // Output: 12

remove1Point();
console.log(myPoints); // Output: 11

remove1Point();
console.log(myPoints); // Output: 10

// Final call to reach the target of 10 points
console.log(myPoints); // Output: 10