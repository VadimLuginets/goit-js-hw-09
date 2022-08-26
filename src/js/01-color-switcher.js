const bodyEl = document.body;
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.addEventListener('click', () => {
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', true);
  timerId = setInterval(() => backgroundChanger(), 1000);
});

stopBtn.addEventListener('click', stopFn);

function stopFn() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
  clearInterval(timerId);
}

function backgroundChanger() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
