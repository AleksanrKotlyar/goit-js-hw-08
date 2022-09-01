const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('[name="email"]');
const msgRef = document.querySelector('[name="message"]');

formRef.addEventListener('input', throttle(onInputValue, 500));
formRef.addEventListener('submit', onFormSubmit);

let storage = {};
const STORAGE_KEY = 'feedback - form - state';
const locStrForJS = JSON.parse(localStorage.getItem(STORAGE_KEY));

checkLocalStorage();

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(storage);
}

function onInputValue(e) {
  storage[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
}

function checkLocalStorage() {
  if (localStorage.getItem(STORAGE_KEY)) {
    for (const elem in locStrForJS) {
      if (emailRef.name === elem) {
        emailRef.value = locStrForJS[elem];
      }
      msgRef.value = locStrForJS[elem];
    }
  }
}
