import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let timerId = null;
const refs = {
  btnStart: document.querySelector('[data-start]'),
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  min: document.querySelector('[data-minutes]'),
  sec: document.querySelector('[data-seconds]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      refs.btnStart.disabled = true;
      Notiflix.Report.warning(
        'Attention!',
        'Please choose a date in the future',
        'Ok'
      );
    } else {
      refs.btnStart.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

refs.btnStart.disabled = true;
refs.btnStart.addEventListener('click', onBtnClick);

function onBtnClick() {
  refs.btnStart.disabled = true;
  refs.input.disabled = true;

  const dateSet = new Date(refs.input.value);
  const dateNow = Date.now();
  const deltaTime = dateSet - dateNow;
  const { days, hours, minutes, seconds } = convertMs(deltaTime);

  updateClockface({ days, hours, minutes, seconds });

  timerId = setInterval(() => {
    const dateNow = Date.now();
    const deltaTime = dateSet - dateNow;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    updateClockface({ days, hours, minutes, seconds });

    if (deltaTime < 1000) {
      refs.btnStart.disabled = false;
      refs.input.disabled = false;
      clearInterval(timerId);
      Notiflix.Report.warning('Attention!', 'Please choose a new date', 'Ok');
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateClockface({ days, hours, minutes, seconds }) {
  if (seconds >= 0) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.min.textContent = minutes;
    refs.sec.textContent = seconds;
  }
}
