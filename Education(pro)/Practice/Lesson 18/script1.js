"use strict";

// Data 
// HTTP // HTTPS

// GET => получение данных (например: дать список последних пяти новостей)
// POST => отправка данных (например: отправка сообщения в чате)
// PUT => редактирование сущности на стороне backend 
// DELETE => удаление сущности на стороне backend

const API_URL = "https://rickandmortyapi.com/api/character";

// XHR - XML HTTP REQUEST // старый способ
// fetch - ES6 - Promise // новый способ, который все используют

const xhr = new XMLHttpRequest(); // создаем новый объект-запрос
xhr.responseType = "json"; // можем указать response type для того чтобы сразу получить json

xhr.onload = function() { // должны подписаться на событие onload и проверить статус
    console.log("onload", {
        status: xhr.status, // 200 = OK 
        text: xhr.statusText, 
        response: xhr.response,
        responseType: typeof xhr.response  
    });

    if (xhr.status !== 200) {
        console.error(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        console.log(xhr.response);
    }
}

xhr.onerror = function(event) { // обрабатываем ошибки
    console.log("Error", event); // 404 = NOT FOUND
};

xhr.open("GET", API_URL); // необходимо открыть запрос
xhr.send(); // необходимо вызвать send