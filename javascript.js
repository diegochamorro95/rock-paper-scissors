function getComputerChoice() {
    let option = Math.round(Math.random() * 100);
    if (option <= 33) {
        return "rock"
    }
    else if (option <= 66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}


function getHumanChoice() {
    let option = prompt("Type your choice: ").toLowerCase(); 
    return option; 
}
var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock");
        humanScore = humanScore +1;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper.");
        computerScore = computerScore +1;
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("Tie! Try again")
    }

    else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("Tie! Try again.");
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors.");
        humanScore = humanScore +1;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock.");
        computerScore = computerScore + 1;
    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors");
        computerScore = computerScore +1;
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("Tie! Try again.");
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore = humanScore +1;
    }
}

var humanSelection = getHumanChoice();
var computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
var round = 1;
function playGame() {
    while (round < 5) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        round++;
    }
    console.log(`Final score: You: ${humanScore} vs Computer: ${computerScore}.`)
}

playGame();
