"use strict"

// Написать функцию isSymbolPresentInString(str, symbol) - возвращает true если символ найден в строке и false если нет.
// isSymbolPresentInString("abc", "a") // true
// isSymbolPresentInString("abc", "e") // false

function isSymbolPresentInString(str, symbol) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === symbol) return true;
    }
    return false;
}

console.log(isSymbolPresentInString("Low", "w")); // true
console.log(isSymbolPresentInString("Low", "f")); // false

// Написать функцию getSymbolIndex(str, symbol) - возвращает индекс первого найденного символа в строке, 
// или - 1 если символ не найден

function getSymbolIndex(str, symbol) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === symbol) return i;
    }
    return -1;
}

console.log(getSymbolIndex("hello lol", "h")); // 0
console.log(getSymbolIndex("hello lol", "l")); // 2
console.log(getSymbolIndex("hello lol", "v")); // -1

// Написать функцию getNumberOfEven(n) - получить количество четных цифр в числе

function getNumberOfEven(n) {
    n = n.toString();
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        if (!(n.charAt(i) % 2)) count++;
    }
    return count;
}

console.log(getNumberOfEven(223344)); // 4
console.log(getNumberOfEven(111)); // 0

// Написать собственную реализацию функций forEach, map, filter, some, every. 
// Каждая функция должна принимать два аргумента - массив и callback. Все функции, кроме forEach, должны вернуть результат. 

// forEach 

function myForEach(arr, callback) {
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index]);
    }
}

function write(element) { // функция которая передается в forEach
    console.log(element);
}

const a = [1, 3, 5, 7, 9]; // test arr

myForEach(a, write);

// map 

const b = ["Ukraine", "Germany", "Poland"];
console.log("b:", b);

const n = [2, 4, 5, 8, 10];
console.log("n:", n);

function myMap(arr, callback) {

    const result = [];

    for (const item of arr) {
        const newItem = callback(item);
        result.push(newItem);
    }

    return result;
};

function increase(num) {
    const result = num + 1;
    return result;
}

const updatedN = myMap(n, increase);
console.log("updatedN:", updatedN);

// filter

function myFilter(arr, callback) {
    const result = [];
    for (const item of arr) {
        if (callback(item)) {
            result.push(item);
        }
    }

    return result;
}

function predicateForFilter(x) {
    if (x > 5) {
        return x;
    }
}

const filteredN = myFilter(n, predicateForFilter);
console.log("filteredN:", filteredN);

// some

function isEven(n) {
    return n % 2 === 0;
}

function mySome(arr, callback) {
    for (const item of arr) {
        if (callback(item)) {
            return true;
        }
    }

    return false;
}

console.log("is some even:", mySome(n, isEven));

// every 

function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!(callback(arr[i]))) {
            return false;
        }
    }
    return true;
}

console.log("is every even:", myEvery(n, isEven));








































