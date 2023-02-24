var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var questionNo = 0;
var questionChoices = document.querySelector("#choices");
var correctAns = document.querySelector("#feedback");
var timeLeft = 60; // this will be 60 seconds per question
var highScores;
var submission = document.querySelector("#submit");
var initialsForm = document.querySelector("#initials");


var questions = [
  {
    Question: "What is the keyword used to define a JavaScript function?",
    answer: "function",
    choices: ["func", "function", "def", "void"]
  },
  {
    Question: "Which of the following is not a valid HTML tag?",
    answer: "None of the above",
    choices: ["None of the above", "<h1>", "<span>", "<p>"]
  },
  {
    Question: "What is the correct syntax to add a comment in JavaScript?",
    answer: " // This is a comment",
    choices: [" // This is a comment", "<!-- This is a comment -->", "* This is a comment *", "# This is a comment"]
  },
  {
    Question: "Which of the following is not a CSS property?",
    answer: "loop",
    choices: ["color", "background-image", "loop", "font-size"]
  },
  {
    Question: "Which of the following is not a valid JavaScript data type?",
    answer: "character",
    choices: ["number", "string", "character", "object"]
  }
];

var timerId;

startBtn.addEventListener('click', function () {
  console.log("Hello");
  startScreen.classList.add("hide");
  questionsScreen.classList.remove("hide");
  countdownTimer();
  displayQuestion();
});

function countdownTimer (){
  var timerEl = document.querySelector(".timer");
timerId = setInterval(function() {
  if (timeLeft > 0) {
    timerEl.textContent = "Time left: " + timeLeft;
    timeLeft--;
  } else {
    clearInterval(timerId);
    endGame();
  }
}, 1000);
}

function displayQuestion() {
var choicesEl = questionChoices;
var qstnEl = document.querySelector("#question-title");
qstnEl.textContent = questions[questionNo].Question;


// Clear any existing choices
choicesEl.innerHTML = "";

 // Loopin through the choices for the current question and creating a button for each one
for (var i = 0; i < questions[questionNo].choices.length; i++) {
  var choice = questions[questionNo].choices[i];
  var choiceBtn = document.createElement("button");
  choiceBtn.textContent = choice;
  choiceBtn.setAttribute("data-answer", choice);

// Attach an event listener to the button to check the answer
choiceBtn.addEventListener("click", checkAnswer);
choicesEl.appendChild(choiceBtn);
}
} 

// Creating a function so that if a user clicks the right/wrong answer, it will tell them.
function checkAnswer(event) {
  var selectedAnswer = event.target.getAttribute("data-answer");
  var feedbackEl = document.querySelector("#feedback");
  feedbackEl.classList.remove("hide"); 

  // Check if the selected answer is correct
  if (selectedAnswer === questions[questionNo].answer) {
    feedbackEl.textContent = "Correct!";
  } else {
    feedbackEl.textContent = "Wrong!"; 
    timeLeft -= 10;
    if (timeLeft < 0){
      timeLeft = 0;
    }
  }

    // to move on to the next question:
questionNo++;

if (questionNo < questions.length && timeLeft > 0) {
  displayQuestion();
} else {
// End the game if there are no more questions
  clearInterval(timerId);
  endGame();
}
}

// now I will define the endGame function so that it can actually work when called to end the game
function endGame () {
  var finalScoreEl = document.querySelector("#final-score");
  // made the initial id variable global instead of local
  var questionsEl = document.querySelector("#questions");
  var endScreenEl = document.querySelector ("#end-screen");

  finalScoreEl.textContent = timeLeft;
  questionsEl.classList.add("hide");
  endScreenEl.classList.remove("hide");
}

// time to work with storing and saving high-scores and the player's initials
// going to add a localStorage property so that it can save the key-value pairs I need

// submission.addEventListener("click", function() {
//   location.href="highscores.html";})

  submission.addEventListener("click", function () {
    var finalScoreEl = document.querySelector("#final-score");
    var initials = initialsForm.value.trim(); // get the user's initials
    var score = timeLeft; // save the time left as the score
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
    // add the new score to the high scores array
    highScores.push({ initials: initials, score: score });
  
    // sort the high scores array in descending order by score
    highScores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    // save the high scores array to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
  
    // redirect to the high scores page
    location.href = "highscores.html";
  })

  
