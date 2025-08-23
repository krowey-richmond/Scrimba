// document.getElementById('count-el').innerText= 5;

//   let count = 0;
//   console.log(count);

//   let myAge = 21;
//   console.log(myAge);

// function increment() {
//     console.log("The button was clicked");
// }

let countEl = document.getElementById("count-el");
console.log(countEl);
let count = 0;

let saveEl = document.getElementById("save-el");

function increment() {
  count += 1; //count = count + 1
  countEl.textContent = count;
  console.log("The button was clicked");
  console.log(count);
}

function save() {
  let saveTxt = count + " - ";
  saveEl.textContent += saveTxt;
  count = 0;
  countEl.textContent = count;
}
