"use strict";

let wrapper = document.querySelector(".wrapper"); // можем добавлять события на целые элементы (например, div)

wrapper.addEventListener("click", (event) => {
  console.log("Wrapper Div Click");

  console.log("Event target", event.target);

  if(event.target.tagName === "LI") {
      const text = event.target.innerText;
      console.log("li text:", text);
  }
});

const liElements = document.querySelectorAll(".wrapper li"); // можем получить доступ ко всем элементам на странице
// воспользовавшись селектором css

console.log(liElements);

const ul = document.querySelector(".wrapper ul");
ul.addEventListener("click", () => {
    console.log("click on <ul>");
})

for (const li of liElements) {
  li.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    console.log("click on <li>");
  });
}


const link = document.querySelector("a");

link.addEventListener("click", event => {
    console.log("Link Clicked");
    event.preventDefault();
});