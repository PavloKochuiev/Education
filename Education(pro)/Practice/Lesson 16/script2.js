"use strict";

// Создание checkbox кнопок

function createCheckbox(options) {
    const container = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = options.id;
    checkbox.checked = options.checked;

    checkbox.addEventListener("change", event => {
        options.onChange(event.target.checked);
    })

    const label = document.createElement("label");
    label.textContent = options.label;
    label.setAttribute("for", options.id);
    // label.for = options.id;

    container.appendChild(checkbox);
    container.appendChild(label);

    return container;
}

const checkbox = createCheckbox({
    id: "my-checkbox",
    label: "I have a bike",
    checked: false,
    onChange: value => {
        console.log("On Change", value);
    }
});
document.body.appendChild(checkbox);