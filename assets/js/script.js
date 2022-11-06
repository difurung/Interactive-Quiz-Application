

//Create a timer started by Get started button
//var start = document.querySelector("start");
var currentQuestion = 0
var score = 0


var startCon = document.getElementById("startContainer");
var startEl = document.querySelector(".startBtn");
var questionCardEl = document.querySelector("#questionCard");
var questionTitle = document.getElementById("question")
var answerEl = document.getElementById("answerChoices")
var qindex = 0
var initialsEl = document.querySelector("#initials");
var scoreEl = document.querySelector("#score");

var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var score = 0



var currentQuestion = 0


 
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
questionCardEl.style.display = "none"
initialsEl.style.display = "none"
scoreEl.style.display = "none"


//start the game. hide start, show questions


//timer needs to end game at zero
//letsBegin(),

var letsBegin = function () {  
  
  startContainer.style.display = "none"
  
  questionCardEl.style.display = "block"
  
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

var questionTitle = document.querySelector("#question");

function listQuestion() {
    // Clears existing data 
    questionTitle.innerHTML = "";
    answerEl.innerHTML = "";

    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[qindex].title;
        var userChoices = questions[qindex].choices;
        questionTitle.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionTitle.appendChild(answerEl);
        answerEl.appendChild(listItem);
        listItem.addEventListener("click", compare);
    })
}

// have to code a way select the answer, make sure its the right one, and then move on
let compare = function (event) {

var theChosen = event.target
if (theChosen.textContent === questions[qindex].answer) 
  { score = score + 5;
  }
  else {
    secondsLeft = secondsLeft - 5;
  }
qindex++

  if (qindex < questions.length) {
    while (answerEl.firstChild) {
    questionTitle.textContent = "";
    answerEl.removeChild(answerEl.firstChild);
    };
    
    listQuestion();
  } else {
    sendMessage();
    return;
  };
}
  
var sendMessage = function() {
  questionTitle.remove();
  questionPageEl.remove();
  timeEl.textContent = " ";
  gameOverEl.style.display = "block";
  score = score + secondsLeft;
  var messageEl = document.createElement("P");
  messageEl.innerHTML("Game Over");
  ;
  
  };

  
  // };



startEl.addEventListener("click", letsBegin)







