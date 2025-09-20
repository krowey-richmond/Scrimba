let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.getElementById("delete-btn");

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
} else {
  console.log("Leads array empty");
}


function render(lead) {
  let listItems = "";
  for (i = 0; i < lead.length; i++) {
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEL.append(li);

    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    listItems += `
    <li>
          <a target='_blank' href='${lead[i]}'>
          ${lead[i]}
          </a>
    </li>
    `;
    // console.log(listItems);
  }

  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  myLeads = [];
  localStorage.clear();
  render(myLeads);

  console.log("All leads cleared!");
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  inputEl.value = " ";
  render(myLeads);


  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});
console.log(leadsFromLocalStorage);
