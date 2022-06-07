"use strict";

function wait(delay) {
  // изменить состояние до fullfilled после delay ms
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello World!"), delay);
  });
}

wait(1000).then((res) => console.log("After timeout", res));

function loadPost(postNumber) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`).then(
    (response) => response.json()
  );
}

loadPost(1)
  .then((data) => {
    console.log("Post 1", data);
    return wait(2000);
  })
  .then(() => loadPost(2))
  .then((data) => console.log("Post 2", data));



// реализация request на promise  
function load(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.responseType = "json";

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject();
      }
    };

    xhr.open("GET", url);
    xhr.send();
  });
}

load('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log(data))
  .catch(error => console.error("Cathc", error))
