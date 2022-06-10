"use strict";

const userData = {
    name: "Dima",
    work: { name: "Developer" },
    sayHi: function () {
        console.log("SayHi", this.name);
    }
};

Object.defineProperty(userData, "name", {
    configurable: false, // не позволяет менять конфигурации
});

console.log(Object.getOwnPropertyDescriptor(userData, "name"));



const userName = {
    firstName: "Pasha",
    lastName: "Dagils",
    email: "pashadagilis@gmail.com"
};

Object.preventExtensions(userName) // запрещает добавлять новые свойства объекту, но менять существующие можно

console.log(Object.isExtensible(userName));

Object.seal(userName) // "запечатывает" объект

console.log(Object.isSealed(userName));

Object.freeze(user); // проставляет configurable и writable в false, не можем менять свойства объекта

console.log(Object.isFrozen(userName));
