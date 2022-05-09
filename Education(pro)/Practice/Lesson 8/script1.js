"use strict";

// Продвинутая работа с функциями

// рекурсия

function a(x) {
    return "Hello " + x;
}

function b(x) {
    return a(x + 5);
}

function c(x) {
    return b(x);
}

const a1 = c(5);
console.log("a1:", a1)

// возведение числа в степень 
// 2^4 = 2 * 2 * 2 * 2 
// 2^4 = 2 * 2^3
// 2^3 = 2 * 2^2
// 2^2 = 2 * 2^1
// 2^1 = 2 * 1

function powRecursion(x, n) {
    if (n === 1) {
        return x; 
    }

    return x * powRecursion(x, n - 1);
}

console.log("2^4:", powRecursion(2, 4));

