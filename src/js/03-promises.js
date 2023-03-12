// HomeWork
// 1. Добавити розмітку
// 2. Добавити 'submit' addEventListener на форму
// 3. Зловити  в події данні з форми - 'delay', 'step', 'amount'
// 4. Використати 'amount' як кількість запуску функції 'createPromise'
// 5. Викликати createPromise(position, delay) n разів
// і використати index як 'position' і delay =  (delay + step * index) із форми
//

// document.querySelector('.form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const { delay, step, amount } = e.currentTarget.elements;
//   const delayValue = parseInt(delay.value);
//   const stepValue = parseInt(step.value);
//   const amountValue = parseInt(amount.value);

//   const promises = [];

//   for (let index = 0; index < amountValue; index++) {
//     const delay = index * stepValue + delayValue;
//     // викликати 'createPromise'
//   }

//   e.currentTarget.reset();
// });

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
