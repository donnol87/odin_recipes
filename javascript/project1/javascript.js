//version taken from a stackoverflow article : https://stackoverflow.com/questions/70069566/had-some-trouble-with-the-rock-paper-scissors-game-for-the-odin-project

let playerScore = 0;
let computerScore = 0;

// gives a random value from the array
function computerPlay() {
  let choice = ['rock', 'paper', 'scissors'];
  let randomPlay = Math.floor(Math.random() * choice.length);
  console.log(randomPlay);
  return choice[randomPlay]
  
  
}
// plays a round of a game
function round() {
  let computerChoice = computerPlay();
  let playerChoice = prompt('What do you choose?', '').toLowerCase();
  console.log(playerChoice);

  if (playerChoice === 'rock' & computerChoice === 'paper') {
    computerScore += 1;
    alert('You lose, paper beats rock!');
  } else if (playerChoice === 'paper' & computerChoice === 'scissors') {
    computerScore += 1;
    alert('You lose, scissors beat paper!');
  } else if (playerChoice === 'scissors' & computerChoice === 'paper') {
    computerScore += 1;
    alert('You lose, rock beats scissors!');
  } else if (playerChoice === 'rock' & computerChoice === 'scissors') {
    playerScore += 1;
    alert('You win, rock beats scissors!');
  } else if (playerChoice === 'paper' & computerChoice === 'rock') {
    playerScore += 1;
    alert('You win, paper beats rock!');
  } else if (playerChoice === 'scissors' & computerChoice === 'paper') {
    playerScore += 1;
    alert('You win, scissors beat paper!');
  }
  if (playerScore >= 3) {
    alert('You win the game!')
  } else if (computerScore >= 3) {
    alert('Computer wins the game!')
  }
}

//repeats rounds until someone wins the game
function game() {
  for (i = 1; playerScore < 3 && computerScore < 3; i++) {
    round();
  }
}
game();

//round();


