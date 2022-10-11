// setting the DOM variables
var highScoresEl = document.getElementById("highScores");
// letting the score display whatever the user inputs
let displayScores = "";
//grabbing the user's information and adding it to the array / object
for (let i = 0; i < localStorage.length; i++) {
    highScoreData = JSON.parse(localStorage.getItem(i+1));
    displayScores = displayScores.concat('</br><div id="highScores">'+ highScoreData.initials + " "+"-"+" " + highScoreData.score +'</div>');
    };
   //displaying it on the screen
    highScoresEl.innerHTML = displayScores;