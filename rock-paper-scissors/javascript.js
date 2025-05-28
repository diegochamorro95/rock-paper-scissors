
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
const humanPoints = document.querySelector("#humanPoints");
const computerPoints = document.querySelector("#computerPoints");
const resultText = document.querySelector("#resultText");
var humanScore = 0;
var computerScore = 0;
let gameOver = false;


function playRound(humanChoice, computerChoice) {
    if (humanChoice == "paper" && computerChoice == "rock") {
        resultText.innerText = "You win! Paper beats rock.";
        humanScore = humanScore +1;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        resultText.innerText ="You lose! Scissors beats paper.";
        computerScore = computerScore +1;
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        resultText.innerText ="Tie! Try again.";
    }

    else if (humanChoice == "rock" && computerChoice == "rock") {
        resultText.innerText ="Tie! Try again.";
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        resultText.innerText ="You win! Rock beats scissors.";
        humanScore = humanScore +1;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        resultText.innerText ="You lose! Paper beats rock.";
        computerScore = computerScore + 1;
    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {
        resultText.innerText ="You lose! Rock beats scissors.";
        computerScore = computerScore +1;
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        resultText.innerText ="Tie! Try again.";
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        resultText.innerText ="You win! Scissors beats paper.";
        humanScore = humanScore +1;
    }
    humanPoints.textContent = `YOU: ${humanScore}`;
    computerPoints.textContent = `COMPUTER: ${computerScore}`;
    if (humanScore == 5) {
        resultText.innerText = "GAME OVER! YOU WON!";
        return;
    } else if (computerScore == 5) {
        resultText.innerText = "GAME OVER! YOU LOSE!";
        return;
    }

}
const rockButton = document.querySelector("#rockBtn");
const paperButton = document.querySelector("#paperBtn");
const scissorsButton = document.querySelector("#scissorsBtn");
let humanChoice = "";
function playGame() {
    rockButton.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
      
    });

    paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
       
    });

    scissorsButton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
       
    });  
}

playGame();



