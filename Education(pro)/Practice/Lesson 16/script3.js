"use strict";

// Регулярные выражения

const email = "pashadagilis@gmail.com";

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // object

function isEmail(value) {
    return emailRegExp.test(value);
}

const result = isEmail(email);
if (result) {
    console.log(`Строка ${email} по формату подходит`);
} else {
    console.log(`Строка ${email} по формату не является почтовым адресом`);
}