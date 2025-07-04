
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');


let scorePlayer0, scorePlayer1, currentScore, activePlayer, playing;

const init = () => {
  scorePlayer0 = 0;
  scorePlayer1 = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  dice.style.display = 'none';

  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  document.body.style.backgroundColor = 'white';
};

init();


const switchPlayer = () => {
  document.getElementById(current--${activePlayer}).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};


rollBtn.addEventListener('click', () => {
  if (playing) {
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    dice.src = dice-${diceNum}.png;
    dice.style.display = 'block';

    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(current--${activePlayer}).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});


holdBtn.addEventListener('click', () => {
  if (playing) {
    if (activePlayer === 0) {
      scorePlayer0 += currentScore;
      score0.textContent = scorePlayer0;
      if (scorePlayer0 >= 100) {
        playing = false;
        dice.style.display = 'none';
        player0.classList.add('player--winner');
        document.body.style.backgroundColor = 'green';
        return;
      }
    } else {
      scorePlayer1 += currentScore;
      score1.textContent = scorePlayer1;

      if (scorePlayer1 >= 100) {
        playing = false;
        dice.style.display = 'none';
        player1.classList.add('player--winner');
        document.body.style.backgroundColor = 'green';
        return;
      }
    }
    switchPlayer();
  }
});
newBtn.addEventListener('click', () => {
  init();
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
});
