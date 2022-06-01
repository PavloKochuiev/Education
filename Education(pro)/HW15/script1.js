"use strict";

// Data
// HTTP // HTTPS

// GET => получение данных (например: дать список последних пяти новостей)
// POST => отправка данных (например: отправка сообщения в чате)
// PUT => редактирование сущности на стороне backend
// DELETE => удаление сущности на стороне backend

const API_URL = "https://rickandmortyapi.com/api/character?page=1";

// XHR - XML HTTP REQUEST // старый способ
// fetch - ES6 - Promise // новый способ, который все используют

const loadButton = document.querySelector(".wrapper button");
const content = document.querySelector(".wrapper .content");

function renderList(items) {
  const ul = document.createElement("ol");

  for (const item of items) {
    const listElement = document.createElement("li");
    listElement.textContent = item.name;

    ul.appendChild(listElement);
  }

  content.innerHTML = "";
  content.appendChild(ul);
}

function setButtonLoadingState() {
  loadButton.textContent = "Loading...";
  loadButton.disabled = true;
}

function setButtonInitialState() {
  loadButton.textContent = "Load";
  loadButton.disabled = false;
}

loadButton.addEventListener("click", () => {
  load({
    url: API_URL,
    onLoadStart: setButtonInitialState,
    onLoadSuccess: (data) => {
      renderList(data.results);
      setButtonInitialState();
    },
    onLoadError: () => {
      alert("Error loading data!");
      setButtonInitialState();
    },
  })
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
