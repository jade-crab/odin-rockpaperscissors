function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) {
        return "rock";
    } else if (choice < 0.67) {
        return "paper";
    } else return "scissors";
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.id, getComputerChoice());
        });
    })

    const resultsDiv = document.querySelector(".results");
    const scoreDiv = document.createElement("div");

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            resultsDiv.textContent = "It's a tie!";
            return;
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                resultsDiv.textContent = "You lose! Paper beats rock";
                computerScore++;
            } else {
                resultsDiv.textContent = "You win! Rock beats scissors";
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                resultsDiv.textContent = "You lose! Scissors beat paper";
                computerScore++;
            } else {
                resultsDiv.textContent = "You win! Rock beats scissors";
                humanScore++;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                resultsDiv.textContent = "You lose! Rock beats scissors";
                computerScore++;
            } else {
                resultsDiv.textContent = "You win! Scissors beat paper";
                humanScore++;
            }
        }
        scoreDiv.textContent = `Your score: ${humanScore}, computer score: ${computerScore}`;
        resultsDiv.appendChild(scoreDiv);

        if (humanScore === 5 || computerScore === 5) {
            resultsDiv.textContent = "End of the game.";
            if (humanScore === 5) {
                resultsDiv.textContent += ` You win ${humanScore} : ${computerScore}!`
            } else {
                resultsDiv.textContent += ` You lose ${humanScore} : ${computerScore}!`
            }
            humanScore = 0;
            computerScore = 0;
            return;
        }
    }



}


playGame();

