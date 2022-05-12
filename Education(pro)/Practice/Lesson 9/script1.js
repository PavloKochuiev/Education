"use strict"

// Отложенный вызов функции

function sayHello () {
    console.log("Hello, World!");
}

console.log("Before:");

const id1 = setTimeout(sayHello, 3000); // функция которая позволяет вызывать функцию callback с задержкой, второй аргумент - 
// время в мс, отрабатывает один раз, если не передать второй аргумент, все равно timeout отработает после всего кода 

setTimeout(sayHello); // отрабатывает позже чем код на 18 строке, так как асинхронный код всегда отрабатыват
// после всего остального 

clearTimeout(id1);

console.log("After:", id1);

// setInterval // также есть функция которая совершает действий каждый определенный промежуток времени

function sayGoodbye() {
    console.log("Goodbye!")
}

const id2 = setInterval(sayGoodbye, 1000);

setTimeout(() => { // можно очистить функцию, но только с помощью стрелочной функции
    console.log("Clear Interval");
    clearInterval(id2)
}, 3000);



// с помощью такой конструкции можно обратиться к данным внутри объекта и выводить их независимо от того где 
// находится this

const user = {
    userName: "Pasha", 
    printName: function() {
        console.log("Print Name:", this.userName);
    }
}

user.printName();
const printName = user.printName.bind(user)

printName();




