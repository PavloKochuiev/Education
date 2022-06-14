"use strict";

function update() {
    let clock = document.querySelector(".clock");
    let date = new Date();

    let hours = date.getHours();
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    clock.children[2].innerHTML = seconds;

    console.log(hours, minutes, seconds);
}

let timerId;
function clockStart() {
    timerId = setInterval(update, 1000);
    update();
}

clockStart();
