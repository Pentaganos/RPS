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


// plays one round of the whole game.
function playRound(humanChoice, computerChoice) {
    if ((humanChoice === computerChoice) ||
        (computerChoice === humanChoice)) {
        console.log("Tie!");
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
               (humanChoice === "Paper" && computerChoice === "Rock") ||
               (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log("You Win! " + humanChoice + " beats " + computerChoice + ".");
    } else {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice + ".");
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();


playRound(humanSelection, computerSelection);


//plays 5 rounds of the game.
function playgame() {
    for (let index = 0; index < 5; index++) {
        playRound(humanSelection, computerSelection);        
    }
}