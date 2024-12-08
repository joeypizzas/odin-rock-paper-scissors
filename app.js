// app.js: Logic for rock-paper-scissors game

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    const humanChoice = prompt("Please enter: rock, paper, or scissors.");
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore = humanScore + 1;
        return console.log("You win! Rock beats scissors.");
    }
    else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore = humanScore + 1;
        return console.log("You win! Paper beats rock.");
    }
    else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore = humanScore + 1;
        return console.log("You win! Scissors beats paper.");
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore = computerScore + 1;
        return console.log("You lose! Rock beats scissors.");
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore = computerScore + 1;
        return console.log("You lose! Paper beats rock.");
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore = computerScore + 1;
        return console.log("You lose! Scissors beats paper.");
    }
    else if (computerChoice === "rock" && humanChoice === "rock") {
        return console.log("Draw! Please play again.");
    }
    else if (computerChoice === "paper" && humanChoice === "paper") {
        return console.log("Draw! Please play again.");
    }
    else if (computerChoice === "scissors" && humanChoice === "scissors") {
        return console.log("Draw! Please play again.");
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log(computerSelection);

    playRound(computerSelection, humanSelection);