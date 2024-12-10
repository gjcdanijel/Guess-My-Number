'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = document.querySelector('.highscore').textContent;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    displayMessage('Please enter a number');
    return;
  }
  if (guess == secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Congratulations! You guessed the number');
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').style.width = '30rem';
  } else {
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    minimizeScore();
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
function minimizeScore() {
  score--;
  if (score <= 0) {
    displayMessage(
      'Game Over! You lost. The secret number was ' + secretNumber
    );
    document.querySelector('.score').textContent = 0;
    document.querySelector('.guess').disabled = true;
  } else {
    document.querySelector('.score').textContent = score;
  }
}
