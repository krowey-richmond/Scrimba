import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";


const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-cc51d-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)


// ------------------------------
// Lead Tracker App
// Stores and manages a list of leads (URLs) using localStorage
// ------------------------------

// Local array to hold leads
let myLeads = [];

// Grab references to key DOM elements
const inputEl = document.querySelector("#input-el"); // input field
const inputBtn = document.querySelector("#input-btn"); // "SAVE INPUT" button
const ulEl = document.getElementById("ul-el"); // list container
const deleteBtn = document.getElementById("delete-btn"); // "DELETE ALL" button
const tabBtn = document.getElementById("tab-btn"); // "SAVE TAB" button

// Load saved leads from localStorage (if any)
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// If leads exist, assign them to myLeads and render immediately
if (leadsFromLocalStorage !== null) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
} else {
  console.log("No leads found in localStorage.");
}

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
function saveAndRender() {
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
}

// ------------------------------
// Delete all leads (double-click for safety)
// ------------------------------
deleteBtn.addEventListener("dblclick", function () {
  myLeads = [];
  localStorage.removeItem("myLeads");
  render(myLeads);
  console.log("All leads cleared!");
});

// ------------------------------
// Save current tab’s URL
// ------------------------------
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Safety check: only save if tab exists and has a URL
    if (tabs.length > 0 && tabs[0].url) {
      myLeads.push(tabs[0].url);
      saveAndRender();
    } else {
      console.log("No valid tab URL found.");
    }
  });
});

// ------------------------------
// Save manual input (only if not empty)
// ------------------------------
inputBtn.addEventListener("click", function () {
  if (inputEl.value.trim() !== "") {
    myLeads.push(inputEl.value.trim());
    saveAndRender();
    inputEl.value = ""; // clear input
  }
});
