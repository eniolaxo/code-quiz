var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var questionNo = 0;

var questions = [
  {
Question: "what is 4+2?",
Answer: "6",
choices: ["1", "12", "20", "6"]
  },
  {
    Question: "what is 6+2?",
    Answer: "8",
    choices: ["8", "12", "10", "4"]
  },
]

startBtn.addEventListener('click', function () {
  console.log("Hello");
  startScreen.classList.add("hide");
  questionsScreen.classList.remove("hide");
  displayQuestion ()
})
function displayQuestion(){
var choicesEl = document.querySelector("#choices");
var qstnEl = document.querySelector("#question-title");
qstnEl.textContent = questions [questionNo].Question

// add this event listenr to choices instead of question later
qstnEl.addEventListener("click", nextQuestion)
}

//a for loop is for(var i = 0; i < question.length; i ++)
function nextQuestion() {
  questionNo ++
  if (questionNo < questions.length) {
  displayQuestion ()
  }
  else {
    alert ("game over")
  }
}
