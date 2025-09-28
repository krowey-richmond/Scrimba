// Store a list of courses in an array
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that accepts an array as a parameter
// The function will loop through the array and log each item
function listCourse(arr) {
    // Loop through the array elements
    // Note: better to use arr.length, not myCourses.length, 
    // so the function works with ANY array passed in
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]) // Print each item to the console
    }
}

// Call the function and pass in myCourses as the argument
listCourse(myCourses)
