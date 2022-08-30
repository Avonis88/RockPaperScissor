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
  if (playerScore === 5) return "Player Wins!";
  else if (computerScore === 5)
  return "Computer Wins!" 
    switch (true) {
    case playerSelected == "rock" && computerSelection == "scissors":
      playerScore++;
      return "You win this round!";

    case playerSelected == "paper" && computerSelection == "rock":
      playerScore++;

      return "You win this round!";

    case playerSelected == "scissors" && computerSelection == "paper":
      playerScore++;

      return "You Win this round!";

    case playerSelected == "scissors" && computerSelection == "rock":
      computerScore++;
      return "You Lose this round!";

    case playerSelected == "rock" && computerSelection == "paper":
      computerScore++;

      return "You Lose this round!";

    case playerSelected == "paper" && computerSelection == "scissors":
      computerScore++;

      return "You Lose this round!";

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
  //playRound("rock", getComputerChoice());
  result.textContent = playRound("rock", getComputerChoice());
  score.textContent = `${playerScore} - ${computerScore}`;
});

const btnpaper = document.querySelector("#paper");
btnpaper.addEventListener("click", (e) => {
  //playRound("paper", getComputerChoice());
  result.textContent = playRound("paper", getComputerChoice());
  score.textContent = `${playerScore} - ${computerScore}`;
});

const btnscissors = document.querySelector("#scissors");
btnscissors.addEventListener("click", (e) => {
  //playRound("scissors", getComputerChoice());
  result.textContent = playRound("scissors", getComputerChoice());
  score.textContent = `${playerScore} - ${computerScore}`;
});

const score = document.getElementById("score");
let playerScore = 0;
let computerScore = 0;
let playerScoreDiv = document.querySelector("#playerScore");
let computerScoreDiv = document.querySelector("#computerScore");
const result = document.querySelector("#result");
