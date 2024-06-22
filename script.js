//event listener for each button to play the game and stores the playerselection from the button clicked
let playerSelection;
let computerSelection;
let humanScore=0;
let computerScore=0;
let roundNumber=0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        roundNumber++;
        updateScore();
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
            } else if (humanScore < computerScore) {
            } else {
            }
            humanScore=0;
            computerScore=0;
            roundNumber=0;
        }
    });
});

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
    return getComputerChoiceString;
}

//plays a round of the game
function playRound(humanChoice, computerChoice) {
    if ((humanChoice === computerChoice) ||
        (computerChoice === humanChoice)) {
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
    } else {
        computerScore++;
    }
}

function updateScore() {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.style.textAlign = 'center';
    content.classList.add('content');
    content.textContent = "Your score is " + humanScore + " Computers score is " + computerScore;
    // code for winner after x rounds
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            content.textContent = "You Win! " + humanScore + " to " + computerScore;
        } else if (humanScore < computerScore) {
            content.textContent = "You Lose! " + computerScore + " to " + humanScore;
        } else {
            content.textContent = "Tie! " + humanScore + " to " + computerScore;
        }
        humanScore=0;
        computerScore=0;
        roundNumber=0;
    }
    container.appendChild(content);
}

updateScore();