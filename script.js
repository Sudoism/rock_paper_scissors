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

function playRound(playerSelection, computerSelection){

    let roundResult = "";

    if (playerSelection === computerSelection){
        roundResult = "Draw";
    }

    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "scissors":
                    roundResult = "Victory";
                    break;
                case "paper":
                    roundResult = "Defeat";
                    break;
            }
        case "scissors":
            switch(computerSelection) {
                case "paper":
                    roundResult =  "Victory";
                    break;
                case "rock":
                    roundResult =  "Defeat";
                    break;
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    roundResult =  "Victory";
                    break;
                case "scissors":
                    roundResult =  "Defeat";
                    break;
            }
    }
    printRoundResult(playerSelection + " vs " + computerSelection + ". " + roundResult +"!");
    return roundResult;
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


function updateRound(player) {
    let computer = computerPlay();
    let result = playRound(player, computer)

    switch(result){
        case "Victory":
            playerScore += 1;
            break;
        case "Defeat":
            computerScore += 1;
            break;
        default:
            break;
    }

    roundsCounter += 1;
    printGameResult(playerScore, computerScore, roundsCounter)

    if (roundsCounter === rounds) {
        resetGame();
    }
}

function printRoundResult(result){
    const resultDiv = document.querySelector(".result");
    resultDiv.textContent = `${result}`
}

function printGameResult(playerScore, computerScore, roundsCounter){
    const resultTotalDiv = document.querySelector(".resultTotal");
    resultTotalDiv.textContent = `you: ${playerScore} computer: ${computerScore} round ${roundsCounter}`
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click', () => {
    updateRound("rock", computerPlay());
});

paper.addEventListener('click', () => {
    updateRound("paper", computerPlay());
});

scissors.addEventListener('click', () => {
    updateRound("scissors", computerPlay());
});

