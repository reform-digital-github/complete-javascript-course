'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};
const bodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const showAnswer = function (value) {
  document.querySelector('.number').textContent = value;
};
const answerWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No Number!');

    // When player wins
  } else if (guess === number) {
    showAnswer(number);
    displayMessage('🎉 Correct Number!');
    bodyColor('#60b347');
    answerWidth('30rem');
    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;

    // When number is too high
  } else if (guess > number) {
    displayMessage('👇 Too High...');
    score = score > 0 ? score - 1 : 0;

    // When number is too low
  } else if (guess < number) {
    displayMessage('👆 Too Low...');
    score = score > 0 ? score - 1 : 0;
  }

  // When score is still positive
  if (score > 0) {
    displayScore(score);

    // When score runs out
  } else {
    displayMessage('😢 You have lost...');
    displayScore('0');
  }
});

// Reset game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  bodyColor('#222');
  answerWidth('15rem');
  displayScore(score);
  showAnswer('?');
  document.querySelector('.guess').value = '';
});
