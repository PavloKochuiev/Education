// Массивы // используются для хранения однотипных данных

const names = ["Pasha", "Dima"];

console.log(Array.isArray(names));

const userName = {
    firstName: "Pasha",
    lastName: "Dagilis",
}

// Функция которая проверяет является ли переменная объектом

function isObject(x) {
    return typeof x === "object" && x !== null && !Array.isArray(x);
}

console.log(isObject(names));

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i];
    console.log(value);
}

const brands = ["IKEA", "ZARA", "Bershka"];

brands.push("Vans"); // добавляет элемент в конец массива
console.log(brands);

brands.pop(); // удаляет последний элемент массива 
brands.shift() // удаляет первый элемент из массива 
console.log(brands);

function popArray(arr) {
    let element;

    do {
        element = arr.pop();
        console.log("element:", element);
    } while (element !== undefined)
}

popArray(brands);

// for of 

const games = ["GTA", "FIFA", "CS"];

for (const game of games) {
    console.log(game);
}

// функция для создания массива 

function createArray(length, value) {
    const arr = [];

    for (let index = 0; index <= length; index++) {
        arr.push(value);
    }

    return arr;
}

const newArray = createArray(8);
console.log(newArray);



const desk = [];
for (let index = 0; index < 8; index++) {
    const row = createArray(8, "*");
    desk.push(row);

}

console.log(desk);

const row = desk[3];
row[3] = "&";



// Методы для перебора массива 

function upperCase(element) {
    return element.toUpperCase();
}

const pets = ["Dog", "Cat", "Pig"];

function print(element) {
    console.log("Pet:", element);
}

pets.forEach(print); // используется для перебора 

const updatedPets = pets.map(upperCase); // используется для создания нового модифицированного массива
console.log(updatedPets);

updatedPets.forEach(print);

const num = [0, 1, 2, 3, 4, 5];

function isEven(n) {
    return n % 2 === 0;
}

const evenNum = num.filter(isEven); // функция фильтр которая принимает predicate, создает новый массив 
console.log(evenNum);

// some every

const someNum = num.some(isEven); // возвращает true если хотя бы один элемент массива удовлетворяет предикату
console.log(someNum);

const everyNum = num.every(isEven); // возвращает true если все элементы массива удовлетворяют предикату
console.log(everyNum);

// создать функцию которая создает продукт 

function Product(name, price) {
    this.name = name;
    this.price = price;
}

const products = [
    new Product("bread", 20),
    new Product("milk", 10),
    new Product("beer", 30),
];

const money = 20;

const pResult = products.filter(function (product) {
    return product.price <= money;
})

console.log(pResult);

const pResult1 = pResult.map(function (product) {
    return product.name;
})

console.log(pResult1);

// стрелочная функция 

const p = products
    .filter(product => product.price <= money)
    .map(product => product.name)

console.log(p);