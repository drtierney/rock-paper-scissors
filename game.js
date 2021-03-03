//Initialise all variables
const choices = ['rock', 'paper', 'scissors'];
let computerSelection = "";
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;
let roundMessage = "";
let roundNo = 0;
//Only buttons on screen are Rock, Paper, Scissors
const buttons = document.querySelectorAll('button');

//Could be updated to include other matchups
const matchups = {
    'rock' : 'scissors',
    'paper' : 'rock',
    'scissors' : 'paper'
}

//Makes Computer pick random choice
function computerInput(){
    return choices[Math.floor(Math.random() * choices.length)];
}

//Play one round and return result
function playRound(playerSelection, computerSelection){
    console.log("ROUND: " + (roundNo));
    console.log("COMPUTER: " + computerSelection);
    console.log("PLAYER: " + playerSelection);
    
    if (matchups[playerSelection] == computerSelection)
        {
            document.getElementById('player-score').textContent = ++playerScore;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    else if (matchups[computerSelection] == playerSelection)  
        {
            document.getElementById('computer-score').textContent = ++computerScore;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    else { 
            return `You Tie!`;
            }
}

//Either player or Computer Wins 5 rounds, reset the game
function resetGame(){
    alert(`Final score:\nPlayer: ${playerScore}\nComputer: ${computerScore}\nRounds: ${roundNo}`)
    playerScore = 0;
    computerScore = 0;
    roundNo = 0;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore
    document.getElementById('game-state').textContent = "GAME ON!!"
}

//Play game 
function playGame(playerInput){
    computerSelection = computerInput();
    playerSelection   = playerInput;
    roundNo++;
    roundMessage = `round #${roundNo}: ${playRound(playerSelection, computerSelection)}`;
    document.getElementById('game-state').textContent = roundMessage;
    if (playerScore == 5 || computerScore == 5){
        resetGame();
    }
}

//Listen for player pressing any buttons each round
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playGame(button.textContent.toLowerCase());
    });
  });