"use strict";

function wait(delay) {
  // изменить состояние до fullfilled после delay ms
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello World!"), delay);
  });
}

wait(1000)
  .then(res => console.log("After timeout", res));

function loadPost(postNumber) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
    .then(response => response.json())
}

loadPost(1)
  .then(data => {
    console.log("Post 1", data);
    return wait(2000);
  })
  .then(() => loadPost(2))
  .then(data => console.log("Post 2", data))
