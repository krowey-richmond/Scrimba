// ------------------------------
// Array of image paths
// ------------------------------
const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

// Get the container element from the DOM
let imageContainer = document.getElementById("container");
console.log(imageContainer); // Just to confirm we selected it

// ------------------------------
// Function: render()
// Loops through the imgs array and inserts <img> tags
// into the container using innerHTML
// ------------------------------
function render() {
  // Loop through all image file paths
  let imgDOM = "";
  for (let i = 0; i < imgs.length; i++) {
    // Append an <img> tag to the container for each image
    imgDOM += `
      <img alt="Employee in the company" class="team-img" src="${imgs[i]}">
    `;
  }
  imageContainer.innerHTML = imgDOM;
}

// Call the render function
render();
