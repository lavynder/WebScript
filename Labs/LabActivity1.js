// ROCK, PAPER, SCISSORS

// GETTING USER INPUT AND STORING IN userSelection
// toUpperCase IS USED TO ACCOUNT FOR INPUT VARIABILITY
let userSelection = prompt('CHOOSE AN OPTION [ROCK|PAPER|SCISSORS]:').toUpperCase()

// GENERATING A RANDOM NUMBER BETWEEN 0 AND 1 AND STORITING IT IN computerSelection
let computerSelection = Math.random()

// DISPLAYING THE userSelection AND computerSelection
console.log(userSelection)
console.log(computerSelection)

// USES NESTED if STATEMENTS TO DETERMINE THE OUTCOME OF THE GAME
// FIRST THE PROGRAM DETERMINES computerSelections CHOICE, 
// THEN CHOOSES THE APPROPRIATE OUTCOME DEPENDING ON THE USER'S CHOICE

// computerSelection IS LESS THAN 0.34, SO COMPUTER CHOOSES PAPER
if(computerSelection <= 0.34) {
    if (userSelection == 'ROCK') {
        // DISPLAYS OUTCOME OF THE GAME
        console.log('Computer Wins')
    }
    else if (userSelection == 'PAPER') {
        // DISPLAYS OUTCOME OF THE GAME
        console.log('It\'s a tie')
    }
    else if(userSelection == 'SCISSORS') {
        // DISPLAYS OUTCOME OF THE GAME
        console.log('User Wins')
    }
}
// computerSelection IS BETWEEN 0.35 AND 0.67, SO COMPUTER CHOOSES SCISSORS
else if (computerSelection >= 0.35 && computerSelection <= 0.67){
    if (userSelection == 'ROCK') {
        // DISPLAYS OUTCOME OF THE GAME
        console.log('User Wins')
    }
    else if (userSelection == 'PAPER') {
        // DISPLAYS OUTCOME OF THE GAME
        console.log('Computer Wins')
    }
    else if(userSelection == 'SCISSORS') {
        // DISPLAYS OUTCOME OF THE GAME
        console.log('It\'s a tie')
    }
}
// computerSelection IS GREATER THAN 0.68, SO COMPUTER CHOOSES ROCK
else if (computerSelection >= 0.68) {
    if (userSelection == 'ROCK') {
        // DISPLAYS OUTCOME OF THE GAME
        console.log('It\'s a tie')
    }
    else if (userSelection == 'PAPER') {
        // DISPLAYS OUTCOME OF THE GAME
        console.log('User Wins')
    }
    else if(userSelection == 'SCISSORS') {
        // DISPLAYS OUTCOME OF THE GAME
        console.log('Computer Wins')
    }
}