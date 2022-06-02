"use strict";

// Promise

// const p = new Promise(); // обещание что скоро будут данные / является объектом
// promise имеет три статуса:
// pending - когда вы только создали promise, значит что он в процессе выполнения
// fulfilled - состояние если запрос обработан успешно
// rejected - состояние в случае ошибки
// один promise на один запрос, он является одноразовой вещью

// fetch - ES6 network request
// fetch = function которая возвращает promise
// fetch => get, post...

const API_URL = "https://jsonplaceholder.typicode.com/todos/1";

// const post = fetch(API_URL)
//   .then((response) => {
//     const data = response.json(); // data is promise
//     data.then(post => {
//       const userId = post.userId;

//       fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
//         response =>
//       );
//     });
// });

const data = fetch(API_URL) // fetch возвращает сначала response
  .then((response) => response.json()) // then используется чтобы получить данные, является стандартной функцией
  .then((data) => console.log("data", data)); // response json нужен чтобы получить именно тело данных

console.log("After fetch");
