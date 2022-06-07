"use strict";

function loadPost(postNumber) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return new Promise((resolve, reject) => reject());
    })
}

// Последовательная загрузка
loadPost(1)
  .then((data) => console.log("Post 1", data))
  .then(() => loadPost(2))
  .then((data) => console.log("Post 2", data))
  .then(() => loadPost(3))
  .then((data) => console.log("Post 3", data))
  .then(() => loadPost(4))
  .then((data) => console.log("Post 4", data))
  .then(() => loadPost(5))
  .then((data) => console.log("Post 5", data));

// Параллельная загрузка
  Promise.all([
    loadPost(1),
    loadPost(2),
    loadPost(3),
    loadPost(4),
    loadPost(5),
    loadPost(500)
  ])
    .then(data => console.log("Promise.all:", data));
