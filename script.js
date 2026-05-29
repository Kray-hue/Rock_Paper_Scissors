const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const popup = document.getElementById('popup');
const win = document.getElementById('outcomeW');
const lose = document.getElementById('outcomeL');
const tie = document.getElementById('outcomeT');
const reset = document.getElementById('reset');
let computerChoice = "";
let playerPoints = 0;
let computerPoints = 0;
let ties = 0;

function computerPlay() {
    const computerChoiceNum = Math.floor(Math.random() * 3);
    if (computerChoiceNum === 0)
        computerChoice = "rock";
    else if (computerChoiceNum === 1)
        computerChoice = "paper";
    else
        computerChoice = "scissors";

}

rockBtn.addEventListener('click', () => {
    computerPlay();
    if (computerChoice === "rock"){
        popup.innerHTML = `🤖:<h1> ✊ </h1><br> It's a tie!`;
        ties++;
        tie.innerHTML = `${ties}`;
    }
    else if (computerChoice === "paper"){
        popup.innerHTML = `🤖:<h1> ✋ </h1><br> You lose!`;
        computerPoints++;
        lose.innerHTML = `${computerPoints}`;
    }
    else{
        popup.innerHTML = `🤖:<h1> ✌️ </h1><br> You win!`;
        playerPoints++;
        win.innerHTML = `${playerPoints}`;
    }
});

paperBtn.addEventListener('click', () => {
    computerPlay();
    if (computerChoice === "paper"){
        popup.innerHTML = `🤖:<h1> ✋ </h1><br> It's a tie!`;
        ties++;
        tie.innerHTML = `${ties}`;
    }
    else if (computerChoice === "scissors"){
        popup.innerHTML = `🤖:<h1> ✌️ </h1><br> You lose!`;
        computerPoints++;
        lose.innerHTML = `${computerPoints}`;
    }
    else{
        popup.innerHTML = `🤖:<h1> ✊ </h1><br> You win!`;
        playerPoints++;
        win.innerHTML = `${playerPoints}`;
    }
});

scissorsBtn.addEventListener('click', () => {
    computerPlay();
    if (computerChoice === "scissors"){
        popup.innerHTML = `🤖:<h1> ✌️ </h1><br> It's a tie!`;
        ties++;
        tie.innerHTML = `${ties}`;
    }
    else if (computerChoice === "paper"){
        popup.innerHTML = `🤖:<h1> ✋ </h1><br> You lose!`;
        computerPoints++;
        lose.innerHTML = `${computerPoints}`;
    }
    else{
        popup.innerHTML = `🤖:<h1> ✊ </h1><br> You win!`;
        playerPoints++;
        win.innerHTML = `${playerPoints}`;
    }
});

reset.addEventListener('click', () => {
    popup.innerHTML = "";
    win.innerHTML = "";
    lose.innerHTML = "";
    tie.innerHTML = "";
    playerPoints = 0;
    computerPoints = 0;
    ties = 0;
});