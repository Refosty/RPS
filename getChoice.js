            function getComputerChoice(){

                const options = ["Rock", "Paper", "Scissors"];

                const choice = options[Math.floor(Math.random() * options.length)];
                
                    return choice.toLowerCase();
            }

            function getHumanChoice(){

               const humanInput = prompt("Rock Paper or Scissors?")

                return humanInput.toLowerCase();

            }


