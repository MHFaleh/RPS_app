const startGameBtn = document.getElementById('start-game-btn');
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
let gameIsRuning = false;
let getPlyerChoice = function() {
    let selection = prompt(`chose ${rock}, ${paper} or ${scissors}$`, "").toUpperCase();
    if (selection !== rock && selection !== paper && selection !== scissors) {
        alert(`input invalid! we have selected ${rock} for you.`);
        selection = rock;
        return selection;
    } else {
        return selection;
    }
}
const getComputerChoice = function() {
    const computerRolle = Math.random();
    if (computerRolle < 0.34) {
        return rock;
    } else if (computerRolle < 0.67) {
        return paper;
    } else {
        return scissors;
    }
}
const vectoryCondition = function(pCoice, cChoice) {
    if (pCoice === cChoice) {
        return "its a drow!";
    } else if (pCoice === rock && cChoice === scissors || pCoice === paper && cChoice === rock || pCoice === scissors && cChoice === paper) {
        return "player win";
    } else {
        return "player lost";
    }
}
startGameBtn.addEventListener("click", function() {
    if (!gameIsRuning) {
        gameIsRuning = true;
        console.log("game is starting...");
        const playerChoice = getPlyerChoice();
        console.log(playerChoice);
        const computerChoice = getComputerChoice();
        console.log(computerChoice);
        const gameResult = vectoryCondition(playerChoice, computerChoice);
        console.log(gameResult);
        alert(`you have chosen ${playerChoice} and the computer chose ${computerChoice} therfor ${gameResult}.`)
        return gameIsRuning = false;
    } else {
        return;
    }
});