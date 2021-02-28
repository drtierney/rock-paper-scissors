const choices = ['rock', 'paper', 'scissors'];
let computerSelection = "";
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;
let roundMessage = "";
let finalScoreMessage = "";

function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function playerInput(){
    let input;
    do {
    input = prompt("Rock, Paper or Scissors? ");
    }
    while (!choices.includes(input.toLowerCase()));
    return input.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    //console.log("COMPUTER: " + computerSelection);
    //console.log("PLAYER: " + playerSelection);
    
    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
        )
        {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "scissors")
        )  
        {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    else { 
            return `You Tie!`;
            }
}

function game(){
    for (let i = 0; i < 5; i++){
    computerSelection = computerPlay();
    playerSelection   = playerInput();
    roundMessage = `round #${i+1}: ${playRound(playerSelection, computerSelection)}`;
    console.log(roundMessage);
    alert(roundMessage);
    }
    finalScoreMessage = `Final score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`;
    console.log(finalScoreMessage);
    alert(finalScoreMessage);
}

game();