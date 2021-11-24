function computerPlay(){
    let choice = Math.floor(Math.random()*3+1);

    switch(choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3: 
            return "scissors";
    }
}

function playRound(playerOneSelection, playerTwoSelection){
    if (playerOneSelection === playerTwoSelection){
        roundResult = "Draw";
    }

    switch(playerOneSelection) {
        case "rock":
            switch(playerTwoSelection) {
                case "scissors":
                    roundResult = "Victory";
                    break;
                case "paper":
                    roundResult = "Defeat";
                    break;
            }
            break;
        case "scissors":
            switch(playerTwoSelection) {
                case "paper":
                    roundResult =  "Victory";
                    break;
                case "rock":
                    roundResult =  "Defeat";
                    break;
            }
            break;
        case "paper":
            switch(playerTwoSelection) {
                case "rock":
                    roundResult =  "Victory";
                    break;
                case "scissors":
                    roundResult =  "Defeat";
                    break;
            }
            break;
    }
    return roundResult;
}

//Determines winner of round, keeps track of rounds and returns a printable message of game status 
function playGame(playerSelection){

    if (roundsCounter === 0 ){
        printGameResult("");
    }
    let computerSelection = computerPlay();

    let roundResult = playRound(playerSelection, computerSelection);
    roundsCounter += 1;
    if (roundResult === "Victory") {
        playerScore += 1;
    } else if (roundResult === "Defeat") {
        computerScore +=1;
    } 

    result = `${playerSelection} vs ${computerSelection}. ${roundResult}! you: ${playerScore} computer: ${computerScore} round ${roundsCounter}`;
    printRoundResult(result);

    if (roundsCounter === rounds) {
        if(computerScore === playerScore) {
            gameResult = "The Game is a Tie..";
        }else if (computerScore > playerScore) {
            gameResult = "The Game is Lost." 
        } else {
            gameResult = "The Game is Won!"
        }
        printGameResult(gameResult);
        resetGame();
    }
}

const rounds = 5;
let roundsCounter = 0;
let computerScore = 0;
let playerScore = 0;

function resetGame() {
    roundsCounter = 0;
    computerScore = 0;
    playerScore = 0;
}

function printRoundResult(roundResult){
    const roundResultDiv = document.querySelector(".roundResult");
    roundResultDiv.textContent = `${roundResult}`
}

function printGameResult(gameResult){
    const gameResultDiv = document.querySelector(".gameResult");
    gameResultDiv.textContent = `${gameResult}`
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click', () => {
    playGame("rock");
});

paper.addEventListener('click', () => {
    playGame("paper");
});

scissors.addEventListener('click', () => {
    playGame("scissors");
});

