function computerChoice (){
    probability = Math.random() ;
    
    if ( probability < 0.333 ) {
        return `rock` ;
    } else if ( probability >= 0.333 && probability < 0.666 ) {
        return `paper`;
    } else {
        return `scissors` ;
    }
}
function userChoice (){
    let input = prompt("What will you choice be?")
    input = input.toLowerCase();
    return input;
}



function playGame (){
    let userScore = 0;
    let computerScore = 0;


    function playRound ( user,computer ){
        if ( user == "rock" ){
            if ( computer  == "rock" ){
                console.log("Tie!");
            }
            if ( computer  == "paper" ){
                computerScore ++;
                console.log("Computer Wins This Round!");
            }
            if ( computer  == "scissors" ){
                userScore ++;
                console.log("You Win This Round!");
            }
        }
        if ( user == "paper" ){
            if ( computer  == "paper" ){
                console.log("Tie!");
            }
            if ( computer  == "scissors" ){
                computerScore ++;
                console.log("Computer Wins This Round!");
            }
            if ( computer  == "rock" ){
                userScore ++;
                console.log("You Win This Round!");
            }
        }
        if ( user == "scissors" ){
            if ( computer  == "scissors" ){
                console.log("Tie!");
            }
            if ( computer  == "rock" ){
                computerScore ++;
                console.log("Computer Wins This Round!");
            }
            if ( computer  == "paper" ){
                userScore ++;
                console.log("You Win This Round!");
            }
        }
    }


    for ( i = 0; i < 5; i++ ){
        playRound(userChoice(), computerChoice());
        console.log("Your score: " + userScore);
        console.log("Computer score: " + computerScore);
    }


    if (userScore > computerScore){
        console.log("You Win!");
    } else if (userScore == computerScore){
        console.log("Draw!")
    }  else {
        console.log("You Lose Try Again");
    }
}

playGame();
