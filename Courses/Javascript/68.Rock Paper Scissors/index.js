const choices=["rock","paper","scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerscoreDisplay=document.getElementById("playerscoreDisplay");
const computerscoreDisplay=document.getElementById("computerscoreDisplay");
let playerScore=0;
let computerScore=0;
function playgame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerChoice===computerChoice){
        result="its a tie!";

    }
    else{
        switch(playerChoice){
            case "rock":
            result=(computerChoice==="scissors")?"You win!":"You lose";
            break;
            case "paper":
            result=(computerChoice==="rock")?"You win!":"You lose";
            break;
            case "scissors":
            result=(computerChoice==="paper")?"You win!":"You lose";

            break;
        }}
        playerDisplay.textContent=`Player ${playerChoice}`;
        computerDisplay.textContent=`Computer ${computerChoice}`;
        resultDisplay.textContent=result;
        resultDisplay.classList.remove("greentext","redtext");
        switch(result){
            case "You win!":
                resultDisplay.classList.add("greentext");
                playerScore++;
                playerscoreDisplay.textContent=playerScore;

                break;
            case "You lose":
                resultDisplay.classList.add("redtext");
                computerScore++;
                computerscoreDisplay.textContent=computerScore;
                break;
        }
    }
    

