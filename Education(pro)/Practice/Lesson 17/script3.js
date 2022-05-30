"use strict";

// Хранение данных в браузере

const form = document.querySelector("form");
const deleteButton = document.querySelector(`form [data-type="delete"]`);

const firstNameInput = form.elements["firstName"];
const lastNameInput = form.elements["lastName"];

const USER_DATA_KEY = "userData";

const userStorageManager = createStorageManager(USER_DATA_KEY);

const userData = userStorageManager.load();
if (userData !== null) {
    firstNameInput.value = userData.firstName;
    lastNameInput.value = userData.lastName;
};

form.addEventListener("submit", event => {
    event.preventDefault();

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    const data = { firstName, lastName };
    userStorageManager.save(data);
    console.log("Saved!");
});

deleteButton.addEventListener("click", event => {
    userStorageManager.clear();

    firstNameInput.value = "";
    lastNameInput.value = "";
});

function createStorageManager(storageKey) {
    function save(data) {
        const json = JSON.stringify(data);
        localStorage.setItem(storageKey, json);
    }

    function load() {
        const json = localStorage.getItem(storageKey);
        try {
            return JSON.parse(json);
        } catch (error) {
            console.error("Error");
            return undefined;
        }
    }

    function clear() {
        localStorage.removeItem(storageKey);
    }

    return { save, load, clear };
}