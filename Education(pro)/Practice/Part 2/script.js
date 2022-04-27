// Введение

console.time("Request");

console.log("Hello, world!");

console.info("Console, INFO!");

console.error("Error, 404!");

console.count("console, count!");
console.count("console, count!");
console.count("console, count!");

console.timeEnd("Request");

let color = "green";
console.log(color);

color = "blue";
console.log(color);





// Преобразование типов

const a = 1;
console.log("Type of a: " + typeof a);

const b = String(5);
console.log(b, typeof b);

const c = 5 + "5";
console.log(c, typeof c);

const d = Number('303');
console.log(d, typeof d);

const e = '6' * '3';
console.log(e);

// Логическое преобразование 

const f = Boolean(0);
console.log(f, typeof f);





// Модальные окна

const userName = prompt("Enter your name:");
console.log(userName);

const g = "newstring";
console.log(g.length);

// Операторы сравнения

const firstNumber = 30; 
const secondNumber = '30'; 
const compareResult = firstNumber === secondNumber; //  почти всегда использовать 
console.log(compareResult);

console.log("Hello" + " " + "World!");

console.log(1 === Number("1"));

const q = 50 % 40;
console.log(q);

const w = 19;   
const isEven = w % 2 === 0; 
console.log("Value:", w, "Is Even:", isEven);





// Логические операторы 

const logicNumber = 5; 

if (logicNumber === 5) {
    console.log("It's five");
}



const year = +prompt("Enter year:");
if (Number.isNaN(year) === false) {
    if (year !== 0) {
        const age = 2022 - year;
        console.log(age);
    } else {
        console.log("Error!");
    }
} else {
    console.log("Error!");
}



// if, else, else if

const country = "Ukraine";
if (country === "Ukraine") {
    console.log("You are in Ukraine");
} else if (country === "USA") {
    console.log("You are in USA");
} else {
    console.log("Dont know your country");
}

// Тернарный оператор 

const numb = 15; 
numb % 2 === 0 ? console.log("Even:") : console.log("Not Even:")



// Циклы while, do / while, for 

let r = 1; 
while (r <= 100) {
    console.log("r:", r);
    r++;
}

let y = 101;
do {
    console.log("y:", y);
} while (y <= 100)
console.log("y after do / while:", y);

for (let u = 0; u <= 100; u++) {
    console.log("U:", u)
}

for (let o = 0; o < 10; o++) {
    console.log("o:", o);

    for (let pat = 0; pat < 10; pat++) {
        console.log("pat:", pat);
    }
}

let count = 0;
for (let aa = 1; aa <= 100; aa++) {
    count = count + aa;
}
console.log("Count:", count);