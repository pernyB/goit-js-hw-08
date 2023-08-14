
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('submit', submitData);
form.addEventListener('input', throttle(inputData, 500));

onReload();

function inputData() {
    const objData = {
        email: email.value,
        message: message.value,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objData));
}

function submitData(event) {
    event.preventDefault();
    const objDataConsole= JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(objDataConsole);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onReload() {
    const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    //console.log(saveData);
    if (saveData) {
        email.value = saveData.email;
        message.value = saveData.message;
    }
}