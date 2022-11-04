// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


//Create a timer started by Get started button
//timer needs to end game at zero

var timeEl = document.querySelector(".time");

var secondsLeft = 10;

function setTime() {  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      
    clearInterval(timerInterval);
      
    sendMessage();
    }

}, 1000);
}



// }

setTime();


//need a function that loads the first question

//need a function that subtracts time on wrong answer

//event listener to go to next question

//upon game ending a score form should appear

