'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// My first steps in javascript lets kick it !!!!

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number !';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉🤞❤ Correct number!';
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '200px';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.title').textContent =
      'Congratulations ! 🥳🍾 thanks for playing.';

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

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing . . .';
  document.querySelector('.title').textContent = 'Guess My Number !';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'rgb(34, 31, 31)';
  document.querySelector('.number').style.width = '150px';
});
