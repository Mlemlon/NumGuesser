let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


/**
 * 
 * @returns random number between 0 to 9
 */
const generateTarget = () => {
    while(true) { 
     return Math.random() * 9
    }
}
/**
 * 
 * @param {guess made by a human} humanGuess 
 * @param {guess made by a robot} ComputerGuess 
 * @param {true number} SecretTarget 
 * function is supposed to determine who is the closest to the secret target
 */
const compareGuesses = (humanGuess, ComputerGuess, SecretTarget) => {
    let x = Math.abs(SecretTarget - humanGuess);
    let y = Math.abs(SecretTarget - ComputerGuess)
    if(x < y) {
        return true;
    }
    else if( x == y) {
        return true
    }
    else {
        return false
    }
}
// Function that is supposed to add score each time someone wins 
const updateScore = (winner) => {
    
    if(winner == "human") {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1
    
}

console.log(generateTarget())
console.log(compareGuesses(2,7,3))
updateScore('human')
advanceRound()
console.log(humanScore, computerScore)
console.log(currentRoundNumber)