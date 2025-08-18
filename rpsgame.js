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



let option = document.querySelector(`#gamebtn`);
option.addEventListener(`click`, (e) => {
    let target = e.target;

    switch(target.id) {
        case `rock`:
            playRound ("rock",computerChoice());
            break;
        case `paper`:
            playRound("paper",computerChoice());
            break;
        case `scissors`:
            playRound("scissors",computerChoice());
    }
});





