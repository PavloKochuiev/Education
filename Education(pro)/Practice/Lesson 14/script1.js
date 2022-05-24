"use strict";

const wrapper = document.querySelector(".wrapper");
if (wrapper !== null) {
    wrapper.addEventListener('keydown', event => {
        console.log(event.key);
    });
} 

function printWindowDimensions() {
    console.log( {
        width: window.innerWidth,
        height: window.innerHeight,
    })
}

printWindowDimensions();

window.addEventListener("resize", event => {
    printWindowDimensions();
})

// событие scrool

const scrollWrapper = document.querySelector(".scroll-wrapper");
if(scrollWrapper !== null) {
    scrollWrapper.addEventListener("scroll", event => {
        console.log(event.target.scrollHeight, event.target.clientHeight);
    })
}

// создаем button 

function createButton(text, onClick ) { 
    const element = document.createElement("button");

    element.innerText = text;
    element.addEventListener('click', onClick)

    return element;
}

const scrollTopButton = createButton("Top", () => {
    console.log("Scroll Top Button");
    scrollWrapper.scrollTo({ top: 0, behavior: "smooth"});
})

const scrollBottomButton = createButton("Bottom", () => {
    console.log("Scroll Bottom Button", scrollWrapper.scrollHeight);
    scrollWrapper.scrollTo({ top: 1838, behavior: "smooth"});
})

const scrollToCenterElementButton = createButton("To Center", () => {
    console.log("Scrool To Center Button");
    const element = scrollWrapper.querySelector("p:nth-child(50)");
    if (element !== null) {
        element.scrollIntoView({ behavior: "smooth", block: "center"});
    }
})

const buttons = [scrollTopButton, , scrollToCenterElementButton, scrollBottomButton].forEach(element => {
    document.body.appendChild(element);
})

// выше версия чтобы не дублировать код
// document.body.appendChild(scrollTopButton);
// document.body.appendChild(scrollBottomButton);
// document.body.appendChild(scrollToCenterElementButton);

// создаем p 

function createTextElement(text, index) { 
    const element = document.createElement("p");

    element.innerText = `${text}-${index}`;

    return element;
}

for (let index = 0; index <= 100; index++) {
    const element = createTextElement("Text", index + 1);

    scrollWrapper.appendChild(element);
}