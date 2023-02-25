var listHighscore = document.querySelector("#highscores");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//trying to display the score on the highscore page
for (var i = 0; i<highScores.length; i++){
  var listHs = document.createElement("p");
  listHighscore.appendChild(listHs);
  listHs.textContent = highScores[i].initials + " - " + highScores[i].score;
}

