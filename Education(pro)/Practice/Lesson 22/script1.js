"use strict";

// ООП 
// Инкапсуляция / Наследование / Полиморфизм 

const user = {
    name: "Dima",
    walk() {
        console.log("I am walking", this);
    }
}

// Прототип = ссылка на родителя
const developer = {
    skills: ["JavaScript", "HTML", "CSS"],
    // Прототип - object
    writeCode() {
        console.log("Coding...", this);
    }
};

developer.__proto__ = user;

const manager = {
    teams: ["FrontEnd", "Design"],
    talkToCustomer() {
        console.log("Meeting...");
    }
}

manager.__proto__ = developer;

// console.log("user name", user.name);
// console.log("developer name", developer.name); // developer => proto => user => name => proro Object => proto null

// user.walk();
// developer.walk();
// developer.writeCode();



// List -> characters
// Data to display
// Load more

// List -> episodes

