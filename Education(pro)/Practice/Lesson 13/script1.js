"use strict";

const wrapper = document.querySelector(".wrapper"); // можем добавлять события на целые элементы (например, div)

wrapper.addEventListener("click", () => {
    console.log("Wrapper Div Click");
});



const liElements = document.querySelectorAll(".wrapper li"); // можем получить доступ ко всем элементам на странице 
// воспользовавшись селектором css

console.log(liElements);

for (const li of liElements) {
    li.addEventListener("click", (event) => {
        console.log(event.target.innerText);
    });
}

