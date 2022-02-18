// 1. Написать функцию isSymbolPresentInString(str, symbol) - возвращает true если символ найден в строке и false если нет.
// isSymbolPresentInString("abc", "a") // true
// isSymbolPresentInString("abc", "e") // false

let str = "abc";

function isSymbolPresentInString(str, symbol) {
    return !!~str.indexOf(symbol);
}

console.log(isSymbolPresentInString("abc", "a"));
console.log(isSymbolPresentInString("abc", "e"));

// я нашел такое решение, но не понимаю как оно работает :(



// 2. Написать функцию getSymbolIndex(str, symbol) - возвращает индекс первого найденного символа в строке, или - 1 если символ не найден
// getSymbolIndex("hello lol", "h") // 0
// getSymbolIndex("hello lol", "l") // 2
// getSymbolIndex("hello lol", "v") // -1

function getSymbolIndex(str, symbol) {
    return str.indexOf(symbol);
}

console.log(getSymbolIndex("hello lol", "h"));
console.log(getSymbolIndex("hello lol", "l"));
console.log(getSymbolIndex("hello lol", "v"));



// 3. Написать функцию getNumberOfEven(n) - получить количество четных цифр в числе
// getNumberOfEven(223344) // 4
// getNumberOfEven(111) // 0

function getNumberOfEven(n) {
    return n.toString().split('').reduce(function (count, current) {
        if (!(+current % 2)) count++;
        return count;
    }, 0);
}

console.log(getNumberOfEven(223344));
console.log(getNumberOfEven(111));



// 4.Написать собственную реализацию функций forEach, map, filter, some, every. Каждая функция должна принимать два аргумента - массив и callback. Все функции, кроме forEach, должны вернуть результат. 

// forEach 

let each = function (arr, callback, thisArg) {
    let i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        callback.call(thisArg, arr[i], i, arr);
    }
};

// map

Array.prototype.mapping = function (callback) {
    const arrayToReturn = new Array(this.length);

    for (let index = 0; index < this.length; index++) {
        arrayToReturn[index] = callback(this[index], index, this);
    }

    return arrayToReturn;
}

// filter 

let value = [100, 200, 300, 400, 500];
let valueFilter = value.filter((sum) => {
    return sum > 200;
});

console.log(valueFilter);

// some

let experience = [5, 6, 2, 1, 1];
let moreThan1 = experience.some((experience1) => {
    return experience1 > 1;
});
console.log(moreThan1);

// every

const products = [
    { product: 'Bread', amount: 5 },
    { product: 'Milk', amount: 3 },
    { product: 'Meat', amount: 2 },
];
const isInStock = products.every((product) => {
    return product.amount > 0;
});

console.log(isInStock);