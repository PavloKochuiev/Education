"use strict";

// Как ведут себя объекты: 

const ObjectA = {
    userName: 'Pasha', 
    age: 25,
    gender: 'male'
}

const copyOfObjectA = ObjectA;
ObjectA.citizen = 'Ukraine';

console.log(ObjectA);

console.log(typeof ObjectA)



// Проблема динамической типизации:

function a() {
    console.log('Brave New World')
}

a()

a = 10

console.log(a)



// Объекты:

const myCity = { 
    city: 'Odesa',
    population: 100000, 
    country: 'Ukraine'
}

console.log(myCity)

myCity.city = 'Kyiv' // изменение свойства у объекта через точечную запись

console.log(myCity)

delete myCity.country // удаление свойства из объекта 

console.log(myCity)

myCity['population'] = 200000 // доступ к свойству из объекта через квадратные скобки 

console.log(myCity)

const yourCity = {
    city: 'Odesa',
    cityGreeting: function () {
        console.log('Greetings!')
    }
}

yourCity.cityGreeting()



// Вложенный объект: 

const product = {
    title: 'milk',
    info: {
        price: 40, 
        isAvailable: true
    }
}

console.log(product)

// Создайте страницу, которая спрашивает имя у пользователя и выводит его.

let userName = prompt("Как тебя зовут?");
alert(userName);

// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

let firstNumber = +prompt("Первое число?");
let secondNumber = +prompt("Второе число?");

alert(firstNumber + secondNumber);