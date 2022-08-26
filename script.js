'use strict';

const selectionButtons = document.querySelectorAll(".selection")
let playerSelection
let computerSelection
let playerScore = document.getElementById("player-score")
let computerScore = document.getElementById("computer-score")
let resultText = document.getElementById("result-text")
document.querySelector("#newGame").style.display = "none";



selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", (e) => {
        playerSelection = selectionButton.id
        game()
    })   
});
function computerPlay () {
    computerSelection = Math.floor(Math.random() * 3)
    if (computerSelection === 1){
        computerSelection = "rock"
    } else if (computerSelection === 2){
        computerSelection = "paper"
    } else {
        computerSelection = "scissors"
    }
    return computerSelection     
}

function game(){
    computerPlay();
    if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore.innerText++;
        resultText.innerText = "Player wins";
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore.innerText++;
        resultText.innerText = "Player wins";
     } else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore.innerText++;
        resultText.innerText = "Player wins";
     } else if (computerSelection === playerSelection){
        resultText.innerText = "DRAW";
    } 
     else {
         computerScore.innerText++;
         resultText.innerText = "Computer wins";
     };
     gameIsOver()
        }

function gameIsOver() {
    if(playerScore.innerText >= 5){
        resultText.innerText = "YOU WON!"
    } else if(computerScore.innerText >= 5){
        resultText.innerText = "YOU LOST! GAME IS OVER"
    }
    startNewGame()
}



function startNewGame() {
    const newGameButton = document.querySelector("#newGame")
    if(playerScore.innerText >= 5){
        newGameButton.style.display = "block";
        document.querySelector(".score-player-computer").style.display = "none"
        selectionButtons.forEach(selectionButton => {
            selectionButton.style.display = "none"
        })
    } else if(computerScore.innerText >= 5){
        newGameButton.style.display = "block";
        document.querySelector(".score-player-computer").style.display = "none";
        selectionButtons.forEach(selectionButton => {
            selectionButton.style.display = "none"
        })
    } else{
        newGameButton.style.display = "none";
    }

    newGameButton.addEventListener("click", () =>{
        resultText.innerText = "CHOOSE YOUR WEAPON"
        playerScore.innerText = 0
        computerScore.innerText = 0
        resultText.style.display = "block"
        document.querySelector(".score-player-computer").style.display = "flex"
        newGameButton.style.display = "none";
        selectionButtons.forEach(selectionButton => {
            selectionButton.style.display = "inline"
        })
    })
}

