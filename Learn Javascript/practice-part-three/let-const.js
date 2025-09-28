// ==========================
// SETTING THE STAGE
// ==========================

// Player's name never changes → use const
const player = "Per";

// Opponent's name never changes → use const
const opponent = "Nick";

// Game name is fixed → use const
const game = "AmazingFighter";

// Points will change as the game progresses → use let
let points = 0;

// Win status will change depending on the game result → use let
let hasWon = false;

// ==========================
// PLAYING THE GAME
// ==========================

// Increase player's score → update variable (must be let)
points += 100;

// Update win/lose status → also must be let
hasWon = false;

// ==========================
// ANNOUNCING THE WINNER
// ==========================

// If player has won, log their victory message
if (hasWon) {
  console.log(`${player} got ${points} points and won the ${game} game!`);
} else {
  // Otherwise, announce the opponent as winner
  console.log(`The winner is ${opponent}! ${player} lost the game`);
}
