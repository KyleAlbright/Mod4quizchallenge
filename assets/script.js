var userQuestions = [
    { 
        question:"CSS style sheets are read how?" , 
        correctAnswer: "Top to Bottom" ,
        choices: [
            "Top to Bottom", 
            "Bottom to Top", 
            "Left to Right", 
            "Right to Left"
        ]
    },

    {
        question:"JavaScript is a ____-side programming language" , 
        correctAnswer: "Both" ,
        choices: [
            "Client", 
            "Server", 
            "Both", 
            "None of the Above"
        ]
    },

    {
        question:" var number = '1' is stored as what type of variable?" , 
        correctAnswer: "String" ,
        choices: [
            "Number", 
            "String", 
            "Boolean", 
            "Undefined"
        ]
    },

    {
        question:"To add an element to the end of an array you use:" , 
        correctAnswer: "push()" ,
        choices: [
            "pop()", 
            "add()", 
            "slice()", 
            "push()"
        ]
    },
    
    {
        question:"You can access a global variable where?" , 
        correctAnswer: "In both global and local" ,
        choices: [
            "Only in global", 
            "Only in local", 
            "In both global and local", 
            "You cannot access global variables"
        ]
    },

    { 
        question:"HTML stands for:" , 
        correctAnswer: "HyperText Markup Language" ,
        choices: [
            "HyperText Markup Language", 
            "HighTech Markup Language", 
            "HighText Machine Language", 
            "HeyThere My Lizards"
        ]
    }
];

var score = 0;
var questionIndex = 0;

var timerEl = document.getElementById("startingTime");
var startButtonEl = document.getElementById("startQuiz");
var questions = document.getElementById("questions");
var highScores = document.getElementById("highScores");
var container = document.getElementById("container")

var secondsRemaining = 60;
var timerEnd = 0;
var wrongAnswer = 5;
var createQuiz = document.createElement("ol");


startButtonEl.addEventListener("click", function(){
    //checking 0 because it starts at zero until clicked
    if (timerEnd === 0){
        timerEnd = setInterval(function(){
            secondsRemaining--;
            timerEl.textContent ="Time: " + secondsRemaining;

            if(secondsRemaining <=0){
                clearInterval(timerEnd);
                timerEL.textContent ="Time is up.";
                
            }

        },1000);
    }
    promptQuiz(questionIndex)
   
})


    
     

    
    
    

