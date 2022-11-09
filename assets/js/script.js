

//Create a timer started by Get started button
//var start = document.querySelector("start");


var startCon = document.getElementById("startContainer");
var startEl = document.querySelector(".startBtn");
var questionCardEl = document.querySelector("#questionCard");
var questionTitle = document.getElementById("question")
var answerEl = document.getElementById("answerChoices")
var qindex = 0
var initialsEl = document.querySelector("#initials");
var scoreEl = document.querySelector("#score");
var formEl = document.querySelector("form");
var timeEl = document.querySelector(".time");
var inputEl = document.getElementById("enterInitials")
var scoreEl = document.getElementById("score")
var submitEl = document.querySelector("#submit");
  var clearEl = document.querySelector(".clear");
  var scTableEl = document.querySelector(".view");
var viewEl = document.querySelector("#view");
var hScore = document.getElementById("hScores")
var secondsLeft = 60;
var feedBack = document.getElementById("feedback")
var scoreObj
var score = 0
var currentQuestion = 0
var scoreArr = []

 // Ouestions arraay
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
    choices: ['9.8 m/s^2', '3.72 m/s^2', '1.62 m/s^2', '8.87 m/s^2'],
    answer: '9.8 m/s^2',
  },



  {
    title: 'The term cardiac refers to the:',
    choices: ['Heart', 'Kidneys', 'Liver', 'Pancreas'],
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
    

var scTable = function ()  {

    initialsEl.style.display = "none";
    scoreEl.style.display = "flex";
    startCon.style.display = "none"
    questionCardEl.style.display = "none"
    initialsEl.style.display = "none"
    

    } 


// hide the page
startCon.style.display = "flex"
questionCardEl.style.display = "none"
initialsEl.style.display = "none"
scoreEl.style.display = "none"



//start the game. hide start, show questions


//timer needs to end game at zero
//letsBegin(),

var letsBegin = function () {  
  
  startContainer.style.display = "none"
  
  questionCardEl.style.display = "block"
  
  
  timer()
  listQuestion() 
};

var timer = function setTime() {  
  
  
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    
    if(secondsLeft === 0) {

      clearInterval(timerInterval);
      
      timeEl.textContent = "";
      timeEl.textContent = "Done!";
      
      
      sendMessage();
    }
    
  }, (1000));
};

var questionTitle = document.querySelector("#question");

function listQuestion() {
  
  
    // Clears existing data 
    questionTitle.innerHTML = "";
    answerEl.innerHTML = " ";


    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[qindex].title;
        var userChoices = questions[qindex].choices;
        questionTitle.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("button");
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
    //feedBack.innerHTML = "Correct!!";
    
  }
  else {
    secondsLeft = secondsLeft - 5;
    //feedBack.innerHTML = "Incorrect!!";
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


//work on putting up the done screen.must include final score


var sendMessage = function() {
  clearInterval(timerInterval);

  startContainer.style.display = "none"  

  questionCardEl.style.display = "none"

  initialsEl.style.display = "block"

  timeEl.textContent = "Done!";

  
    // Display current score
    var displayScoreEl = initialsEl.querySelector("#finalScore");
    displayScoreEl.textContent = score;

    return score;
  
  
};

var submit = function (event) {
    event.preventDefault(); 

    
    //This stores the initials
    var initialsSave = document.querySelector("#enterInitials").value;
    
    
    
    // Save initial and score pair as an object 
    var scoreObj = {
      initial: initialsSave,
      score: score 
      
    }
    
    //scoreboard.push(scoreObj)
    scoreArr = JSON.parse(localStorage.getItem("score") ) || [];

    scoreArr.push(scoreObj)

    localStorage.setItem("score", JSON.stringify(scoreArr));
        //localStorage.setItem("score", JSON.stringify(scoreObj));
    
     //This is the score array                                    
          //var scoreboard = JSON.parse(localStorage.getItem("score", scoreObj)) || [];
          //scoreArr.push(scoreboard) //pushes to scoreArr
    
    
    //scoreObj.sort()
    
    initialsEl.style.display = "none";
    scoreEl.style.display = "block";
    
    console.log(scoreArr)
    //loadScore();
    
    
    //console.log(scoreObj);
    
    
  saveHighscore()

      
    };
    
    var hScores = document.getElementById("hScores");
    
    function saveHighscore() {
      
      //var scoreArr
  var scoreboard = JSON.parse(localStorage.getItem("score") ) || [];
  console.log("scoreboard:", scoreboard)



      for(var i = 0; i < scoreboard.length; i += 1 ) {
      var liTag = document.createElement('li');
      liTag.textContent = scoreboard[i].initial + ' - ' + scoreboard[i].score;    
      hScores.appendChild(liTag)}    
            
    
    }
    
    var clear = function ()  {

    localStorage.clear();
    hScores.textContent = ''; 
    
    } 
   
   
    
   
   
    // function clear() {


    // } 


    startEl.addEventListener("click", letsBegin)
    
    
    submitEl.addEventListener("click", submit);

    
    clearEl.addEventListener("click", clear);


    scTableEl.addEventListener("click", scTable);
    
    
    
    
