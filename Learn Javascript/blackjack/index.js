let sum = 0;
let cards = []; //array
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".card-el");
console.log(cards);

let player = {
  name: "Richmond",
  chips: 145,
};

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": " + player.chips;

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard]; //array
  sum = firstCard + secondCard;
  renderGame();
}

// Make this function return a random number between 1 and 13
function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  // if 1     -> return 11
  if (randomCard === 1) {
    return 11;
    // if 11-13 -> return 10
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum:  " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  // console.log(hasBlackJack);
  // console.log(isAlive);
  // console.log(logMessage);
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
  // console.log(cards)
}
eh89he;
