// variables for DOM manipulation

var headerEl = document.getElementById("header");
var startEl = document.getElementById("start");
var rulesEL = document.getElementById("rules");
var timerEl = document.getElementById("timer");
var questionsEL = document.getElementById("questions");
var questionOneEl = document.getElementById("questionOne");
var questionTwoEl = document.getElementById("questionTwo");
var questionThreeEl = document.getElementById("questionThree");
var questionFourEl = document.getElementById("questionFour");
var questionFiveEl = document.getElementById("questionFive");
var greatJobEl = document.getElementById("greatJob");
var textInitialsEl = document.getElementById("textInitials");
var gameOverEl = document.getElementById("gameOver");
var replayEl = document.getElementById("replay");
var scoreEl = document.getElementById("score");
var textInitialsEl = document.getElementById("textInitials")
var submitButtonEl = document.getElementById("submitButton")

var score = 0;
var timerEnd = 0;
var secondsRemaining = 60;

questionOneEl.style.display = "none";
questionTwoEl.style.display = "none";
questionThreeEl.style.display = "none";
questionFourEl.style.display = "none";
questionFiveEl.style.display = "none";
greatJobEl.style.display = "none";
gameOverEl.style.display = "none";

function penalty() {
  secondsRemaining = secondsRemaining-10;
}

function points(){
    score = score+5;
}
function pauseTime(){
    timerEnd = secondsRemaining
}


function gameOver(){
    if(secondsRemaining == 0){
        questionsEL.style.display ="none"
        gameOverEl.style.display = "block"
    }
    
    
}


startEl.addEventListener("click", function () {
  //checking 0 because it starts at zero until clicked
  if (timerEnd === 0) {
    timerEnd = setInterval(function () {
      secondsRemaining--;
      timerEl.textContent = "Time: " + secondsRemaining;
      scoreEl.textContent = "Score: " + score;

      if (secondsRemaining <= 0) {
        clearInterval(timerEnd);
        timerEL.textContent = "Time is up.";
      }
    }, 1000);
  }

  headerEl.style.display = "none";
  startEl.style.display = "none";
  rulesEL.style.display = "none";

  questionOneEl.style.display = "block";

  let correctAnswer = document.getElementById("correct-answer-one");
  let wrongAnswer = document.querySelectorAll(".wrong-answer-one");
  

  correctAnswer.addEventListener("click", 
  promptTwo);
  correctAnswer.addEventListener("click", points);
  
  wrongAnswer.forEach((wrong) => {
    wrong.addEventListener("click", promptTwo);
  });
  wrongAnswer.forEach((wrong) => {
    wrong.addEventListener("click", penalty);
  });




  function promptTwo() {
    questionOneEl.style.display = "none";
    questionTwoEl.style.display = "block";

    let correctAnswer = document.getElementById("correct-answer-two");
    let wrongAnswer = document.querySelectorAll(".wrong-answer-two");

    correctAnswer.addEventListener("click", promptThree);
    correctAnswer.addEventListener("click", points);
   
    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", promptThree);
    });
    wrongAnswer.forEach((wrong) => {
        wrong.addEventListener("click", penalty);
      });
  }


  function promptThree() {
    questionTwoEl.style.display = "none";
    questionThreeEl.style.display = "block";

    let correctAnswer = document.getElementById("correct-answer-three");
    let wrongAnswer = document.querySelectorAll(".wrong-answer-three");

    correctAnswer.addEventListener("click", promptFour);
    correctAnswer.addEventListener("click", points);
    
    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", promptFour);
    });
    wrongAnswer.forEach((wrong) => {
        wrong.addEventListener("click", penalty);
      });
  }


  function promptFour() {
    questionThreeEl.style.display = "none";
    questionFourEl.style.display = "block";

    let correctAnswer = document.getElementById("correct-answer-four");
    let wrongAnswer = document.querySelectorAll(".wrong-answer-four");

    correctAnswer.addEventListener("click", promptFive);
    correctAnswer.addEventListener("click", points);
    
    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", promptFive);
    });
    wrongAnswer.forEach((wrong) => {
        wrong.addEventListener("click", penalty);
      });
  }


  function promptFive() {
    questionFourEl.style.display = "none";
    questionFiveEl.style.display = "block";

    let correctAnswer = document.getElementById("correct-answer-five");
    let wrongAnswer = document.querySelectorAll(".wrong-answer-five");

    correctAnswer.addEventListener("click", promptScore);
    correctAnswer.addEventListener("click", points);
    
   
    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", promptScore);
    });
    wrongAnswer.forEach((wrong) => {
        wrong.addEventListener("click", penalty);
      });
      
  }

   
});
// pauseTime()
function promptScore(){
    questionFiveEl.style.display = "none";
    greatJobEl.style.display = "block";
}

