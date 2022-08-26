import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';
const startBtn = document.querySelector('button[data-start]');
const daysCounter = document.querySelector('[data-days]');
const hoursCounter = document.querySelector('[data-hours]');
const minutesCounter = document.querySelector('[data-minutes]');
const secondsCounter = document.querySelector('[data-seconds]');
let selectedDate = null;
let interval = null;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
    if (selectedDates[0].getTime() < new Date().getTime()) {
      return alert('Please choose a date in the future');
    }
    startBtn.removeAttribute('disabled');
    selectedDate = selectedDates[0].getTime() - new Date().getTime();
  },
});

startBtn.setAttribute('disabled', true);
startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', true);
  interval = setInterval(() => {
    countdown(selectedDate);
    selectedDate -= 1000;
  }, 1000);
});

function countdown(ms) {
  if (selectedDate < 1000) {
    daysCounter.textContent = 0;
    hoursCounter.textContent = 0;
    minutesCounter.textContent = 0;
    secondsCounter.textContent = 0;
    clearInterval(interval);
    startBtn.removeAttribute('disabled');
    return;
  }
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  daysCounter.textContent = days;
  hoursCounter.textContent = hours;
  minutesCounter.textContent = minutes;
  secondsCounter.textContent = seconds;
}
