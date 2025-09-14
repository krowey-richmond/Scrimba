let fighters = [
    "🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", 
    "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

// Add click event listener to the fight button
fightButton.addEventListener("click", function () {
    // Generate two random indices to select fighters from the array
    let selectFighterOne = Math.floor(Math.random() * fighters.length);
    let selectFighterTwo = Math.floor(Math.random() * fighters.length);
    
    // Display the selected fighters in the stage element with "vs" between them
    stageEl.textContent = fighters[selectFighterOne] + " vs " + fighters[selectFighterTwo];
});