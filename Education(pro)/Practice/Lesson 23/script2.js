"use strict";

class Customer {
    constructor(name) {
        this.name = name;
    }

    static someStaticValue = "Hello, World!";

    static doSomething() {
        console.log("Do something!");
    }
}

const a = new Customer("Petro");
const b = new Customer("Pavlo");

console.log(a.name);
console.log(b.name);
