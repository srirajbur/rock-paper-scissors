function computerPlay(){
    const arr = ['rock', 'paper', 'scissors']
    let random = Math.round(Math.random() * 2)
    return arr[random]
}
let computerScore = 0
let playerScore = 0

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay().toLowerCase()
    playerSelection = playerSelection.toLowerCase()
    //computer winning
    if(
        (computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissors' && playerSelection === 'paper')
    ){
        computerScore++
        return `You Lose! ${computerSelection} beats ${playerSelection}`          //player winning
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

let playerSelection;

function all123(){
    playerSelection = prompt('Enter in your input five times')
}
const computerSelection = computerPlay();

function game(){
    for(let i = 0; i < 5; i++){
        all123()
        playRound(playerSelection, computerSelection)
    }

    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`)
    
    if(computerScore > playerScore){
        console.log(`Computer Wins!`)
    } else if(playerScore > computerScore){
        console.log('Player Wins!')
    } else{
        console.log(`Its a tie`)
    }
}
game()
playerScore = 0
computerScore = 0