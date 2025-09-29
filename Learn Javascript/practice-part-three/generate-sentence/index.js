// ------------------------------
// Function: generateSentence(desc, arr)
// Takes:
//   - desc → string description (e.g. "best fruits")
//   - arr → array of items (e.g. ["Apples", "Bananas"])
// Returns: a sentence describing the array items
// ------------------------------

let description = "best fruits";
let arrString = ["Apples", "Bananas", "Oranges"];

function generateSentence(desc, arr) {
  // Start with an empty string to collect array items
  let myArr = "";

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      // Last item → no comma
      myArr += `${arr[i]}`;
    } else {
      // Add a comma + space after each item except the last
      myArr += `${arr[i]}, `;
    }
  }

  // Build the final sentence with a template string
  const genSentence = `The ${arr.length} ${desc} are ${myArr}.`;

  // Return instead of console.log
  return genSentence;
}

console.log(generateSentence(description, arrString));
// → "The 3 best fruits are Apples, Bananas, Oranges."

// ------------------------------
// Alternative: cleaner solution using join()
// ------------------------------
function generateSent(desc, arr) {
  const myArr = arr.join(", ");
  const genSentence = `The ${arr.length} ${desc} are ${myArr}.`;

  // Return instead of console.log
  return genSentence;
}

console.log(generateSent("largest countries", ["China", "India", "USA"]));
// → "The 3 largest countries are China, India, USA."
