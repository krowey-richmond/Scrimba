let firstCard = 11;
let secondCard = 1;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! Yo u've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }

  // console.log(hasBlackJack);
  // console.log(isAlive);
  // console.log(logMessage);
  messageEl.textContent = message;
}
sumEl.textContent += sum;
