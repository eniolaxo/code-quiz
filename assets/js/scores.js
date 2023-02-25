var listHighscore = document.querySelector("#highscores");



//trying to display the score on the highscore page
for (var i = 0; i<highScores.length; i++){
  var listHs = document.createElement("li");
  listHighscore.appendChild(listHs);
  listHs.textContent = highScores[i].initials + " - " + highScores[i].score;
}

//event listener on the 'clear highscores' button
clearBtn.addEventListener("click", function() {
  localStorage.removeItem("scores");
  listHighscore.innerHTML = "";
})
