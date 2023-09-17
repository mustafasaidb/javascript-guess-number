var score = 0;
var chances = 3;
var randomNumber = Math.floor(Math.random() * 10) + 1;
var highScore = localStorage.getItem("highScore") || 0;

function guessNumber() {
  var guess = document.getElementById("guess").value;

  if (guess == randomNumber) {
    score += 10;
    document.getElementById("result").innerHTML = "Congratulations! You guessed the correct number. Your score is: " + score;
    randomNumber = Math.floor(Math.random() * 10) + 1;
  } else {
    score -= 5;
    chances--;
    document.getElementById("result").innerHTML = "Sorry, wrong guess. Chances left: " + chances + " Score: " + score;
  }

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
  }

  if (chances == 0) {
    document.getElementById("result").innerHTML = "Game over. Your total score is: " + score + "<br>Your high score is: " + highScore;
    document.getElementById("guess").disabled = true;
    document.getElementsByTagName("button")[0].disabled = true;
  }
}