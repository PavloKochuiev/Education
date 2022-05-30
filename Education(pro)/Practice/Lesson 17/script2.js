"use strict";

// Хранение данных в браузере

function createUser(name, index) {
    return { id: index, name, email: `${name}@gmail.com` };
}

const users = [
    createUser("Pasha-Dagilis", 1),
    createUser("Ivan-Ivanko", 2),
    createUser("Kyrylo-Mefodiy", 3),
];

const json2 = JSON.stringify(users);

localStorage.setItem("users", json2); // сохранить элемент

const data2 = localStorage.getItem("users"); // запросить элемент 
console.log(data2);

localStorage.removeItem("users"); // удалить элемент