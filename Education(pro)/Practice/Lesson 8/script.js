"use strict";

// Методы массива



const names = ["Pasha", "Dasha", "Sasha", "Natasha", "Roma"];
console.log("names:", names);

const numbers = [1, 2, 3, 4, 5];
console.log("numbers:", numbers);



// splice

numbers.splice(2, 2); // универсальный метод, в данном случае удаляет элементы из массива, первый аргумент определяет
// индекс с которого будет удалено, второй - количество элементов

console.log("numbers after splice:", numbers);

numbers.splice(2, 1, "New") // в данном случае первый аргумент указывает индекс элемента который будет удален, второй
// количество объектов которые будут удалены, а третий аргумент указывает каким элементом заменить удаленный

console.log("numbers afrer splice 2:", numbers);

numbers.splice(2, 0, 3, 4, 5) // в данном случае ничего не удаляет, а просто вставляет элементы начиная с первого
// индекса

console.log("numbers afrer splice 3:", numbers);

const numbersSplice = numbers.splice(5, 1); // вырезанные данные можно сохранить в новый массив, splice сохраняет все 
// вырезанное в новый массив

console.log("result from splice:", numbersSplice);



// slice

const numbersSlice = numbers.slice(1, 4); // метод slice позволяет вырезать кусок массива, первый аргумент - начало,
// второй - конец (не включительно), возвращает только новый массив с данными, исходный массив не меняется

console.log("numbersSlice:", numbersSlice)



// concat 

const concatedArray = names.concat(numbers).concat([6, 7, 8]);; // метод concat позволяет объединять массивы, 
// возвращает новый массив, не модифицирует массив на котором вызывается, можно вызывать по цепочке

console.log("Concat, names + numbers + []:", concatedArray);



// поиск в массиве

// find, findIndex // позволяет найти элемент в массиве с помощью функции predicate

let id = 0;

function createProduct(name) {
    return { id: id++, productName: name }
}

const products = [
    createProduct("Bread"),
    createProduct("Wine"),
    createProduct("Coca-cola"),
    createProduct("Pizza"),
    createProduct("Pepsi"),
];

console.table(products);

const productsStartsP = products.filter(product => product.productName.toLowerCase().startsWith("p")); // функция которая 
//отфильтровывает все продукты которые начинаются с P

console.log("productsStartsP", productsStartsP); 

const productsFind = products.find(product => product.productName.toLowerCase().startsWith("p")); // функция которая 
// возвращает один продукт который начинается с P

console.log("productsFind", productsFind); 

// стрелочная функция, любая функция может быть переписана в стрелочную, далее одна функция в трех вариациях

// function isEven(n) {
//     return n % 2 === 0;
// }

// const isEven = (n) => {
//     return n % 2 === 0;
// }

const isEven = n => n % 2 === 0;

const numbersIsEven = numbers.filter(n => n > 0 && n < 3); // используем метод filter, внутри нее записываем
// стрелочную функцию

console.log("numbersIsEven:", numbersIsEven)