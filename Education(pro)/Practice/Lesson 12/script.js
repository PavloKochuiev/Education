"use strict"

// декларативный подход >>> указываем на то что нам нужно, а не на то как это нужно создать

function sum(array) {
    return array.reduce((acc, value) => {
        return acc + value;
    }, 0);
}

// создаем список, делим задачу на части  

const data = [1, 2, 3, 4];

function createUl() {
    const element = document.createElement("ul");

    return element;
}

function createLi(value) {
    const element = document.createElement("li");
    element.innerText = value;

    return element;
}

function createList(values) {
    const list = createUl();

    // imperative 
    // const elements = [];

    // for (let index = 0; index < values.length; index++) {
    //     const element = createLi[values[index]];
    //     elements.push(element);
    // }

    // for (let i = 0; i < elements.length; i++) {
    //     list.appendChild(elements[i]);

    // }

    // declarative 
    values
        .map(value => createLi(value))
        .forEach(element => list.appendChild(element));

    return list;
}

const myList = createList(data);

document.body.appendChild(myList);





// создаем заголовок и кнопки с цветами 

const buttonsData = [
    { text: "Зеленый", className: "green" },
    { text: "Красный", className: "red" },
    { text: "Синий", className: "blue" }
]

const container = document.createElement("div");

const textElement = document.createElement("p");
textElement.innerText = "Hello, World!";

container.appendChild(textElement);

buttonsData.forEach(data => {
    const button = createButton(data.text, data.className);
    container.appendChild(button);
})

document.body.appendChild(container);

function createButton(text, className) {
    const button = document.createElement("button");
    button.innerText = text;

    button.onclick = function() {
        textElement.className = className; 
    }

    return button;
}
