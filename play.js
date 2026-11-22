let humanScore = 0;
let computerScore = 0;

            function playRound(humanChoice, computerChoice){

                getComputerChoice()
                getHumanChoice()

                if (humanChoice === computerChoice)
                {
                    console.log("You Tie!")
                    console.log("Your Score: " + humanScore)
                    console.log("Computer Score: " + computerScore)
                }
                else if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper"){

                    console.log("You Win!")
                    humanScore++;
                    console.log("Your Score: " + humanScore)
                    console.log("Computer Score: " + computerScore)
                }
                else{

                    console.log("You Loose!")
                    computerScore++;
                    console.log("Your Score: " + humanScore)
                    console.log("Computer Score: " + computerScore)
                }
            }
             const computerChoice = getComputerChoice();
             const humanChoice = getHumanChoice();

            playRound(humanChoice, computerChoice)
            