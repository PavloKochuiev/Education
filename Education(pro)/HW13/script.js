'use strict'

// Сделать форму логина. Она состоит из поля для ввода почты, поля для ввода пароля и кнопки “отправить”. 

// Кнопка “отправить” показывает введенные данные в формате JSON и очищает поля для ввода.Кнопка
// заблокирована(disabled) если введены невалидные данные.

// Почта считается валидной если в ней есть символ @ и точка

// Пароль считается валидным если в нем:
// минимум 8 символов
// есть хотя бы одна цифра
// есть хотя бы один из перечисленных символов: @$#!?&

// Если пользователь ввел невалидные данные, поле для ввода должно выделиться красным цветом.

const form = document.querySelector("form");
const button = document.querySelector("form button");
const emailInput = document.querySelector("form input[type=text]");
const passwordInput = document.querySelector("form input[type=password]");

button.disabled = true;

function isValidEmail(email) {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
};

function isValidPassword(password) {
    return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/.test(password);
};

let validEmail = false;
let validPassword = false;

emailInput.addEventListener("input", event => {
    if (validPassword) {
        validEmail = isValidEmail(event.target.value);
    }

    button.disabled = !validEmail || !validPassword;
})

passwordInput.addEventListener("input", event => {
    if (validEmail) {
        validPassword = isValidPassword(event.target.value);
    }

    button.disabled = !validEmail || !validPassword;
})

emailInput.addEventListener("blur", event => {
    const { value } = event.target;
    validEmail = isValidEmail(value)

    if (value !== '' && !validEmail) {
        event.target.className = "invalid";
    }

    button.disabled = !validEmail || !validPassword;
});

emailInput.addEventListener("focus", event => {
    event.target.className = '';
});

passwordInput.addEventListener("blur", event => {
    const { value } = event.target;
    validPassword = isValidPassword(value);

    if (value !== '' && !validPassword) {
        event.target.className = "invalid";
    }

    button.disabled = !validEmail || !validPassword;
});

passwordInput.addEventListener("focus", event => {
    event.target.className = ''; 
});

form.addEventListener("submit", event => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    console.log({ email, password });

    emailInput.value = '';
    passwordInput.value = '';

    button.disabled = true;
})
