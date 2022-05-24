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

const emailInput = document.querySelector("form input[type=text]");
const passwordInput = document.querySelector("form input[type=password]");

const formButton = document.querySelector("form");

formButton.addEventListener("submit", event => {
    event.preventDefault();

    const email = emailInput.value;

    const password = passwordInput.value;

    const data = { email, password };
    console.log(JSON.stringify(data));

    emailInput.value = "";
    passwordInput.value = "";
})
