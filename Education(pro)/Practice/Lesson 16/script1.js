"use strict";

// Создание select кнопок

const roles = [
    { value: "admin", label: "Администратор" },
    { value: "guest", label: "Гость" },
    { value: "moderator", label: "Модератор" }
]

function createOption(option, isSelected) {
    const element = document.createElement("option");

    element.value = option.value;
    element.textContent = option.label;
    element.selected = isSelected;

    return element;
}

function createSelect(options, selectedOptionValue, onChange) {
    const element = document.createElement("select");

    element.addEventListener("change", event => {
        onChange(event.target.value);
    })

    for (const opt of options) {
        const isSelected = opt.value === selectedOptionValue;
        const option = createOption(opt, isSelected);
        element.appendChild(option);
    }

    return element;
}

function onSelectChange(value) {
    console.log("onSelectChange", value);
};

const select = createSelect(roles, roles[1].value, onSelectChange);
document.body.appendChild(select);