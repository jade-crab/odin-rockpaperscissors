console.log("Hello World!");

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) {
        return "rock";
    } else if (choice < 0.67) {
        return "paper";
    } else return "scissors";
}

function getHumanChoice() {
    return prompt("Choose rock, paper or scissors: ");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose! Paper beats rock");
                computerScore++;
            } else {
                console.log("You win! Rock beats scissors");
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                console.log("You lose! Scissors beat paper");
                computerScore++;
            } else {
                console.log("You win! Rock beats scissors");
                humanScore++;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats scissors");
                computerScore++;
            } else {
                console.log("You win! Scissors beat paper");
                humanScore++;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Human score: " + humanScore + ", computer score: " + computerScore);
    }
}


playGame();

