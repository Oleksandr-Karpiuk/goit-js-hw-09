/*
HTML містить кнопки «Start» і «Stop».

<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>

Напиши скрипт, який після натискання кнопки «Start»,
раз на секунду змінює колір фону <body> на випадкове значення,
використовуючи інлайн стиль. Натисканням на кнопку «Stop»
зміна кольору фону повинна зупинятися.

УВАГА
Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів.
Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
*/

/* ПРИКЛАД ЗМІНИ КОЛЬОРУ BODY ПО КНОПЦІ.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColorRef = document.querySelector(".change-color");
const colorDescriptionRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

buttonChangeColorRef.addEventListener("click", onButtonChangeColorClick);

function onButtonChangeColorClick() {
  let randomColor = getRandomHexColor();
  colorDescriptionRef.textContent = randomColor;
  bodyRef.style.backgroundColor = randomColor;
}
*/