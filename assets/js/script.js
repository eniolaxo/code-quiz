var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var questionNo = 0;
var questionChoices = document.querySelector("#choices");
var correctAns = document.querySelector("#feedback");
var currentQIndex;


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
  displayQuestion ()
})
function displayQuestion(){
var choicesEl = questionChoices//do smth here;
var qstnEl = document.querySelector("#question-title");
qstnEl.textContent = questions [questionNo].Question
// choicesEl.textContent = questions.[questionNo].choices

// add this event listener to choices instead of question later
qstnEl.addEventListener("click", nextQuestion)
}

//a for loop is for(var i = 0; i < question.length; i ++)
function nextQuestion() {
  questionNo ++
  if (questionNo < questions.length) {
  displayQuestion ()
  }
  else {
    alert ("Game is now over!")
  }
}


//function for showing 'wrong' or 'correct' feedback


// What I need to do now is extract the options from the question variable and put it into buttons.
// I should make a button modify it from there so it shows the options
//going to create buttons for the choices id div

// var listOfChoices = [];
// for (var i = 0; i<4; i++) {
//     var choiceBtn = document.createElement("button");
//     choiceList.push(choiceBtn);
//     questionChoices.appendChild(listOfChoices[i]);
// }

//Event listener for clicking on question choices, compares selected answer to correct answer
