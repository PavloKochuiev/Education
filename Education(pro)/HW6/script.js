// 1.Написать функцию copy(target, origin), которая копирует свойства из объекта origin в объект target и возвращает объект со всеми свойствами. В данном задании используйте for ... in для работы со свойствами объектов.

function copy(origin) {
    let target = {};
    for (let key in origin) {
        target[key] = origin[key];
    }
    return target;
};

const origin = {
    country: "Ukraine",
    population: 40000000,
    language: 'ukrainian',
};

console.log(copy(origin));



// 2.Напишите функцию, принимающую и сравнивающую два объекта. Если объекты содержат одинаковые ключи и значения, то функция возвращает true, если нет - false. Функция должна учитывать, что количество свойств в двух объектах может отличаться.

function objectsAreSame(Altern8, ChemicalBrothers) {
    let objectsAreSame = true;
    for (let propertyName in Altern8) {
        if (Altern8[propertyName] !== ChemicalBrothers[propertyName]) {
            objectsAreSame = false;
            break;
        }
    }
    return objectsAreSame;
}

const Altern8 = {
    genre: "electro",
    format: "EP",
    numberOfTracks: 4,
}

const ChemicalBrothers = {
    genre: "breakbeat",
    format: "LP",
    numberOfTracks: 12,
}

console.log(objectsAreSame(Altern8, ChemicalBrothers));



// // 3.Написать функцию, которая принимает строку и возвращает данные о том, сколько раз встречается каждая буква. Например, если передали строку “aaabbc”, то функция должна сообщить, что буква “a” встретилась 3 раза, буква “b” встретилась 2 раза, а буква “c” - 1 раз. Функция не должна использовать console.log, а должна вернуть объект с данными.

function calc(str) {
    const result = {};
    for (const letter of str) {
        if (result[letter] !== undefined) {
            const count = result[letter];
            result[letter] = count + 1
        } else {
            result[letter] = 1;
        }
    }
    return result;
}

const task = calc("aaabbc");
console.log(task)