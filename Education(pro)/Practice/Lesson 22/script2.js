"use strict";

// function createButton() {

// }

// const button = createButton();

// function Button() {}

// const b = new Button();

const customer = {
    walk() {
        console.log("walking...");
    },
};

Developer.prototype = user;

function Developer(name, skills) {
    this.name = name;
    this.skills = skills;
}

const dev = new Developer("Bill Gates", ["C", "C++"]);

console.log(dev);

dev.walk();

function DataLoader(type) {
    this.url = `https://jsonplaceholder.typicode.com/${type}`;

    //     this.load = function (id) {
    //         return fetch(`${this.url}/${id}`).then((response) => {
    //             if (response.ok) {
    //                 return response.json();
    //             }
    //             return Promise.reject(new Error("Error loading data"));
    //         });
    //     };
}

DataLoader.prototype.load = function (id) {
    return fetch(`${this.url}/${id}`).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(new Error("Error loading data"));
    });
}; 

const todoLoader = new DataLoader("todos");
const postsLoader = new DataLoader("posts");

todoLoader.load(1).then((data) => console.log("todo", data));

postsLoader.load(2).then((data) => console.log("posts", data));
