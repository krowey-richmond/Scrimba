let hands = ["rock", "paper", "scissor"];

// Returns a random item from the hands array
function getRandomHand() {
    let randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
}

// Example usage:
console.log(getRandomHand());