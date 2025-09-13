// Initialize game state variables
let sum = 0; // Sum of card values
let cards = []; // Array to hold drawn cards
let hasBlackJack = false; // Flag for Blackjack win
let isAlive = false; // Flag for player status
let message = ""; // Message to display to player

// Get DOM elements for displaying messages and game info
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".card-el");

console.log(cards); // Debug: log initial cards array

// Player object with name and chips
let player = {
  name: "Richmond",
  chips: 145,
};

// Display player info in the UI
let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": " + player.chips;

// Start the game by drawing two cards and updating state
function startGame() {
  isAlive = true; // Player is now in the game
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard]; // Store drawn cards
  sum = firstCard + secondCard; // Calculate sum
  renderGame(); // Update UI
}

// Returns a random card value between 1 and 13, with Blackjack rules applied
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  // Ace (1) is worth 11 points
  if (randomCard === 1) {
    return 11;
  // Face cards (11-13) are worth 10 points
  } else if (randomCard > 10) {
    return 10;
  // Number cards (2-10) are worth their value
  } else {
    return randomCard;
  }
}

// Renders the current game state to the UI
function renderGame() {
  cardsEl.textContent = "Cards: ";
  // Display all drawn cards
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum:  " + sum; // Show sum of cards

  // Update message based on game state
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message; // Show message to player
}

// Draws a new card if player is alive and hasn't won yet
function newCard() {
  // Only allow drawing if game is active and player doesn't have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card; // Add card value to sum
    cards.push(card); // Add card to array
    renderGame(); // Update UI
  }
  // console.log(cards)
}

