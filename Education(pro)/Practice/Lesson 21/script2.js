"use strict";

const user = {
    name: "Dima",
    work: { name: "Developer" },
    sayHi: function () {
        console.log("SayHi", this.name);
    }
};

Object.defineProperty(user, "name", {
    writable: false,
});

// const user2 = Object.assign({}, user);
const user2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user)) // полноценное копирование объекта 

const d = Object.getOwnPropertyDescriptors(user2);
console.log(d);

// user2.name = "Perer Parker";
// console.log(user2);

Object.defineProperty(user, "name", {
    enumerable: false, // видимость свойства
})

for (const key in user) {
    console.log(key, user[key]);
}


