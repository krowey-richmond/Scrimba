// Get the count element
let countEl = document.getElementById("count-el");
console.log(countEl);

// Initialize count
let count = 0;

// Get the save element
let saveEl = document.getElementById("save-el");

// Increment function: increases count and updates display
function increment() {
  count += 1;
  countEl.textContent = count;
  console.log("The button was clicked");
  console.log(count);
}

// Save function: saves current count, resets count, and updates display
function save() {
  let saveTxt = count + " - ";
  saveEl.textContent += saveTxt;
  count = 0;
  countEl.textContent = count;
}
