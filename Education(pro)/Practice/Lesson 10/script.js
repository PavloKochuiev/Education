"use strict"

// Замыкание - это возможность функции использовать переменные которые находятся снаружи этой функции
// В первую очередь интерпретатор ищет переменные (данные) в своей зоне видимости, т.е. сначала ищет внутри своих
// фигурных скобок, если ничего не нашел выходит выше.

// Замыкание срабатывает не в момент декларирования функции, а в момент вызова.

let userName = "Pasha Dagilis";

function sayHi() {
    let userName = "Andrey Ivanko";
    console.log("Hi, " + userName);
}

userName = "Petro Borov";

sayHi();

// Функции в JS это сущности высшего порядка, это значит что функция может принимать в качестве аргумента другую функцию
// либо возвращать из себя другую функцию.

function makeWorker() {
    let name = "Arm Worker";

    return function () {
        console.log("makeWorker:", name);
    };
}

let name = "Armer Outsider";

let work = makeWorker();

work();



// Приватные данные - это данные которые нельзя модифицировать и нельзя прочитать снаружи
// Ниже конструкция благодаря которой мы можем возвращать в return как будто бы массив функций,
// т.е. по сути наша функция может возвращать любое кличество функций, данных и т.д. 

function createProduct(name, count) {
    let productCount = count;

    return {
        buy: function () {
            console.log("Try to buy product:", name);
            if (productCount > 0) {
                productCount--;

                console.log("Product bought, left:", productCount);
                console.log("On Stock:", productCount, name);
            } else {
                console.error("No Products", name);
            }
        },
        hasProducts: function () {
            return productCount > 0;
        }
    }
}

// return function () {
//     console.log("Try to buy product:", name);
//     if (productCount > 0) {
//         productCount--;

//         console.log("Product bought, left:", productCount);
//         console.log("On Stock:", productCount, name);
//     } else {
//         console.error("No Products", name);
//     }
// }

const p = createProduct("iPhone", 3);

for (let index = 0; index < 3; index++) {
    p.buy();
}



// Создание продукта через конструктор, в таком случае можем перезаписать данные извне

function createProductNew(name, count) {
    this.name = name;
    this.count = count;

    this.buy = function () {
        console.log("Try to buy product:", name);
        if (this.count > 0) {
            this.count--;

            console.log("Product bought, left:", this.count);
            console.log("On Stock:", this.count, name);
        } else {
            console.error("No Products", name);
        }
    }

    this.hasProducts = function () {
        return this.count > 0;
    }

    // return {} // неявно возвращает объект
}

const bread = new createProductNew("Bread", 4);

console.log(bread);

bread.buy();

for (let index = 0; index < 5; index++) {
    const hasProducts = bread.hasProducts();
    console.log("hasProducts", hasProducts);
    bread.buy();
}

console.log("Part 1 is over.");








