"use strict";

// промисификация

const getLocationButton = document.querySelector("#geoLocation");
getLocationButton.addEventListener('click', (event) => {
    event.target.disabled = true;

    getCurrentPosition()
        .then(position => console.log(position))
        .catch(error => console.log(error))
        .finally(() => event.target.disabled = false);

    // navigator.geolocation.getCurrentPosition(
    //    (data) => console.log("OnSuccess", data),
    //    (error) => console.log("OnError", error)
})

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}