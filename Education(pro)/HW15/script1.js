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
  load({
    url: `https://rickandmortyapi.com/api/character?page=${clicks}`,
    onLoadStart: setButtonInitialState,
    onLoadSuccess: (data) => {
      renderList(data.results);
      setButtonInitialState();
    },
    onLoadError: () => {
      alert("Error loading data!");
      setButtonInitialState();
    },
  });
  clicks += 1;
  console.log("Clicks:", clicks, "Page:", clicks - 1);

  if (clicks === 43) {
    loadButton.textContent = "Disabled";
    loadButton.disabled = true;
  }
});

function load(props) {
  const xhr = new XMLHttpRequest(); // создаем новый объект-запрос
  xhr.responseType = "json"; // можем указать response type для того чтобы сразу получить json

  xhr.onload = function () {
    // должны подписаться на событие onload и проверить статус
    if (xhr.status === 200) {
      props.onLoadSuccess(xhr.response);
    } else {
      props.onLoadError();
    }
  };

  xhr.onerror = props.onLoadError;

  xhr.open("GET", props.url); // необходимо открыть запрос
  xhr.send(); // необходимо вызвать send
}
