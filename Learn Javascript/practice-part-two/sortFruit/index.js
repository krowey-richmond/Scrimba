let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Function to sort and display fruits on their respective shelves
function sortFruit() {
  // Clear any existing content from the shelves
  appleShelf.textContent = "";
  orangeShelf.textContent = "";

  // Loop through each fruit in the array
  for (let i = 0; i < fruit.length; i++) {
    // Check if the current fruit is an apple
    if (fruit[i] === "🍎") {
      // Add apple to the apple shelf with a space for separation
      appleShelf.textContent += fruit[i] + " ";
    }
    // Otherwise, it must be an orange
    else {
      // Add orange to the orange shelf with a space for separation
      orangeShelf.textContent += fruit[i] + " ";
    }
  }
}

// Call the function to sort and display the fruits
sortFruit();
