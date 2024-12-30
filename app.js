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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const score = document.querySelector("#score");
    score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;

    const roundResults = document.querySelector("#roundResults");
    roundResults.textContent = `Round results: Each round's results will appear here once you begin to play!`;

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => {
        const humanSelection = "rock";
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    });

    paper.addEventListener("click", () => {
        const humanSelection = "paper";
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    });

    scissors.addEventListener("click", () => {
        const humanSelection = "scissors";
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    });

    function playRound(computerChoice, humanChoice) {
        if (computerChoice === "scissors" && humanChoice === "rock") {
            humanScore = humanScore + 1;
            roundResults.textContent = `You won this round! Rock beats scissors.`;
            score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
        }
        else if (computerChoice === "rock" && humanChoice === "paper") {
            humanScore = humanScore + 1;
            roundResults.textContent = `You won this round! Paper beats rock.`;
            score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
        }
        else if (computerChoice === "paper" && humanChoice === "scissors") {
            humanScore = humanScore + 1;
            roundResults.textContent = `You won this round! Scissors beats paper.`;
            score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
        }
        else if (computerChoice === "rock" && humanChoice === "scissors") {
            computerScore = computerScore + 1;
            roundResults.textContent = `Sad! You lost this round. Rock beats scissors.`;
            score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
        }
        else if (computerChoice === "paper" && humanChoice === "rock") {
            computerScore = computerScore + 1;
            roundResults.textContent = `Sad! You lost this round. Paper beats rock.`;
            score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
        }
        else if (computerChoice === "scissors" && humanChoice === "paper") {
            computerScore = computerScore + 1;
            roundResults.textContent =`Sad! You lost this round. Scissors beats paper.`;
            score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
        }
        else if (computerChoice === "rock" && humanChoice === "rock") {
            roundResults.textContent = `Draw! Please play again.`;
            score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
        }
        else if (computerChoice === "paper" && humanChoice === "paper") {
            roundResults.textContent = `Draw! Please play again.`;
            score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
        }
        else (computerChoice === "scissors" && humanChoice === "scissors") {
            roundResults.textContent = `Draw! Please play again.`;
            score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
        }

        if (humanScore >=5 || computerScore >= 5) {
            displayFinalResults();
        }
    }
    
    function displayFinalResults() {
        const application = document.querySelector("#application");
        const buttonContainer = document.querySelector("#buttonContainer");
        const finalResults = document.createElement("div");
        finalResults.style.cssText = "display: flex; justify-content: center;";
        application.insertBefore(finalResults, buttonContainer);

        if (humanScore > computerScore) {
            finalResults.textContent = `Congratulations, you beat the computer!`;
        }
        else {
            finalResults.textContent = `Sad! You lost to the computer.`; 
        }
    }
}

playGame();