'use strict'

// Дано 5 квадратов. Каждый по клику меняет цвет (синий -> зеленый -> желтый)

const colours = ["blue", "green", "yellow"];

function createSquare() {
    const element = document.createElement("div");

    let currentColourIndex = 0;
    element.style.backgroundColor = colours[currentColourIndex];

    element.addEventListener("click", event => {
        currentColourIndex++;
        if (currentColourIndex > colours.length - 1) {
            currentColourIndex = 0;
        }
        element.style.backgroundColor = colours[currentColourIndex];
    })

    return element;
 }

for (let index = 0; index < 5; index++) {
    const square = createSquare();
    document.body.appendChild(square);
    
}