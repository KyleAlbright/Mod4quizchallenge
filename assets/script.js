// variables for DOM manipulation
var headerEl = document.getElementById("header");
var startEl = document.getElementById("start");
var rulesEL = document.getElementById("rules");
var timerEl = document.getElementById("timer");
var viewHighScoresEl = document.getElementById("viewHighScores")
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
var textInitialsEl = document.getElementById("textInitials");
var submitButtonEl = document.getElementById("submitButton");

//variables for action items
var answered = 1;
var score = 0;
var timerEnd = 0;
var secondsRemaining = 60;

//hides everything except the starting screen
questionOneEl.style.display = "none";
questionTwoEl.style.display = "none";
questionThreeEl.style.display = "none";
questionFourEl.style.display = "none";
questionFiveEl.style.display = "none";
greatJobEl.style.display = "none";
gameOverEl.style.display = "none";

//takes 10 seconds off the clock 
function penalty() {
  secondsRemaining = secondsRemaining - 10;
}
//adds 5 points for every question right
function points() {
  score = score + 5;
  console.log(score)
}
//keeps track of how many questions we have gone through (this is to tell the timer when to stop)
function questionAnswered() {
  answered = answered + 1;
}
//this starts the game over if we get to 0 on the clock
function startOver() {
  window.location.reload(true)
}

//this is the game starting.
startEl.addEventListener("click", function () {
  
  //checking 0 because it starts at zero until clicked - this is displaying the time and score
  if (timerEnd === 0) {
    timerEnd = setInterval(function () {
      secondsRemaining--;
      timerEl.textContent = "Time: " + secondsRemaining;
      scoreEl.textContent = "Score: " + score;

      //if time reaches zero this will take us to the game over screen
      if (secondsRemaining <= 0) {
     questionsEL.style.display = "none";
     gameOverEl.style.display = "block";
     scoreEl.style.display = "none";
     timerEl.style.display = "none";

     let fromTheTop = document.getElementById("replay")

     fromTheTop.addEventListener("click", startOver);
     


      }
    }, 1000);
  }
//hiding the start screen and displaying the first question. 
//The following logic is the same for the next 4 sections: When the user chooses and answer, it will prompt them to the next question as well as add 1 to the counter of questions answered. 
//If the user gets the question right, 5 points added, if wrong 10 seconds off the clock. 
  headerEl.style.display = "none";
  startEl.style.display = "none";
  rulesEL.style.display = "none";
  viewHighScoresEl.style.display = "none";

  questionOneEl.style.display = "block";

  let correctAnswer = document.getElementById("correct-answer-one");
  let wrongAnswer = document.querySelectorAll(".wrong-answer-one");

  correctAnswer.addEventListener("click", promptTwo);
  correctAnswer.addEventListener("click", points);
  correctAnswer.addEventListener("click", questionAnswered);

  wrongAnswer.forEach((wrong) => {
    wrong.addEventListener("click", promptTwo);
  });
  wrongAnswer.forEach((wrong) => {
    wrong.addEventListener("click", penalty);
  });
  wrongAnswer.forEach((wrong) => {
    wrong.addEventListener("click", questionAnswered);
  });
  

  function promptTwo() {
    questionOneEl.style.display = "none";
    questionTwoEl.style.display = "block";

    let correctAnswer = document.getElementById("correct-answer-two");
    let wrongAnswer = document.querySelectorAll(".wrong-answer-two");

    correctAnswer.addEventListener("click", promptThree);
    correctAnswer.addEventListener("click", points);
    correctAnswer.addEventListener("click", questionAnswered);

    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", promptThree);
    });
    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", penalty);
    });
    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", questionAnswered);
    });
  }

  function promptThree() {
    questionTwoEl.style.display = "none";
    questionThreeEl.style.display = "block";

    let correctAnswer = document.getElementById("correct-answer-three");
    let wrongAnswer = document.querySelectorAll(".wrong-answer-three");

    correctAnswer.addEventListener("click", promptFour);
    correctAnswer.addEventListener("click", points);
    correctAnswer.addEventListener("click", questionAnswered);

    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", promptFour);
    });
    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", penalty);
    });
    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", questionAnswered);
    });
  }

  function promptFour() {
    questionThreeEl.style.display = "none";
    questionFourEl.style.display = "block";

    let correctAnswer = document.getElementById("correct-answer-four");
    let wrongAnswer = document.querySelectorAll(".wrong-answer-four");

    correctAnswer.addEventListener("click", promptFive);
    correctAnswer.addEventListener("click", points);
    correctAnswer.addEventListener("click", questionAnswered);

    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", promptFive);
    });
    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", penalty);
    });
    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", questionAnswered);
    });
  }

  function promptFive() {
    questionFourEl.style.display = "none";
    questionFiveEl.style.display = "block";

    let correctAnswer = document.getElementById("correct-answer-five");
    let wrongAnswer = document.querySelectorAll(".wrong-answer-five");

    correctAnswer.addEventListener("click", points);
    correctAnswer.addEventListener("click", promptScore);
    correctAnswer.addEventListener("click", questionAnswered);

    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", promptScore);
    });
    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", penalty);
    });
    wrongAnswer.forEach((wrong) => {
      wrong.addEventListener("click", questionAnswered);
    });
  }
});

//this is checking if the user got through all the questions. If they did, the timer stops, and the user is brought to the page to enter their initials, and record the score. 
function promptScore() {
  questionFiveEl.style.display = "none";
  greatJobEl.style.display = "block";
  if (answered === 5) {
    clearInterval(timerEnd);
    console.log(secondsRemaining);
    console.log(score)
    timerEl.textContent = "Time left:" + secondsRemaining;
    scoreEl.textContent = `Score: ${parseInt(secondsRemaining + score)}`;
  }
  //Storing the initials and score in Local Storage
  submitButton.onclick = () => {
    let initials = textInitialsEl.value;
    var results = {
        initials: initials,
        score: score + secondsRemaining 
    }
    localStorage.setItem((localStorage.length+1), JSON.stringify(results));
    textInitialsEl.value = ""
    location.reload();
}
}
