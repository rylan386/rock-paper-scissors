let playerScore = 0;
let computerScore = 0;
let computerSelection = computerPlay();

//Converts player input to lower case
function lowerCase(str) {
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr;
}

//Computer randomly generates "rock", "paper", or "scissors"
function computerPlay() {
    let game = ['rock', 'paper', 'scissors'];
    let words = game[Math.floor(Math.random() * game.length)];
    return words;
}

//Plays a single round and tests wheather the computer or player won or lost
function playRound(playerSelection, computerSelection) {
    playerSelection = lowerCase(playerSelection);

    if (playerSelection == computerSelection) {
        return `You selected ${playerSelection} \nComputer chose ${computerSelection}`;
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissors' && computerSelection == 'paper')) {
                playerScore++;
                return `You selected ${playerSelection} \nComputer chose ${computerSelection}`;
            }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'rock')) {
                computerScore++;
                return `You selected ${playerSelection} \nComputer chose ${computerSelection}`;
            }
    else {
        return 'Please enter a valid choice.';
    }
}

//Displays win or lose status for the current round
function displayWinner() {
    if (playerScore == computerScore) {
        console.log('Draw');
    }
    else if (playerScore > computerScore) {
        console.log('You won!!');
    }
    else 
        console.log('sorry you lost:(');
}

//creates a loops to play 5 rounds and ask the player to chose an option
function game () {

    for (i=0; i<5; i++){
        playerSelection = prompt('rock, paper, or scissors?');
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player score: ${playerScore} | Computer score ${computerScore}`);
     }
    displayWinner();
}

game();