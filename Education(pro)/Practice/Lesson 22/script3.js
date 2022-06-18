"use strict";

function DataLoader(type) {
    // this.url = `https://jsonplaceholder.typicode.com/${type}`;
}

DataLoader.prototype.load = function (id) {
    return fetch(`${this.url}/${id}`).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(new Error("Error loading data"));
    });
};

const o = Object.create(DataLoader.prototype);

function ConsoleDataLoader() {
    this.url = `https://jsonplaceholder.typicode.com/posts`;
}

ConsoleDataLoader.prototype = Object.create(DataLoader.prototype);

ConsoleDataLoader.prototype.print = (data) => console.log(data);

function HtmlDataLoader() {
    this.url = `https://jsonplaceholder.typicode.com/posts`;
}

HtmlDataLoader.prototype = Object.create(DataLoader.prototype);

HtmlDataLoader.prototype.print = function (data) {
    const p = document.createElement("p");
    p.innerText = JSON.stringify(data);

    document.body.appendChild(p);
};

const dataLoader = new ConsoleDataLoader("posts");
dataLoader.load();
