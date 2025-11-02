// ------------------------------
// Import necessary Firebase modules from CDN
// ------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

// ------------------------------
// Firebase configuration object
// ------------------------------
const firebaseConfig = {
  // The Realtime Database URL (specific to your Firebase project)
  databaseURL:
    "https://leads-tracker-app-cc51d-default-rtdb.europe-west1.firebasedatabase.app",
};

// ------------------------------
// Initialize Firebase app and database reference
// ------------------------------
const app = initializeApp(firebaseConfig); // Connects to your Firebase project
const database = getDatabase(app); // Gets the Realtime Database service
const referenceInDB = ref(database, "leads"); // Reference path "leads" in the database

// ------------------------------
// Grab references to key DOM elements
// ------------------------------
const inputEl = document.querySelector("#input-el"); // Input text field
const inputBtn = document.querySelector("#input-btn"); // Button to save manual input
const ulEl = document.getElementById("ul-el"); // Unordered list to display saved leads
const deleteBtn = document.getElementById("delete-btn"); // Double-click to delete all leads

// ------------------------------
// Helper function: Renders all leads to the page
// ------------------------------
function render(leads) {
  let listItems = "";

  // Loop through each lead in the array
  for (let i = 0; i < leads.length; i++) {
    // Use a template string to make each lead clickable
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
    `;
  }

  // Insert all the list items into the unordered list
  ulEl.innerHTML = listItems;
}

// ------------------------------
// Realtime listener: triggers whenever the database changes
// ------------------------------
onValue(referenceInDB, function (snapshot) {
  const snapshotExist = snapshot.exists(); // Check if data exists in DB
  const snapshotData = snapshot.val(); // Get the data object

  if (snapshotExist) {
    // Convert object values into an array of URLs (Firebase stores as objects)
    const leadsArray = Object.values(snapshotData);
    render(leadsArray); // Render the leads on the screen
  } else {
    // If database is empty, render an empty list
    render([]);
  }
});

// ------------------------------
// Delete all leads (double-click for safety)
// ------------------------------
deleteBtn.addEventListener("dblclick", function () {
  // Removes all data under the "leads" reference
  remove(referenceInDB);
});

// ------------------------------
// Save manual input (only if it's not empty or whitespace)
// ------------------------------
inputBtn.addEventListener("click", function () {
  const cleanInput = inputEl.value.trim(); // Remove extra spaces

  // Only push non-empty strings
  if (cleanInput !== "") {
    push(referenceInDB, cleanInput); // Add new entry to Firebase
    inputEl.value = ""; // Clear the input field
  }
});
