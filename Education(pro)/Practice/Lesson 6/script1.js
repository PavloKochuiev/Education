"use strict"

// Копирование объекта

const newUser = {
    userName: "Pasha",
    age: 25,
    isAdmin: true,
    role: null,
}

const newUserCopy = {
    userName: newUser.userName,
    age: newUser.age,
    isAdmin: newUser.isAdmin,
    role: newUser.role,
}

console.log("newUser", newUser);
console.log("newUserCopy", newUserCopy);
console.log(newUser === newUserCopy);

const newUserAsign = Object.assign({}, newUser);
console.log("newUserAsign", newUserAsign);

// У объектов параметрами также могут быть функции

const b1 = {
    user: "Pasha",
    SayHello: function() {
        console.log("Hello", this.user);
        console.log(this);
    }
}

b1.email = "test@test.com";

b1.SayHello(); 

// Функция-конструктор 

function AddNewUser(firstName, lastName) {
    this.id = 1;
    this.firstName = firstName;
    this.lastName = lastName;
}

const a = new AddNewUser("Pasha", "Dagilis");
console.log("a:", a);
