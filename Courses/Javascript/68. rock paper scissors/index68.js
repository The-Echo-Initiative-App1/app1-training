
const choices=["rock", "paper", "scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let playerScore=0;
let computerScore=0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result ="";
    if(playerChoice=== computerChoice){
        result="its a tie"
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice=== "scissors")? "you win": "you lose"
                break
                case "paper":
                result=(computerChoice=== "srock")? "you win": "you lose"
                break
                case "scissors":
                result=(computerChoice=== "paper")? "you win": "you lose"
                break
            }
    }
    playerDisplay.textContent=`player ${playerChoice}`;
    computerDisplay.textContent=`computer ${computerChoice}`;
    resultDisplay.textContent=result;

    resultDisplay.classList.remove("greentext", "redtext")
    switch(result){
        case "you win":
            resultDisplay.classList.add("greentext");
            playerScore++;
            playerScoreDisplay.textContent=playerScore
            break
        case "you lose":
            resultDisplay.classList.add("redtext");
            computerScore++;
            computerScoreDisplay.textContent=computerScore
            break
    }
}
