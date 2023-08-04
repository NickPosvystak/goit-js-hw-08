import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let emailValue = '';
let messageValue = '';

const data = {
  email: emailValue,
  message: messageValue,
};

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  data.email = savedData.email;
  data.message = savedData.message;

  form.querySelector('[name="email"]').value = data.email;
  form.querySelector('[name="message"]').value = data.message;
}

console.log(localStorage);

form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  data[event.target.name] = event.target.value;

  savedataInLocalStorage();
}

function savedataInLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  console.log(data);

  localStorage.removeItem('feedback-form-state');
  form.reset();
}
