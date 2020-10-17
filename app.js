let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("Rock");
const paper_div=document.getElementById("Paper");
const restart_div=document.getElementById("restart");
const scissor_div=document.getElementById("Scissors");
const userSmallWord="user".fontsize(3).sub();
const compSmallWord="comp".fontsize(3).sub();

function initialize(){
     userScore=0; 
     computerScore=0;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
}


function main(){
    rock_div.addEventListener('click',() => game("Rock"))
    paper_div.addEventListener('click',() => game("Paper"))
    scissor_div.addEventListener('click',() => game("Scissors"))
    restart_div.addEventListener('click',() => initialize())
}
main();

function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":win(userChoice,computerChoice);
                  break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":lose(userChoice,computerChoice);
                   break;
        default:draw(userChoice,computerChoice);
    }
}

function getComputerChoice(){
    const choices=['Rock','Paper','Scissors'];
   return (choices[Math.floor(Math.random()*3)]);
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML=`${user}${userSmallWord} beats ${computer}${compSmallWord}.You win!`
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'),300);
}

function lose(user,computer){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${user}${userSmallWord} loses to ${computer}${compSmallWord}.You lost...`
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'),300);
}

function draw(user,computer){
    result_p.innerHTML=`${user}${userSmallWord} equals ${computer}${compSmallWord}.It's a draw.`
    document.getElementById(user).classList.add('white-glow');
    setTimeout(() => document.getElementById(user).classList.remove('white-glow'),300);
}