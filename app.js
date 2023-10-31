"use strict";
 
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let scores, currentScore, activePlayer, playing;

playing = true;
activePlayer = 0;
currentScore = 0;
scores = [0, 0];

score0.textContent = 0;
score1.textContent = 0;
current0.textContent = 0;
current1.textContent = 0;
diceEl.classList.add("hidden");

document
  .querySelector(`.player--${activePlayer}`)
  .classList.remove("player--winner");

document.querySelector(".player--0").classList.add("player--active");
document.querySelector(".player--1").classList.remove("player--active");

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.classList.remove("hidden");
    diceEl.src = `img/dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = "0";

      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = "0";
      currentScore = 0;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
      activePlayer = activePlayer === 0 ? 1 : 0;
    }
  }
});

btnNew.addEventListener("click", function () {
  playing = true;

  currentScore = 0;
  scores = [0, 0];

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceEl.classList.add("hidden");

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");

  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
});
