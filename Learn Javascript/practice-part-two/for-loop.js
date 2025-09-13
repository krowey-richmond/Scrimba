let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indonesia
- Pakistan
*/

// First, log the header/title
console.log("The 5 largest countries in the world:");

// Use a for loop to iterate through each country in the array
for (let i = 0; i < largeCountries.length; i++) {
    // Log each country with a bullet point prefix
    console.log("- " + largeCountries[i]);
}