'use strict';
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const pl = document.querySelector('.player--1');

diceEl.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;
let i = 0;
let a = Number(document.querySelector(`#current--${i}`).textContent);

function verif() {
  if (Number(score0.textContent) >= 20) {
    player0.classList.add('player--winner');
    player0.classList.remove('player--active');
    document.querySelector('.btn--roll').disabled = true;
    console.log(score0.textContent + ' ' + score1.textContent);
  } else if (Number(score1.textContent) >= 20) {
    pl.classList.remove('player--active');
    pl.classList.add('player--winner');
    document.querySelector('.btn--roll').disabled = true;
    console.log(score0.textContent + ' ' + score1.textContent);
  }
}

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;
  if (dice == 1) {
    a = 0;
    document.querySelector(`#current--${i}`).textContent = 0;
    ++i;
    if (i > 1) i = 0;
    player0.classList.toggle('player--active');
    pl.classList.toggle('player--active');
  } else {
    a = a + dice;
    document.querySelector(`#current--${i}`).textContent = a;
  }
  diceEl.classList.remove('hidden');
});

btnHold.addEventListener('click', function () {
  document.querySelector(`#score--${i}`).textContent =
    Number(document.querySelector(`#score--${i}`).textContent) + a;
  document.querySelector(`#current--${i}`).textContent = 0;
  a = 0;
  ++i;
  if (i > 1) i = 0;
  player0.classList.toggle('player--active');
  pl.classList.toggle('player--active');
  verif();
});

btnNew.addEventListener('click', function () {
  location.reload();
});
