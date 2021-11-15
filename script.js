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

function playerPlay(){
     
    let keepAsking = true;

    while(keepAsking){
        let play = prompt("Choose rock, paper or scissorsƒ").toLowerCase();

        switch(play) {
            case "rock":
                keepAsking = false;
                return "rock";
            case "paper":
                keepAsking = false;
                return "paper";
            case "scissors":
                keepAsking = false;
                return "scissors";
            default: 
                alert("invalid input");
        }
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "draw"
    }

    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "scissors":
                    return "You played rock, Computer played scissors. Victory!";
                case "paper":
                    return "You played rock, Computer played paper. Defeat!";
            }
        case "scissors":
            switch(computerSelection) {
                case "paper":
                    return "You played scissors, Computer played paper. Victory!";
                case "rock":
                    return "You played scissors, Computer played rock. defeat!";
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return "You played paper, Computer played rock. Victory!";
                case "scissors":
                    return "You played paper, Computer played scissors. Defeat!";
            }
    }
}

function game() {
    const rounds = 5;
    let roundsCounter = 0;
    let computerScore = 0;
    let playerScore = 0;
    let keepPlaying = true;

    while(keepPlaying){
        let player = playerPlay();
        let computer = computerPlay();
        alert("you choose " + player + " and computer chose " + computer);
        let result = playRound(player, computer)

        switch(result){
            case "win":
                alert("you win!")
                playerScore += 1;
                break;
            case "loose":
                alert("you loose!")
                computerScore += 1;
                break;
            default:
                alert("its a draw")
                break;

        }

        roundsCounter += 1;

        alert("Rounds played: " + roundsCounter + ". Your score is " + playerScore 
            + " and computers score is " + computerScore + ".");

        if(roundsCounter === rounds){
            keepPlaying = false;
            alert("Game over")
            break;
        }


    }
}

function printResult(result){
    const resultDiv = document.querySelector(".result");
    resultDiv.textContent = `${result}`
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click', () => {
    printResult(playRound("rock", computerPlay()));
});

paper.addEventListener('click', () => {
    printResult(playRound("paper", computerPlay()));
});

scissors.addEventListener('click', () => {
    printResult(playRound("scissors", computerPlay()));
});

