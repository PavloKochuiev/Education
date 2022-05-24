// Реализация кнопки show password

const passwordVisibilityButton = document.querySelector("form .password-visibility");

const emailInput = document.querySelector("form input[type=text]");
const passwordInput = document.querySelector("form input[type=password]");

passwordInput.addEventListener("input", event => {
    const value = event.target.value;
    passwordVisibilityButton.disabled = value === "";
})

passwordVisibilityButton.addEventListener("click", event => {
    // const isPasswordType = passwordInput.type === 'password';

    passwordInput.type = passwordInput.type === 'password' ? "text" : "password";
    passwordVisibilityButton.innerText = passwordInput.type === 'password' ? "Show" : "Hide";
})

const formButton = document.querySelector("form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    console.log({ email, password });
})