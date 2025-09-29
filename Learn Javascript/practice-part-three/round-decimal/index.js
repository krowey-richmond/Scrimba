// ------------------------------
// Challenge: Round the price down to 2 decimal places
// ------------------------------

// Original price (long decimal)
const totalPrice = 420.69235632455

// Get the purchase button
const btn = document.getElementById("purchase-btn")

// Method 1: Math.round → returns a number
// Multiply by 100, round, then divide by 100
let price = Math.round(totalPrice * 100) / 100
console.log(price) // 420.69

// Method 2: toFixed(2) → returns a string with 2 decimals
price = totalPrice.toFixed(2)
console.log(price) // "420.69"

// Update the button text
btn.textContent = `Buy €${price}`
