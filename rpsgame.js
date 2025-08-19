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
    const winner = document.querySelector(`#roundWinner`);
    if ( user == "rock" ){
        if ( computer  == "rock" ){
            winner.textContent = "Tie!";
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
        if ( computer  == "paper" ){
            computerScore ++;
            winner.textContent = "Computer wins this round!";
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
        if ( computer  == "scissors" ){
            userScore ++;
            winner.textContent = "You won this round!";
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
    }
    if ( user == "paper" ){
        if ( computer  == "paper" ){
            winner.textContent = "Tie!";
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
        if ( computer  == "scissors" ){
            computerScore ++;
            winner.textContent = "Computer wins this round!";
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
        if ( computer  == "rock" ){
            userScore ++;
            winner.textContent = "You won this round!";
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
    }
    if ( user == "scissors" ){
        if ( computer  == "scissors" ){
            winner.textContent = "Tie!";
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
        if ( computer  == "rock" ){
            computerScore ++;
            winner.textContent = "Computer wins this round!";
            score.textContent = "You " + userScore + ":" + computerScore + " Computer";
        }
        if ( computer  == "paper" ){
            userScore ++;
            winner.textContent = "You won this round!";
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





