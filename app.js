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
      return "rock";
    case 1:
      return "paper";
    case 2:
    default:
      return "scissors";
  }
}


function playRound(playerSelected, computerSelection) {
      switch (true) {
      case playerSelected == "rock" && computerSelection == "scissors":
        return "You win!";
        break;
      case playerSelected == "paper" && computerSelection == "rock":
        return "You win!";
        break;
      case playerSelected == "scissors" && computerSelection == "paper":
      return "You Win!";
      break;
      case playerSelected == "scissors" && computerSelection == "rock":
        return "You Loose!";
        break;
      case playerSelected == "rock" && computerSelection == "paper":
        return "You Loose!";
        break;
      case playerSelected == "paper" && computerSelection == "scissors":
      return "You Loose!";
      break;
      case playerSelected == "scissors" && computerSelection == "scissors":
        return "Its a tie";
        break;
        case playerSelected == "rock" && computerSelection == "rock":
          return "Its a tie";
          break;
        case playerSelected == "paper" && computerSelection == "paper":
        return "Its a tie";
        break;
        default:
          return "no cheating";      

     }
}   
 
   
    function game() {
      for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Paper, Scissors or Rock")
        let upPlayerChoice = playerSelection.toLowerCase()
        let computerChoice = getComputerChoice()
        let result = playRound(upPlayerChoice, computerChoice)
        alert(result)
      }
    }

const computerSelection = getComputerChoice();

