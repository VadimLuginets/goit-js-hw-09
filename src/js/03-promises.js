const formEl = document.querySelector('form');
let stepDelay = 0;
let currentStep = 0;

formEl.addEventListener('submit', e => {
  e.preventDefault();
  setTimeout(() => {
    stepDelay = Number(formEl.step.value);

    for (let index = 1; index <= formEl.amount.value; index++) {
      createPromise(index, currentStep)
        .then(({ position, delay }) => {
          alert(`Fulfilled promise ${position} in ${delay} ms`);
        })
        .catch(({ position, delay }) => {
          alert(`Rejected promise ${position} in ${delay} ms`);
        });
      currentStep += stepDelay;
    }
  }, Number(formEl.delay.value));
});

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill

        resolve({ position, delay });
      } else {
        // Reject

        reject({ position, delay });
      }
    }, delay);
  });
};
