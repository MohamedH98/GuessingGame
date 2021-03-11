"use strict";

const startBtn = document.querySelector("#start");
const btn = document.querySelector("#btn");
const innerContainer = document.querySelector(".inner-container");
const firstLabel = document.querySelector(".first-label");
const secondLabel = document.querySelector(".second-label");
const body = document.querySelector("body");
let parameter = document.querySelector("#parameter");
let guess = document.querySelector("#guess");
let firstInput = document.querySelector(".first-input");
let secondInput = document.querySelector(".second-input");
let h1 = document.querySelector("h1");

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  innerContainer.classList.remove("hidden");
});

btn.addEventListener("click", () => {
  let param = parameter.value;
  if (param == "" || param <= 1) {
    firstLabel.innerHTML = "Pick a range!";
    parameter.value = "";
  } else {
    parameter.value = "";
    body.style.backgroundColor = "#ef476f";
    btn.style.backgroundColor = "red";
    firstInput.classList.add("hidden");
    secondInput.classList.remove("hidden");
    generateRand(param);
  }
});

function generateRand(range) {
  const randomNum = Math.floor(Math.random() * range) + 1;
  console.log(randomNum);
  guesses(randomNum);
}

const guesses = (rand) => {
  btn.addEventListener("click", () => {
    const userGuess = guess.value;
    if (userGuess > rand) {
      secondLabel.innerHTML = `${userGuess} is too high`;
      guess.value = "";
    } else if (userGuess < rand) {
      secondLabel.innerHTML = `${userGuess} is too low`;
      guess.value = "";
    } else {
      secondLabel.innerHTML = `Well done, you've got it`;
      guess.value = "";
      guess.disabled = true;
      btn.disabled = true;
      h1.innerHTML = `Refresh page to start again`;
      body.style.backgroundColor = "#81b29a";
      btn.style.backgroundColor = "#40916c";
    }
  });
};

function gameRest() {
  startBtn.classList.remove("hidden");
  innerContainer.classList.add("hidden");
  body.style.backgroundColor = "#bbddff";
  btn.style.backgroundColor = "#2345ff";
}
