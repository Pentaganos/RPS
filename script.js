//Get Computer Choice using math.random which returns a number then convert that number to rock paper or scissors

function getComputerChoice() {
    let randomComputerInt = Math.floor(Math.random() * 3);

    let getComputerChoiceString;

    switch(randomComputerInt) {
        case 0:
            getComputerChoiceString = "rock";
            break;
        case 1:
            getComputerChoiceString = "paper";
            break;
        case 2:
            getComputerChoiceString = "scissors";
            break;
        default:
            getComputerChoiceString = "INVALID";
    }
    console.log(getComputerChoiceString)
    return getComputerChoiceString;
}

// console.log(getComputerChoice());


// Get human choice from an input (prompt) there is no sanitization on this.
function getHumanChoice() {
    let getHumanChoiceString = prompt("Please enter either Rock, Paper or Scissors");
//convert to lower case
    getHumanChoiceString = getHumanChoiceString.toLocaleLowerCase();
    return getHumanChoiceString;
}

//  console.log(getHumanChoice());


// settings human and computer score to 0
let humanScore=0;
let computerScore=0;



//plays 5 rounds of the game.
function playgame() {
    // settings human and computer score to 0
    let humanScore=0;
    let computerScore=0;

    for (let index = 0; index < 5; index++) {

        function playRound(humanChoice, computerChoice) {
            if ((humanChoice === computerChoice) ||
                (computerChoice === humanChoice)) {
                console.log("Tie!");
            } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                       (humanChoice === "paper" && computerChoice === "rock") ||
                       (humanChoice === "scissors" && computerChoice === "paper")) {
                console.log("You Win! " + humanChoice + " beats " + computerChoice + ".");
                humanScore++;
            } else {
                console.log("You Lose! " + computerChoice + " beats " + humanChoice + ".");
                computerScore++;
            }
        }

        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        console.log("Your score is " + humanScore + " Computers score is " + computerScore);
    }
}

playgame();