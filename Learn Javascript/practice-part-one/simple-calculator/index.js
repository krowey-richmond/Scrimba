let num1 = 8;
let num2 = 2;

// Display the initial numbers in their respective HTML elements
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// Get reference to the paragraph element where results will be displayed
let sumEl = document.getElementById("sum-el");

/**
 * Addition function
 * Adds num1 and num2, then displays the result
 */
function add() {
  let result = num1 + num2;
  sumEl.textContent = "Sum: " + result;
}

/**
 * Division function  
 * Divides num1 by num2, then displays the result
 */
function divide() {
  let result = num1 / num2;
  sumEl.textContent = "Quotient: " + result;
}

/**
 * Subtraction function
 * Subtracts num2 from num1, then displays the result
 */
function subtract() {
  let result = num1 - num2;
  sumEl.textContent = "Difference: " + result;
}

/**
 * Multiplication function
 * Multiplies num1 by num2, then displays the result
 */
function multiply() {
  let result = num1 * num2;
  sumEl.textContent = "Product: " + result;
}