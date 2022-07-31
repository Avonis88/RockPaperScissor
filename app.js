//let Computer choose between (a)Rock (b)Paper and (c)Scissor

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
 /*    if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else randomNumber === 2;
  return "Scissor";
 */
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
    default:
      return "Scissor";
  }
}

/* alert(getComputerChoice()); */

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Its a Tie";
    }
    if (computerSelection === "Scissor") {
        return "You Win! Rock beats Scissor"
    }
    else {
        return "You Loose! Paper beats Scissor"
    }
}   
    

    
    /* Rock > Scissors, Rock < Paper, */



const playerSelection = "roCk".toUpperCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))