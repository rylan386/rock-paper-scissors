const computerSelection = computerPlay()
const playerSelection = prompt('rock, paper, or scissors: ')


function computerPlay() {
    let game = ['rock', 'paper', 'scissors'];
    let words = game[Math.floor(Math.random() * game.length)];
    return words;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Computer chose ${computerSelection} \nDraw`;
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissors' && computerSelection == 'paper')) {
                return `Computer chose ${computerSelection} \nYou Won!`;
            }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'rock')) {
                return `Computer chose ${computerSelection} \nYou lost:(`;
            }
    else {
        return 'Please enter a valid choice.';
    }
        
}

console.log(playRound(playerSelection, computerSelection))
