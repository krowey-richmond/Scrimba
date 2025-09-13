// Get reference to the welcome element from the DOM
let welcomeEl = document.getElementById("welcome-el");
console.log(welcomeEl); // Log the element to verify it was found

// Define variables for name and greeting message
let name = "Richmond Borquaye";
let greeting = "Welcome  ";

// Set the text content of the welcome element with greeting and name
welcomeEl.innerText = greeting + name;

// Append a waving hand emoji to the existing text content
welcomeEl.innerText += "👋";
