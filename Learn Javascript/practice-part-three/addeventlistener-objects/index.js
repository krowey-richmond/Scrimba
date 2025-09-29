// ------------------------------
// Data: an array of objects representing players and their scores
// ------------------------------
let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

// ------------------------------
// Select the <button> element from the DOM
// querySelector("button") → fetches the first <button> tag it finds
// ------------------------------
let logBtn = document.querySelector("button");
console.log(logBtn); // check that the button is selected correctly

// ------------------------------
// Add a click event listener to the button
// When the button is clicked, the function runs
// ------------------------------
logBtn.addEventListener("click", function () {
  // Access Jane’s score (first object in the array → index 0)
  console.log(data[0].score); // → 52
});

// ------------------------------
// Now, whenever the button is clicked, Jane’s score is logged
// ------------------------------
