"use strict";

// Метод reduce у массивов

const a = [1, 2, 3, 4, 5];

function sum(a) {
    const sum = 0;
    for (let index = 0; index < a.length; index++) {
        const element = sum + a[index];
        return element;
    }
}

console.log(sum(a));
