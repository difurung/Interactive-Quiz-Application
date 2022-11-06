

//Create a timer started by Get started button
//var start = document.querySelector("start");
var score = 0


var startCon = document.getElementById("#startContainer");
var startEl = document.querySelector(".startBtn");
var questionCardEl = document.querySelector("#questionCard");
var initialsEl = document.querySelector("#initials");
var scoreEl = document.querySelector("#score");

var timeEl = document.querySelector(".time");

var secondsLeft = 75;



// hide the page
questionCardEl.style.display = "none"
initialsEl.style.display = "none"
scoreEl.style.display = "none"


//start the game. hide start, show questions


//timer needs to end game at zero
//letsBegin(),

var letsBegin = function () {  
  
  startContainer.style.display = "none"
  
  questionCardEl.style.display = "flex"
  
  //var textContainer = document.querySelector("text-container")
  timer()
  //listQuestion() 
};

var timer = function setTime() {  
  
  
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    
    if(secondsLeft === 0) {
      
      clearInterval(timerInterval)
      
      
      sendMessage();
    }
    
  }, (1000));
};

startEl.addEventListener("click", letsBegin)


// var listQuestions = function giveQuestion

// var questionTitle = questionPageEl.querySelector("#question");

// var listQuestion = function () {

//   questionTitle.textContent = questions[qIndex].question;















// var listQuestions = function giveQuestion




// (startEl.addEventListener("click", letsBegin()));


// const lastQuestion = questions.length - 1;

// let runningQuestion = 0;

// function renderQuestion(){

//     let q = questions[runningQuestion];



//     question.innerHTML = "<h2>"+ q.question +"</h2>";

//         choiceA.innerHTML = q.choiceA;

//     choiceB.innerHTML = q.choiceB;

//     choiceC.innerHTML = q.choiceC;

// }

// function renderProgress(){

//     for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){

//         progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";

//     }

// }



//need a function that loads the first question

//need a function that subtracts time on wrong answer

//event listener to go to next question

//upon game ending a score form should appear

