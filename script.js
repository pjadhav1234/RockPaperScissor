let userscore=0;
let compscore=0;
const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#MSG");
const userscorePara =document.querySelector("#user");
const compscorePara =document.querySelector("#comp");

const genCompChoice = () =>{
   const options = ["rock" , "paper" , "scissors"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];
}
const drawGame =() =>{
   console.log("Draw!!");
   msg.innerText = "DRAW!";
   msg.stylee.backgraundColor = "black";
};

const showwinner=(userwin)=>{
 if(userwin){
   userscore++;
   userscorePara.innerText=userscore;
   console.log("you win!!");
   msg.innerText = "YOU WIN!";
   msg.stylee.backgraundColor = "yellow";
 }
 else{
   compscore++;
   compscorePara.innerText=compscore;
   console.log("you lose!");
   msg.innerText="YOU LOSE.";
   msg.style.backgraundColor = "red";
 }
}
const playGame =(choiceuser)=>{
   console.log("user choice = ",choiceuser);
   const CompChoice = genCompChoice();
   console.log("comp choice = ",CompChoice);
   
   if(choiceuser === CompChoice ){
     drawGame();
      
   }else{
      let userwin =true;
      if(choiceuser=="rock"){
         userwin = CompChoice==="paper"?false:true;
      }else if(choiceuser=="paper"){
         userwin=CompChoice==="scissors"?false:true;
      }else {
         userwin=CompChoice==="rock"?false:true;
      }
      showwinner(userwin,choiceuser,CompChoice);
   }

};


choices.forEach((choice) => {
   choice.addEventListener("click",()=>{
   const choiceuser = choice.getAttribute("id");
   playGame(choiceuser);
   }); 

});