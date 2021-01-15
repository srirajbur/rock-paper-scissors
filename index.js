//Functions
function computerPlay(){
    const arr = ['rock', 'paper', 'scissors']
    let random = Math.round(Math.random() * 2)
    return arr[random]
}

let computerScore = 0
let playerScore = 0

function playRound(playerSelection, computerSelection){
    computerSelection = computerSelection.toLowerCase()
    playerSelection = playerSelection.toLowerCase()
    console.log(computerSelection)
    console.log(playerSelection)
    //computer winning
    if(
        (computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissors' && playerSelection === 'paper')
    ){
        computerScore++
        return `${computerSelection} beats ${playerSelection}, Computer Wins!`          //player winning
    } else if(
         (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        playerScore++
        return `You Win! ${playerSelection} beats ${computerSelection}`
        //tie
    } else if(
        (computerSelection === 'scissors' && playerSelection === 'scissors') || (computerSelection === 'paper' && playerSelection === 'paper') || (computerSelection === 'rock' && playerSelection === 'rock')
    ){
        return `It's a tie`
    }
}

function whoWins(){
    let endText = `Reload to play another match`
    if(computerScore > playerScore){
        return `🤖 wins this match!`
    } else if(playerScore > computerScore){
        return `You win this match!`
    } else{
        return `Its a tie match!`
    }
}

function reset(){
    computerScore = 0;
    playerScore = 0;
}


//Selectors
const btns = document.querySelectorAll('.btn');
const summary = document.querySelector('.summary');
const playerResult = document.querySelector('.player');
const computerResult = document.querySelector('.computer');


//Events
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){        
        const playerSelection = btn.id;
        let result = playRound(playerSelection, computerPlay());
        playerResult.textContent = `Player: ${playerScore}`;
        computerResult.textContent = `Computer: ${computerScore}`;
        if(computerScore >= 5 || playerScore >= 5){
            const winner = whoWins();
            summary.style.color = "red"
            summary.textContent = winner;
            reset()
        } else {
            summary.style.color = "black"
            summary.textContent = result;
        }
    })
})  



