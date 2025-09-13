// Select the paragraph element with id="error" from the DOM
// This element will be used to display error messages
let errorMsg = document.getElementById("error");

/**
 * Function to handle purchase button click event
 * Displays an error message when called
 */
function msg() {
    // Update the text content of the error message element
    // This will make the error message visible to the user
    errorMsg.textContent = "Something went wrong, please try again";
}