"use strict";

const data = {
    products: ["Bread", "Beer", "Ice-Cream"],

    // hasProducts: true;

    // hasProducts: function() {
    //     return this.products.length !== 0
    // }

    get hasProducts() {
        return this.products.length !== 0;
    }
}

data.products = [];

console.log(data.hasProducts);

// const hasProducts = data.products.length !== 0;



const fullName = {
    firstName: "Pasha",
    lastName: "Dagils",
    _age: 18,

    get age() {
        return this._age
    },

    set age(value) {
        if (typeof value !== number || value <= 0 || Number.isNaN(value)) {
            throw new Error(`InvalidValue:" ${value}`);
            // Do not change value
        }

        this._age = value
    },

    get fullName() {
        return this.firstName + " " + this.lastName
    } 
}

console.log(fullName.fullName);
console.log(user.age);

console.log(JSON.stringify(fullName, null, 2))