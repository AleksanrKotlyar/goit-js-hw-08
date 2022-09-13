const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onInputValue, 500));
formRef.addEventListener('submit', onFormSubmit);

let storage = {};
const STORAGE_KEY = 'feedback - form - state';

checkLocalStorage();

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log(storage);
  localStorage.removeItem(STORAGE_KEY);
  storage = {};
}

function onInputValue(e) {
  storage[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
}

function checkLocalStorage() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const locStrForJS = JSON.parse(localStorage.getItem(STORAGE_KEY));
    Object.entries(locStrForJS).forEach(([name, value]) => {
      storage[name] = value;
      formRef.elements[name].value = value;
    });
  }
}
