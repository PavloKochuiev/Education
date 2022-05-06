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