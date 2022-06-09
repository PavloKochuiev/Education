"use strict";

// промисификация

const getLocationButton = document.querySelector("#geoLocation");

// getLocationButton.addEventListener('click', (event) => {
//     event.target.disabled = true;

//     getCurrentPosition()
//         .then(position => console.log(position))
//         .catch(error => console.log(error))
//         .finally(() => event.target.disabled = false);

// navigator.geolocation.getCurrentPosition(
//    (data) => console.log("OnSuccess", data),
//    (error) => console.log("OnError", error)

getLocationButton.addEventListener("click", async (event) => {
    event.target.disabled = true;

    try {
        const location = await getCurrentPosition();
        console.log("location", location);
    } catch (error) {
        console.error("error");
    } finally {
        event.target.disabled = false;
    }
});

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

// function loadPost(postNumber) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`).then(
//     (response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//       const error = new Error(`Error loading post with ID ${postNumber}`);
//       return new Promise((resolve, reject) => reject(error));
//     }
//   );
// }

async function loadPost(number) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postNumber}`
    );
    if (response.status === 200) {
        return await response.json();
    }
    return new Error("error loading post");
}
