"use strict";

// JSON - строчный формат для кодирования данных

// Создаем тестовые данные 

function createUser(name, index) {
    return { id: index, name, email: `${name}@gmail.com` };
}

function createProduct(name, index) {
    return { id: index, name, isAvailable: true };
}

function createArray(count, callback) {
    return new Array(count)
        .fill()
        .map((_, index) => callback(index));
}

const data = {
    users: createArray(10, index => createUser(`user-${index}`, index)),
    products: createArray(10, index => createProduct(`product-${index}`, index)),
}

// const json = JSON.stringify(data);

// console.log(json);

// const user = createUser("peter-parker", 1);
// const json = JSON.stringify(user);
// console.log(json);

const json = `{"id":1,"name":"peter-parker","email":"peter-parker@gmail.com"}`;

function parseJson(json) {
    try {
        return JSON.parse(json);
    } catch (error) {
        console.log("Error", error.stack);
        return undefined
    }
}

// try {
//     const user = JSON.parse(json);
//     console.log("After parse:", user);
// } catch (error) {
//     console.log("Error", error.stack);
// }

const user = parseJson(json);

console.log("Parsed User:", user);