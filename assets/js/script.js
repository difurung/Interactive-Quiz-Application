

//Create a timer started by Get started button
//var start = document.querySelector("start");
var currentQuestion = 0
var score = 0


var startCon = document.getElementById("#startContainer");
var startEl = document.querySelector(".startBtn");
var questionCardEl = document.querySelector(".questionCard");
var questionTitle = document.getElementById("#question")
var answerEl = document.getElementById("#answer-choices")
var qindex = 0
var initialsEl = document.querySelector("#initials");
var scoreEl = document.querySelector("#score");

var timeEl = document.querySelector(".time");
var secondsLeft = 75;



var currentQuestion = 0
var score = 0


 
  var questions = [
  {
    title: 'Biology is the study of:',
    choices: ['Life', 'Tectonics', 'Chemicals', 'Nuclear Reactions'],
    answer: 'Life',
  },



  {
    title: 'DNA is found in the:',
    choices: ['Golgi apparatus', 'Mitochondria', 'Nucleus', '2 of the above'],
    answer: '2 of the above',
  },



  {
    title: 'What is the gravitational acceleration of earth?',
    choices: ['9.8 m/s2', '3.72 m/s2', '1.62 m/s2', '8.87 m/s2'],
    answer: '9.8 m/s2',
  },



  {
    title: 'The term cardiac refers to the:',
    choices: ['Heart', 'Kidneys', 'Liver', 'pancreas'],
    answer: 'Heart',
  },



  {
    title: 'What is the largest organ in the human body?',
    choices: ['Heart', 'Lungs', 'Skin', 'Intestinal tract'],
    answer: 'Skin',
  },



  {
    title: 'The surface tension of water is representative of which type of chemical bond?',
    choices: ['Ionic', 'Hydrogen', 'Covalent', 'Weak nuclear'],
    answer: 'Hydrogen',
  },



  {
    title: 'Chronic high blood glucose in diabetics will adversely affect the:',
    choices: ['Eyes', 'Kidneys', 'Heart', 'All of the above'],
    answer: 'All of the above',
  },



  {
    title: 'Who is considered the father of modern medicine?:',
    choices: ['Dr. Jonas Salk', 'Dr. Edward Jenner', 'Hippocrates', 'Dr. Acula'],
    answer: 'Hippocrates',
  },

];


// will learn a library called inquirer (npm package)
    



// hide the page
//questionCardEl.style.display = "none"
initialsEl.style.display = "none"
scoreEl.style.display = "none"


//start the game. hide start, show questions


//timer needs to end game at zero
//letsBegin(),

var letsBegin = function () {  
  
  startContainer.style.display = "none"
  
  questionCard.style.display = "flex"
  
  //var textContainer = document.querySelector("text-container")
  timer()
  listQuestion() 
};

var timer = function setTime() {  
  
  
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    
    if(secondsLeft === 0) {
      
      clearInterval(timerInterval)
      
      
      //sendMessage();
    }
    
  }, (1000));
};



//var listQuestions = function giveQuestion



var questionTitle = document.querySelector("#question");

var listQuestion = function () {
  
  // Add question and respective answer choices text
 questionTitle.textContent = questions[qindex].title;
 
  
  // Create element for each answer choice and append to answersEl div
  for (var i = 0; i < 4; i++) {
    var playerChoice = document.createElement("p");
    playerChoice.textContent = questions[qindex].choices[i];
    playerChoice.className = "answer-choice";
    answerEl.appendChild(playerChoice);
      console.log(playerChoice)
  }
  
  // Event listener for clicking on answer choices
  //answersEl.addEventListener("click", checkAnswer);
};

// var listQuestions = function giveQuestion

startEl.addEventListener("click", letsBegin)





//need a function that loads the first question

//need a function that subtracts time on wrong answer

//event listener to go to next question

//upon game ending a score form should appear

