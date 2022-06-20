"use strict";

// ES6 
// const, let 
// spread operator, rest (раньше был arguments), аргументы по умолчанию

function doSomething(a, b, ...rest) {
    console.log(a, b, rest);
}

doSomething(2, 3, 4, 6, 7);

const a = [1, 2, 3];
const b = [4, 5, 6];

const c = [...a, ...b];
console.log(c);



const products = ["Bread", "Beer", "Meat"];

const [firstProduct] = products;
console.log(firstProduct);