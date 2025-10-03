import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-cc51d-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

// Grab references to key DOM elements
const inputEl = document.querySelector("#input-el"); // input field
const inputBtn = document.querySelector("#input-btn"); // "SAVE INPUT" button
const ulEl = document.getElementById("ul-el"); // list container
const deleteBtn = document.getElementById("delete-btn"); // "DELETE ALL" button

// ------------------------------
// Helper: Renders all leads to the DOM
// ------------------------------
function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    // Each lead is clickable and opens in a new tab
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
    `;
  }

  ulEl.innerHTML = listItems;
}

// ------------------------------
// Helper: Save current leads and re-render
// ------------------------------
function saveAndRender() {}

// ------------------------------
// Delete all leads (double-click for safety)
// ------------------------------
deleteBtn.addEventListener("dblclick", function () {
  console.log("All leads cleared!");
});

// ------------------------------
// Save manual input (only if not empty)
// ------------------------------
inputBtn.addEventListener("click", function () {
  if (inputEl.value.trim() !== "") {
    push(referenceInDB, inputEl.value);
    saveAndRender();
    inputEl.value = ""; // clear input
  }
});
