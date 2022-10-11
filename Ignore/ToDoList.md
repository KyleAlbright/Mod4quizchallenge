Declare variables. What variables will we need?:
(can these all be done using DOM manipulation?)
Timer
Start button
Start page
variables for each question(1-5)
complete page
game over 
restart
high scores
*prolly more... we'll add as we go
________________________________________________________________________

HTML:

we need a Header that will tell everyone what this is
we need a <p> to explain the rules and whatnot
we need a start button
we need a link to the high scores (stored in a button?)

we need the questions to the quiz
we need the 4 possible answers tied to buttons

then we need a screen when the user completes the quiz. Within this screen we need a field where the user can enter their initials for the high score page.  
or
a screen when the user runs out of time. in this screen the user would ask if they want to play again? play again button would bring them back to the beginning. 

high scores page (which may be it's own separate HTML? not sure.)

________________________________________________________________________

CSS:

Will pull styling from module 2 challenge, to create a consistent styling for portfolio

will use classes for styling, and id's for DOM manipulation.
________________________________________________________________________

JS - Psuedo code

* We first need to declare all the variables listed above.✔️

* We need a function to clear the start screen, and prompt the first question. This should be tied to an event listener that will also start the timer.✔️

* function to clear first question, add points / subtract time, and move to second.✔️

* function to clear the second question, add points / subtract time, and move to third.✔️

* function to clear the third question, add points / subtract time, and move to fourth.✔️

* function to clear the fourth, add points / subtract time, and move to fifth.✔️

* function to add points / subtract time, and take us to the complete page.✔️

* function to pause the timer✔️

* function to add the score we have with the remaining time and display that in the "complete page"✔️

* We need an overlying function that will get us to game over screen IF time runs out. ( this may need to go above all the other functions listed to prompt us to the questions. Not sure.)✔️

* We need a function to take us back to the beginning if game over✔️

* we need a function that will store the user Data using JSON.parse and then display it to a high score page (this may be separate HTML / JS sheets)✔️
