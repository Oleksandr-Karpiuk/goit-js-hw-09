const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

onBtnStopClick();

btnStartRef.addEventListener('click', onBtnStartClick);
btnStopRef.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    btnStartRef.disabled = true;
    btnStopRef.disabled = false;
  }, 1000);
}

function onBtnStopClick() {
  clearInterval(timerId);
  btnStartRef.disabled = false;
  btnStopRef.disabled = true;
}
