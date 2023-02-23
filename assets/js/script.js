var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var questionNo = 0;
var questionChoices = document.querySelector("#choices");
var correctAns = document.querySelector("#feedback");
var timeLeft = 30; // this will be 30 seconds per question
var timerEl = document.querySelector("#timer");
var timerInterval;


var questions = [
  {
    Question: "What is the keyword used to define a JavaScript function?",
    Answer: "function",
    choices: ["func", "function", "def", "void"]
  },
  {
    Question: "Which of the following is not a valid HTML tag?",
    Answer: "None of the above",
    choices: ["None of the above", "<h1>", "<span>", "<p>"]
  },
  {
    Question: "What is the correct syntax to add a comment in JavaScript?",
    Answer: " // This is a comment",
    choices: [" // This is a comment", "<!-- This is a comment -->", "* This is a comment *", "# This is a comment"]
  },
  {
    Question: "Which of the following is not a CSS property?",
    Answer: "loop",
    choices: ["color", "background-image", "loop", "font-size"]
  },
  {
    Question: "Which of the following is not a valid JavaScript data type?",
    Answer: "character",
    choices: ["number", "string", "character", "object"]
  }
]

startBtn.addEventListener('click', function () {
  console.log("Hello");
  startScreen.classList.add("hide");
  questionsScreen.classList.remove("hide");
  timerInterval = setInterval(countdownTimer, 1000); // 1000 = 1 second
  displayQuestion ();
})

function countdownTimer (){
  if (timeLeft > 0) {
    timerEl.textContent = "Time left: " + timeLeft;
    timeLeft--;
  } else {
    clearInterval(timerInterval);
    endGame();
  }
}

function displayQuestion(){
var choicesEl = questionChoices;
var qstnEl = document.querySelector("#question-title");
qstnEl.textContent = questions [questionNo].Question;

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

  // Check if the selected answer is correct
  if (selectedAnswer === questions[questionNo].Answer) {
    feedbackEl.textContent = "Correct!";
  } else {
    feedbackEl.textContent = "Wrong!"; 

    // to move on to the next question:
questionNo++;
if (questionNo < questions.length) {
  displayQuestion();
} else {
// End the game if there are no more questions
  clearInterval(timerInterval);
  endGame();
}
}
}

// now I will define the endGame function so that it can actually work when called to end the game
function endGame () {
  
}


