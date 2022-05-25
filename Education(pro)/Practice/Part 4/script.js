// Площадь круга

function calculateSquare(radius) {
    square = radius * Math.PI; 
    return square;
}

console.log(calculateSquare(15));

// Как вычислить длину окружности 

function calculateCircumference(diameter) {
    circumferense = Math.PI * diameter; 
    return circumferense;
}

console.log(calculateCircumference(10));

// Как вычислить среднее арифметическое двух числе 

function average(first, second) {
    result = (first + second) / 2; 
    return result;
}

console.log(average(40, 50));

// Написать функцию calc(x, y, action), которая получает 3 аргумента: числа x и y, а также строку action. 
// В переменной action может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной action.

function calc(x, y, action) {
    if (action === "+") {
        return x + y;
    } else if (action === "-") {
        return x - y;
    } else if (action === "*") {
        return x * y;
    } else if (action === "/") {
        return x / y;
    } else if (action === "%") {
        return x % y;
    } else (action === "^")
        return x ^ y;
}

console.log(calc(10, 10, "/"))




