// ROCK, PAPER, SCISSORS

// GETTING USER INPUT AND STORING IN userSelection
// toUpperCase IS USED TO ACCOUNT FOR INPUT VARIABILITY
let userSelection = prompt('CHOOSE AN OPTION [ROCK|PAPER|SCISSORS]:').toUpperCase()

// GENERATING A RANDOM NUMBER BETWEEN 0 AND 1 AND STORITING IT IN computerSelection
let computerSelection = Math.random()

// DISPLAYING THE userSelection AND computerSelection
console.log(userSelection)
console.log(computerSelection)

// USING if STATEMENTS TO DETERMINE THE OUTCOME OF THE GAME
// computerSelection CHOOSES PAPER
if(computerSelection <= 0.34) {
    if (userSelection == 'ROCK') {
        console.log('Computer Wins')
    }
    else if (userSelection == 'PAPER') {
        console.log('It\'s a tie')
    }
    else if(userSelection == 'SCISSORS') {
        console.log('User Wins')
    }
}
// computerSelection CHOOSES SCISSORS
else if (computerSelection >= 0.35 && computerSelection <= 0.67){
    if (userSelection == 'ROCK') {
        console.log('User Wins')
    }
    else if (userSelection == 'PAPER') {
        console.log('Computer Wins')
    }
    else if(userSelection == 'SCISSORS') {
        console.log('It\'s a tie')
    }
}
// computerSelection CHOOSES ROCK
else if (computerSelection >= 0.68) {
    if (userSelection == 'ROCK') {
        console.log('It\'s a tie')
    }
    else if (userSelection == 'PAPER') {
        console.log('User Wins')
    }
    else if(userSelection == 'SCISSORS') {
        console.log('Computer Wins')
    }
}