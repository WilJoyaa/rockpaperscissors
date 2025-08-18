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



let computerScore = 0;
let userScore = 0;

function playRound ( user,computer ){
    const score = document.querySelector(`#currentScore`);
    if ( user == "rock" ){
        if ( computer  == "rock" ){
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
        if ( computer  == "paper" ){
            computerScore ++;
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
        if ( computer  == "scissors" ){
            userScore ++;
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
    }
    if ( user == "paper" ){
        if ( computer  == "paper" ){
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
        if ( computer  == "scissors" ){
            computerScore ++;
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
        if ( computer  == "rock" ){
            userScore ++;
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
    }
    if ( user == "scissors" ){
        if ( computer  == "scissors" ){
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
        if ( computer  == "rock" ){
            computerScore ++;
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
        if ( computer  == "paper" ){
            userScore ++;
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
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





