const form = document.querySelector('.feedback-form');

console.log(form.event.target);
function saveData(event) {
    const { email, message } = event.taget;

    localStorage.setItem(email, message);
}

form.addEventListener('input', saveData())