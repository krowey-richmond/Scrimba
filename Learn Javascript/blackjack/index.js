let firstCard = 11;
let secondCard = 1;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".card-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards : " + firstCard + ", " + secondCard;
  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  // console.log(hasBlackJack);
  // console.log(isAlive);
  // console.log(logMessage);
  messageEl.textContent = message;
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  let card = 12;
  sum += card;
  renderGame();

  cardsEl.textContent =
    "Cards : " + firstCard + ", " + secondCard + ", " + card;
}
