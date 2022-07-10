const options = ["rock", "paper", "scissors"]
const rounds = 5;
var computerScore = 0;
var playerScore = 0;


function playerPlay() {
    let playerSelection = prompt("Your turn");
    if (playerSelection === null) {
        prompt("Please enter a valid option.");
    } else if (!options.includes(playerSelection.toLowerCase())) {
        prompt("Please enter a valid option.");
    } else {
        return playerSelection.toLowerCase();
    }
}

function computerPlay() {
    // Randomly select one element from options.
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {

    if (computerSelection === playerSelection) {
        return "Draw!";
    }

    else {
        if (computerSelection === "rock") {
            if (playerSelection === "paper") {
                playerScore++;
                return "You win, paper beats rock.";
            }
            else {
                computerScore++;
                return "You lose, rock beats scissors.";
            }
        }

        else if (computerSelection === "paper") {
            if (playerSelection === "scissors") {
                playerScore++;
                return "You win, scissors beat paper.";
            }
            else {
                computerScore++;
                return "You lose, paper beats rock.";
            }
        }

        else {
            if (playerSelection === "rock") {
                playerScore++;
                return "You win, rock beats scissors.";
            }
            else {
                computerScore++;
                return "You lose, scissors beat paper.";
            }
        }
    }
}

function winner() {
    if (computerScore === playerScore) {
        return "Draw, no winner!";
    }
    else if (playerScore > computerScore) {
        return "You win the game!";
    } else {
        return "Computer wins the game!";
    }
}

function game() {
    for (let i = 0; i < rounds; i++) {
        console.log(playRound(playerPlay(), computerPlay()));
    }
    console.log(winner());
}

game();
