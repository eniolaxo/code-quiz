var listHighscore = document.querySelector("#highscores");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

for (var i = 0; i<highScores.length; i++){
  var listHs = document.createElement("li");
  listHighscore.appendChild(listHs);
  listHs.textContent = highScores[i].initials + " - " + highScores[i].score;
}

