const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerText = userChoice
   generateComputerChoice()
   getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length +1)
    console.log(randomNumber);

    if (randomNumber === 1){
        computerChoice ='rock'
    }
    if (randomNumber === 2){
        computerChoice ='scissors'
    }
    if (randomNumber === 3){
        computerChoice ='paper'
    }
    computerChoiceDisplay.innerText = computerChoice;
}

function getResult(){
    if (computerChoice === userChoice){
    result = 'Its a draw'
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You win, paper beats rock'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You lose, rock beats scissors'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You win, scissors beats paper'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You lose, paper beats rock'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You win, rock beats scissors'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You lose, scissors beats paper'
    }
    
    resultDisplay.innerText = result
   
    }
