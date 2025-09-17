let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (i = 0; i < myLeads.length; i++) {
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEL.append(li);

    listItems += "<li>" + myLeads[i] + "</li>";
    console.log(listItems);
  }

  ulEl.innerHTML = listItems;
}
