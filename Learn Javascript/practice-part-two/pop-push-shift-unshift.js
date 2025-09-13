let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

// Remove the last element "Monaco" using pop()
largeCountries.pop();

// Remove the first element "Tuvalu" using shift()
largeCountries.shift();

// Add "China" to the beginning of the array using unshift()
largeCountries.unshift("China");

// Add "Pakistan" to the end of the array using push()
largeCountries.push("Pakistan");

console.log(largeCountries);
