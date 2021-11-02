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
        let play = prompt().toLowerCase();

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
        return "its a draw!"
    }

    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "scissors":
                    return "You win! Rock beat scissors.";
                case "paper":
                    return "You loose! Paper beat rock.";
            }
        case "scissors":
            switch(computerSelection) {
                case "paper":
                    return "You win! Scissors beats paper.";
                case "rock":
                    return "You loose! Rock beats scissors.";
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return "You win! Paper beats rock.";
                case "scissors":
                    return "You loose! Scissors beats paper.";
            }
    }
}