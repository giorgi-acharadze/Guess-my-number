'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number !';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🤞❤ Correct number!';
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '200px';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? ' High !' : 'Low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ! 😭';
      document.querySelector('.score').textContent = 0;
    }
  }
});
