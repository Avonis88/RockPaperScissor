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

    case playerSelected == "paper" && computerSelection == "rock":
      return "You win!";

    case playerSelected == "scissors" && computerSelection == "paper":
      return "You Win!";

    case playerSelected == "scissors" && computerSelection == "rock":
      return "You Loose!";

    case playerSelected == "rock" && computerSelection == "paper":
      return "You Loose!";

    case playerSelected == "paper" && computerSelection == "scissors":
      return "You Loose!";

    case playerSelected == "scissors" && computerSelection == "scissors":
      return "Its a tie";

    case playerSelected == "rock" && computerSelection == "rock":
      return "Its a tie";

    case playerSelected == "paper" && computerSelection == "paper":
      return "Its a tie";

    default:
      return "no cheating";
  }
}
const btnrock = document.querySelector("#rock");
btnrock.addEventListener("click", (e) => {
  playRound("rock", getComputerChoice());
  result.textContent = playRound("rock", getComputerChoice());
});

const btnpaper = document.querySelector("#paper");
btnpaper.addEventListener("click", (e) => {
  playRound("paper", getComputerChoice());
  result.textContent = playRound("paper", getComputerChoice());
});

const btnscissors = document.querySelector("#scissors");
btnscissors.addEventListener("click", (e) => {
  playRound("scissors", getComputerChoice());
  result.textContent = playRound("scissors", getComputerChoice());
});

const result = document.querySelector("#result");

const computerSelection = getComputerChoice();
