// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissor"]
const pDisplay = document.getElementById("playerDisplay");
const cDisplay = document.getElementById("computerDisplay");
const rDisplay = document.getElementById("resultDisplay");
const playerS = document.getElementById("playerScore");
const computerS = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ""

    if(playerChoice === computerChoice){
        result = "It's a Tie!"
    } else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!"
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!"
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!"
                break;
        } 
    }

    pDisplay.textContent = `Player: ${playerChoice}`;
    cDisplay.textContent = `Computer: ${computerChoice}`;
    rDisplay.textContent = result;
    rDisplay.classList.remove("lose", "playerWin", "tie")

    switch(result){
        case "You Win!":
            rDisplay.classList.add("playerWin")
            playerScore++
            playerS.textContent = playerScore
            break;
        case "You Lose!":
            rDisplay.classList.add("lose")
            computerScore++
            computerS.textContent = computerScore;
            break;
        case "It's a Tie!":
            rDisplay.classList.add("tie")
            break;    
    }

    if(playerScore === 3 || computerScore === 3){
        playerS.textContent = 0;
        computerS.textContent = 0;
        playerScore = 0;
        computerScore = 0;
        pDisplay.textContent = "Player: ";
        cDisplay.textContent = "Computer: "
        rDisplay.textContent = (playerScore === 3 ?
             "Congratulations You have won the series"
            : "Try Again, Computer has won the series")
    }
}