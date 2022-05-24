"use strict";

// События форм

const inputs = document.querySelectorAll("form input");

console.log(inputs);

const eventTypes = [
    "focus",
    "blur",
    "focusin",
    "focusout",
    "input",
    "change",
    "cut",
    "copy",
    "paste"
]

for (const input of inputs) {
    for (const eventType of eventTypes) {
        input.addEventListener(eventType, event => {
            const name = event.target.name;
            const value = event.target.value;
            console.log({ name, value, eventType });
        });
    }
}

const form = document.querySelector("form");

const formEventTypes = [
    "focus",
    "blur",
    "focusin",
    "focusout",
]

for (const eventType of formEventTypes) {
    form.addEventListener(eventType, () => {
        console.log(`Form. ${eventType}`);
    })
}