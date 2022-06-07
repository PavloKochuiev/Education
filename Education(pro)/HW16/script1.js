"use strict";

const loadButton = document.querySelector(".wrapper button");
const content = document.querySelector(".wrapper .content");

function renderList(items) {
  const ul = document.createElement("ul");

  for (const item of items) {
    const listElement = document.createElement("li");
    listElement.textContent = item.name;

    ul.appendChild(listElement);
  }

  content.appendChild(ul);
}

function setButtonLoadingState() {
  loadButton.textContent = "Getting data...";
  loadButton.disabled = true;
}

function setButtonInitialState() {
  loadButton.textContent = "Get data";
  loadButton.disabled = false;
}

var clicks = 1;
loadButton.addEventListener("click", () => {
  fetch(`https://rickandmortyapi.com/api/character?page=${clicks}`)
    .then((response) => response.json())
    .then((pages) => renderList(pages.results))
    .catch((error) => console.error("Catch:", error));

  clicks += 1;
  console.log("Clicks:", clicks, "Page:", clicks - 1);

  if (clicks === 43) {
    loadButton.textContent = "Disabled";
    loadButton.disabled = true;
  }
});