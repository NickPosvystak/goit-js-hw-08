
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let emailValue = '';
let messageValue = '';

const data = {
    email: emailValue,
    message: messageValue,
}
const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
if(savedData){
    form.elements.email.value = savedData.email;
    data.elements.message.value = savedData.message;


}
form.addEventListener('input', throttle(onInput, 500));

function onInput(){
    data.email = form.elements.email.value;
    data.message = form.elements.message.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}
form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();
    
    console.log(data);
    
    localStorage.removeItem("feedback-form-state");
    form.reset(form);
}