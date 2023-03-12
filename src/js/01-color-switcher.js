const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
let timerId = null;

btnStopRef.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

btnStartRef.addEventListener('click', onBtnStartClick);
btnStopRef.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  btnStartRef.disabled = true;
  btnStopRef.disabled = false;

  changeColor();
  timerId = setInterval(() => changeColor(), 1000);
}

function onBtnStopClick() {
  btnStartRef.disabled = false;
  btnStopRef.disabled = true;

  clearInterval(timerId);
}
