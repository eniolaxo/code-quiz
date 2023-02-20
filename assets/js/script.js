var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionsScreen = document.querySelector("#questions");
var questionNo = 0;

var questions = [
  {
Question: "What is the capital city of Canada?",
Answer: "Ottawa",
choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"]
  },
  {
    Question: "What's 9+10?",
    Answer: "19",
    choices: ["21", "90", "19", "-1"]
  },
  {
    Question: "Which country is known as the Land of the Rising Sun?",
    Answer: "Japan",
    choices: ["China", "Japan", "United States", "India"]
  },
  {
    Question: "Who is the author of the Harry Potter book series?",
    Answer: "J.K. Rowling",
    choices: ["Stephen King", "J.K. Rowling", "Dan Brown", "George R.R. Martin"]
  },
  {
    Question: "What is the largest planet in our solar system?",
    Answer: "Jupiter",
    choices: ["Jupiter", "Saturn", "Mars", "Venus"]
  },
  {
    Question: "Who was the first Black president of the United States?",
    Answer: "19",
    choices: ["Donald Trump", "Kamala Harris", "Franklin D. Roosevelt", "Barack Obama"]
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
