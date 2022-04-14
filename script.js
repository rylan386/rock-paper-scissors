let playerScore = 0;
let computerScore = 0;
const humanScore = document.getElementById("box1");
const comScore = document.getElementById("box2");
const rock2 = document.getElementById("rock2");
const paper2 = document.getElementById("paper2");
const scissors2 = document.getElementById("scissors2");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const results = document.getElementById("outcome");
const reset = document.getElementById("reset")
let computerSelection;
let playerSelection;

rock.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
});
paper.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
});
scissors.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
});
reset.addEventListener("click", () => {
    location.reload()
})

//Computer randomly generates "rock", "paper", or "scissors"
function computerPlay() {
    let words = ["rock", "paper", "scissors"];
    return words[Math.floor(Math.random() * words.length)]
}

//Plays a single round and tests wheather the computer or player won or lost
function playRound(playerSelection, computerSelection) {
    if (playerScore < 5 && computerScore < 5) {
    if ((playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "scissors")) {
            results.textContent = "Draw";
        }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
                playerScore++;
                humanScore.textContent = playerScore;
                results.textContent = "You won this round!";
            }
    else if ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")) {
                computerScore++;
                comScore.textContent = computerScore;
                results.textContent = "You lost this round:(";
            }
   if (computerSelection === "rock") {
    rock2.style.borderColor = "yellow";
    paper2.style.borderColor = null;
    scissors2.style.borderColor = null;
   }
   else if (computerSelection === "paper") {
    paper2.style.borderColor = "yellow";
    rock2.style.borderColor = null;
    scissors2.style.borderColor = null;
}
    else if (computerSelection === "scissors") {
    scissors2.style.borderColor = "yellow";
    paper2.style.borderColor = null;
    rock2.style.borderColor = null;
}
}

     if (playerScore == 5) {
        results.textContent = "You win the game!!"
        reset.style.visibility = "visible";
        }
    else if (computerScore == 5) {
        results.textContent = "You lost the game:("
        reset.style.visibility = "visible";
}
}
playRound()