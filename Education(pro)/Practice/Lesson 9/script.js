"use strict";

// Метод reduce у массивов

// Посчитать сумму элементов массива с помощью цикла

const a = [1, 2, 3, 4, 5];

function arraySum(arr) {
    let sum = 0;
    for (let index = 0; index < a.length; index++) {
        sum = sum + arr[index];
    }
    return sum;
}

console.log(arraySum(a));



// Посчитать сумму элементов с помощью forEach 

let sum = 0;

a.forEach((value) => sum = sum + value);

console.log(sum);

// reduce 

const reduceSum = a.reduce((acc, value) => {
    console.log("Acc", acc, "Value", value);

    const updatedAcc = acc + value;
    return updatedAcc;
}, 0);

console.log(reduceSum);



// функция для подсчета символов в строке  

const r = "aabbccc";

console.log(r);

function calc(str) {
    const result = {};
    for (const letter of str) {
        if (result[letter] !== undefined) {
            const count = result[letter];
            result[letter] = count + 1;
        } else {
            result[letter] = 1;
        }
    }

    return result;
}

console.log("Default method:", calc(r));



// Такая же функция с помощью reduce 
// reduce нельзя использовать со строкой, но мы можем явно привести строку к массиву 

function calcReduce(str) {
    const ar = Array.from(str)

    return ar.reduce((result, letter) => {
        const count = result[letter] === undefined ? 0 : result[letter];
        result[letter] = count + 1;

        return result;
    }, {});
}

console.log("Reduce:", calcReduce(r));



/// Остаточные функции и функции с произвольным количеством аргументов

// Object.assign - дает скопировать объекты в новый объект

const a1 = {
    a: 5,
    b: 10,
    c: 20,
}

const b1 = {
    userName: "Pasha",
    age: 25,
}

const c1 = Object.assign({}, a1, b1);
console.log("C1:", c1);

// max 

const max = Math.max(1, 4, 6, 7, 9);
console.log("max:", max);

const min = Math.min(1, 4, 6, 7, 9);
console.log("min:", min);

function myMax() {

    let max = arguments[0];
    for (const value of arguments) {
        if (value > max) {
            max = value;
        }
    }

    return max;
}

const n = myMax(1, 4, 6, 7, 9);
console.log("My Max:", n);



// max ES6 

const n1 = [3, 6, 7, 10, 15, 3];

function MaxES6(...rest) {
    let max = rest[0];
    for (const value of rest) {
        if (value > max) {
            max = value;
        }
    }

    return max; 
}

const ES6Max = MaxES6(5, 5, 7, 10);

console.log("MaxES6:", ES6Max);



/// spreаd оператор - использует синтаксис "...", можно сливать массив в один








