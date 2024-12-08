// app.js: Logic for rock-paper-scissors game

function randomChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.33) {
        return "rock";
    }
    else if (randomValue > 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getComputerChoice() {
    return randomChoice();
}

console.log(getComputerChoice());

function getHumanChoice() {
    const humanChoice = prompt("Please enter: rock, paper, or scissors.");
    return humanChoice;
}

console.log(getHumanChoice());

