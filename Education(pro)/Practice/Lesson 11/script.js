// "use strict"

window.setTimeout(() => console.log("Lesson 10", 1000));

// глобальные переменные это плохо, источник больших проблем

// попробуем найти наш <p></p> через метод querySelector

const p = document.querySelector("p");

if (p !== null) {

    console.log(p.innerText);

    p.innerText = "Modified by JS str";

    console.log(p.innerText);

}

console.dir(p);

console.log("P:", p);



const values = document.body.innerText; // в ней хранится весь текст который в body

console.log("Values:", values)



// создали wrapper в html, теперь находим его 

const wrapper = document.querySelector(".wrapper");

wrapper.innerHTML = "<a href='https://www.google.com.ua/?hl=ru'>Press Me</a>";

const valuesWrapper = wrapper.innerHTML;

console.log(valuesWrapper);






