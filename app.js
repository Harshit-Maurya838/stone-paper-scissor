const playerSign = document.querySelector(".player");
const computerSign = document.querySelector(".computer")
const gameComment = document.querySelector(".game_comment")
const buttons = document.querySelectorAll(".signs")

let playerS= "" , computerS= "";
const playerTurn = (turn) =>{
    if(turn == "stone"){
        playerSign.src = "img/Player_stone.png";
    }else if(turn == "paper"){
        playerSign.src = "img/player_paper.png"
    }else if(turn == "scissor"){
        playerSign.src = "img/player_scissor.png"
    }
    playerS = turn;
    setTimeout(()=>{
        computerTurn();
        checkWinner(computerS,playerS);
    },500);
}

const computerTurn= () =>{
    let a = "";
    let randomSign = (Math.floor(Math.random() * 3)) + 1;
    if(randomSign === 1){
        computerSign.src = "img/computer_stone.png"
        a = "stone";
    }else if(randomSign === 2){
        computerSign.src = "img/computer_paper.png"
        a = "paper";
    }else if(randomSign === 3){
        computerSign.src = "img/computer_scissor.png"
        a = "scissor";
    }
    console.log(randomSign)
    computerS = a;
}

const checkWinner = (computer,player) =>{
    if((computer == "stone" && player == "scissor") || (computer == "scissor" && player == "paper") || (computer == "paper" && player == "stone")){
        disableAllBtn();
        gameComment.innerText = "Ohh You Lose ! restart for next game."
    }else if(computer == player){
        disableAllBtn();
        gameComment.innerText = "Ohh Draw ! restart for next game."
    }else{
        disableAllBtn();
        gameComment.innerText = "Hurray You Won ! restart for next game."
    }
}

const resetGame = () =>{
    location.reload();
}

const disableAllBtn = () =>{
    for(let i = 0; i < buttons.length; i++){
        buttons[i].disabled = true;
    }
}