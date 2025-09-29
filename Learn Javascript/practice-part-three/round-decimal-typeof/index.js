// ------------------------------
// Challenge: Round the price down to 2 decimal places
// ------------------------------

// Original price (long decimal)
const price = '73.987653';

// Get the purchase button
const btn = document.getElementById("purchase-btn");

// Function that safely rounds *down* to 2 decimals
function roundPrice(totalPrice) {
  // If the input is a string, convert it to a number
  if (typeof totalPrice === "string") {
    totalPrice = Number(totalPrice);
  }

  // Check if it's a valid number (not NaN)
  if (typeof totalPrice === "number" && !isNaN(totalPrice)) {
    // Math.floor → always rounds *down*
    // Multiply by 100 → shift decimal 2 places
    // Divide by 100 → shift it back
    // .toFixed(2) → ensures exactly 2 decimals as string
    return (Math.floor(totalPrice * 100) / 100).toFixed(2);
  } else {
    // Handle invalid values gracefully
    return "Invalid price value";
  }
}

// Update the button text with rounded price
btn.textContent = `Buy €${roundPrice(price)}`;
