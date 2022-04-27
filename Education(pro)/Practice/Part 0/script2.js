
// Тернарный оператор

let age = 15;
let accessAllowed = (age > 18) ? "yes" : "no";
console.log(accessAllowed)



// Используя конструкцию if..else, напишите код, который будет спрашивать: 
// „Какое «официальное» название JavaScript ?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», 
// в противном случае – отобразить: «Не знаете ? ECMAScript!»

let answer = prompt("Какое «официальное» название JavaScript?");
if (answer == 'ECMAScript') {
    alert('Верно!')
} else {
    alert('Не знаете? ECMAScript!')
}



// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.

let number = prompt('Введите число?')
if (number > 1) {
    alert('1')
} else if (number < 0) {
    alert('-1')
} else {
    alert('0')
}



// Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}

// result = (a + b < 4) ? 'Мало' : 'Много';


