'use strict';
let SecretNumber = Math.trunc(Math.random() * 20);
let StartScore = 20;
let BestScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const value = Number(document.querySelector('.guess').value);
  //проверка ввода
  if (!value && value !== 0) {
    displayMessage('Ошибка, проси прощения');
  }
  //логика
  if (value !== SecretNumber) {
    if (StartScore > 1) {
      displayMessage(value > SecretNumber ? 'Много' : 'Мало');
      StartScore--;
      document.querySelector('.score').textContent = StartScore;
    } else {
      displayMessage('Ты проиграл');
    }
  } else {
    displayMessage('Ты выиграл');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = value;
    StartScore = 20;
    SecretNumber = Math.trunc(Math.random() * 20);
    document.querySelector('.score').textContent = StartScore;
  }
  //лучший результат
  if (StartScore > BestScore) {
    BestScore = StartScore;
    document.querySelector('.highscore').textContent = BestScore;
  }
  //кнопка заново
  document.querySelector('.again').addEventListener('click', function () {
    StartScore = 20;
    displayMessage('Ну пробуй, пробуй');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    SecretNumber = Math.trunc(Math.random() * 20);
    document.querySelector('.score').textContent = StartScore;
    document.querySelector('.guess').value = ' ';
  });
});
