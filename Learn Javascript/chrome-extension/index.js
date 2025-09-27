// Initialize leads array (stores URLs)
let myLeads = [];

// Grab references to DOM elements
const inputEl = document.querySelector("#input-el");   // input field for manual leads
const inputBtn = document.querySelector("#input-btn"); // "SAVE INPUT" button
const ulEl = document.getElementById("ul-el");         // unordered list to render leads
const deleteBtn = document.getElementById("delete-btn"); // "DELETE ALL" button
const tabBtn = document.getElementById("tab-btn");     // "SAVE TAB" button

// Load leads from localStorage (if any exist)
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// If there are saved leads, use them and render immediately
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
} else {
  console.log("Leads array empty");
}

// Renders the list of leads to the DOM
function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    // Build each list item as a clickable link
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
    `;
  }

  // Inject the entire list into the <ul>
  ulEl.innerHTML = listItems;
}

// Double-clicking DELETE ALL clears all leads
deleteBtn.addEventListener("dblclick", function () {
  myLeads = [];                        // reset array
  localStorage.removeItem("myLeads");  // clear saved leads only
  render(myLeads);                     // re-render empty list
  console.log("All leads cleared!");
});

// Save the current tab's URL when SAVE TAB is clicked
tabBtn.addEventListener("click", function () {    
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Grab the URL of the first (active) tab
    if (tabs.length > 0 && tabs[0].url) {
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
    } else {
      console.log("No valid tab URL found.");
    }
  });
});


// tabBtn.addEventListener("click", function(){    
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//         render(myLeads)
//     })
// })


// Save the input field value when SAVE INPUT is clicked
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value); // add new lead
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  inputEl.value = "";          // clear the input field
  render(myLeads);             // update the list
  console.log(localStorage.getItem("myLeads")); // confirm save
});

// Log any stored leads on page load (for debugging)
console.log(leadsFromLocalStorage);
