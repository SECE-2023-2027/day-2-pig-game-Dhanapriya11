//1.get all the nodes from html
const againButton=document.querySelector(".again");
const num = document.querySelector(".number");
const guess= document.querySelector(".guess");
const message=document.querySelector(".message");   
const score=document.querySelector(".score");
const highscore=document.querySelector(".highscore");
const check=document.querySelector(".check");

//2.generate a random number and score
let random =Math.trunc(Math.random()*20)+1;
let scores=20;
console.log(random);
//3. check button functionality

const checkfunc=()=>{
   const guesss=Number(guess.value);
   console.log(guesss);


   //3.1 check user has entered a number or not 

      if(!guesss){
        message.textContent="Please enter a number";
      }
      else if(guesss===random){
        highscore.textContent=scores;
        document.querySelector("body").style.backgroundColor="green";
        num.textContent=random;
        message.textContent="Win";
        if (scores > highest) {
      highest = scores;
      highscore.textContent = highest;
    }
      }
      else {
    if (scores > 1) {
      message.textContent = guesss < random ? " Too Low!" : " Too High!";
      scores--;
      score.textContent = scores;
    } else {
      message.textContent = " You lost the game!";
      score.textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }

};
 check.addEventListener("click",checkfunc);

againButton.addEventListener("click", () => {
  scores = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  console.log(random);

  message.textContent = "Start guessing...";
  score.textContent = scores;
  guess.value = "";
  num.textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
});