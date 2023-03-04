import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

checkLocalStorage();

feedbackFormRef.addEventListener('input', throttle(onFormInput, 500));
feedbackFormRef.addEventListener('submit', onBtnSubmit);

function onFormInput() {
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({
      email: feedbackFormRef.elements.email.value,
      message: feedbackFormRef.elements.message.value,
    })
  );
}

function checkLocalStorage() {
  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    const savedObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    feedbackFormRef.elements.email.value = savedObj.email;
    feedbackFormRef.elements.message.value = savedObj.message;
  }
}

function onBtnSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

  e.currentTarget.reset();
  localStorage.clear();
}
