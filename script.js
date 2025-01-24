let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


genCompChoice=()=>{
  const options=["Rock","Paper","Scissors"];
  const randIdx=Math.floor(Math.random()*3);
  return options[randIdx];
};

const drawGame = () =>{
  
  msg.innerText="Game was Draw Play again";
  msg.style.backgroundColor="#081b31";

};

const showWinner=(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`you win! your ${userChoice} beats  ${compChoice}`;
  msg.style.backgroundColor="green";

  }else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`you lost.${compChoice} beats your ${userChoice}`;
  msg.style.backgroundColor="red";


  }
};

const playGame=(userChoice)=>{
  
  //generate comp choice
  const compChoice = genCompChoice();
  //console.log("comp choice=",compChoice);

  if(userChoice===compChoice){
    //draw game
    drawGame();
  }else{
    let userWin=true;
    if(userChoice==="Rock"){
      //scissors,paper
      userWin=compChoice==="Paper"?false:true;
    }else if(userChoice==="Paper"){
      //rock,scissors
      userWin=compChoice==="Scissors"?false:true
    }else{
      //rock,paper
      userWin=compChoice==="Rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userChoice=choice. querySelector("img").getAttribute("id");
       playGame(userChoice);

    });
});