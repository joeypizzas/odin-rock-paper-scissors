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

// function getHumanChoice() {
//     const humanChoice = prompt("Please enter: rock, paper, or scissors.");
//     return humanChoice;
// }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const score = document.querySelector("#score");
    score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;

    const results = document.querySelector("#results");
    results.textContent = `Round results: Each round's results will appear here once you begin to play!`;

    for (let i = 1; i < 6; i++) {
        function playRound(computerChoice, humanChoice) {
            humanChoice = humanChoice.toLowerCase();
        
            if (computerChoice === "scissors" && humanChoice === "rock") {
                humanScore = humanScore + 1;
                console.log(`You won round ${i}! Rock beats scissors. The score is now ${humanScore} - ${computerScore}.`);
            }
            else if (computerChoice === "rock" && humanChoice === "paper") {
                humanScore = humanScore + 1;
                console.log(`You won round ${i}! Paper beats rock. The score is now ${humanScore} - ${computerScore}.`);
            }
            else if (computerChoice === "paper" && humanChoice === "scissors") {
                humanScore = humanScore + 1;
                console.log(`You won round ${i}! Scissors beats paper. The score is now ${humanScore} - ${computerScore}.`);
            }
            else if (computerChoice === "rock" && humanChoice === "scissors") {
                computerScore = computerScore + 1;
                console.log(`Sad! You lost round ${i}. Rock beats scissors. The score is now ${humanScore} - ${computerScore}.`);
            }
            else if (computerChoice === "paper" && humanChoice === "rock") {
                computerScore = computerScore + 1;
                console.log(`Sad! You lost round ${i}. Paper beats rock. The score is now ${humanScore} - ${computerScore}.`);
            }
            else if (computerChoice === "scissors" && humanChoice === "paper") {
                computerScore = computerScore + 1;
                console.log(`Sad! You lost round ${i}. Scissors beats paper. The score is now ${humanScore} - ${computerScore}.`);
            }
            else if (computerChoice === "rock" && humanChoice === "rock") {
                console.log(`Draw! The score is still ${humanScore} - ${computerScore}. Please play again.`);
            }
            else if (computerChoice === "paper" && humanChoice === "paper") {
                console.log(`Draw! The score is still ${humanScore} - ${computerScore}. Please play again.`);
            }
            else if (computerChoice === "scissors" && humanChoice === "scissors") {
                console.log(`Draw! The score is still ${humanScore} - ${computerScore}. Please play again.`);
            }
        }

        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        console.log(`Round: ${i}`);
        console.log(`Your choice: ${humanSelection}.`);
        console.log(`Computer's choice: ${computerSelection}.`);

        playRound(computerSelection, humanSelection);
    }

    if (humanScore > computerScore) {
        return console.log(`Congratulations, you beat the computer! The final score was ${humanScore} - ${computerScore}.`);
    }
    else if (humanScore < computerScore) {
        return console.log(`Sad! You lost to the computer. The final score was ${humanScore} - ${computerScore}.`); 
    }
    else {
        return console.log(`Well...that's a draw! The final score was ${humanScore} - ${computerScore}. It's time to play another game!`);
    }
}

playGame();
