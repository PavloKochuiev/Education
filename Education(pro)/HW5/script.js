// 1.Написать функцию, которая вычисляет площадь круга. 
// Нашел что-то, но не понимаю как это работает.

function circle(radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
}
let c = new circle(3);
console.log('Area =', c.area().toFixed(2));



// 2. Написать функцию, которая вычисляет длину окружности.

function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}
console.log("Circumference:", calculateCircumference(1));



// 3. Написать функцию, которая вычисляет среднее арифметическое двух чисел.

function average(a, b) {
    return (a + b) / 2;
}
console.log("Average: ", average(20, 30));



//  4. Написать функцию calc(x, y, action), которая получает 3 аргумента: числа x и y, а также строку action. В переменной action может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной action.


function calc(a, b, action) {
    switch (String(action)) {
        case "+":
            return +a + +b;
        case "-":
            return +a - +b;
        case "*":
            return +a * +b;
        case "/":
            return +a / +b;
        case "%":
            return +a % +b;
        case "^":
            return +a ^ +b;
        default:
            console.log("try again");
            break;
    }
};
console.log(calc(10, 5, "+"));
console.log(calc(10, 5, "-"));
console.log(calc(10, 5, "*"));
console.log(calc(10, 5, "/"));
console.log(calc(10, 5, "%"));
console.log(calc(10, 5, "^"));
console.log(calc(10, 5, "0"));