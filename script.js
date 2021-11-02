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


}