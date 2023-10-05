const answerSpan = document.querySelector(".answer");
const input = document.querySelector(".number");
const btn = document.querySelector(".btn");
const scoreSpan = document.querySelector(".score");
const highScoreSpan = document.querySelector(".high-score");
const scoreResetBtn = document.querySelector(".btn-score-reset");
let score = 10;
scoreSpan.innerHTML = `Score: ${score}`;

const random = Math.floor(Math.random() * 10);
console.log(random);

let highScore = localStorage.getItem("score");
highScoreSpan.innerHTML = `High Score: ${highScore}`;

if (highScore == null) {
  highScoreSpan.innerHTML = `High Score:`;
}

btn.addEventListener("click", () => {
  if (input.value == "") {
    scoreSpan.innerHTML = "Lütfen bir sayı giriniz.";
  } else if (input.value == random) {
    answerSpan.innerHTML = random;
    scoreSpan.innerHTML = "Tebrikler. Kazandınız.";
    localStorage.setItem("score", score);
    highScoreSpan.innerHTML = `High Score: ${localStorage.getItem("score")}`;
  } else {
    score = score - 1;
    scoreSpan.innerHTML = `Score: ${score}`;
  }

  if (score <= 0) {
    scoreSpan.innerHTML = "Kaybettiniz. Hakkınız bitti.";
  }
});

scoreResetBtn.addEventListener("click", () => {
  localStorage.removeItem("score");
});
