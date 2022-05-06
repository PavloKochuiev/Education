// Методы у примитивов

const user = {
    name: "Pasha",
    sayHello: function() {
        console.log("Hello," + this.name)
    }
}

user.sayHello();

const text = "Always Get A 69"; 

console.log("Text Lenght:", text.length);
console.log("Sub String:", text.substring(0, 10));

// string (primitive)
// -> string (object)
// string (object) -> functions -> substring 

const number = 100.5; 
console.log(number.toFixed());



// Объект-обертка // Стараться никогда не использовать 

const n = new Number("123");
console.log(n, typeof n);

// Методы у строк 

const string = "My new test String";
console.log(string.length); // показывает длину строки
console.log(string.charAt(0)); // выводит символ по очередности, начинает с нуля 
console.log(string[3]); // можно также обратиться к символу через индексатор, тоже начинается с нуля
console.log(string.toUpperCase()) // преобразовывает все буквы в большие
console.log(string.toLowerCase()) // преобразовывает все буквы в маленькие
console.log(string.indexOf("t")); // возвращает индекс первого совпадения 
console.log(string.lastIndexOf("t")); // возвращает индекс последнего совпадения 
console.log(string.includes("M")); // возвращает булевое значение, имеется ли буква в строке
console.log(string.startsWith("m")); // проверяет начинается ли строка с буквы которую мы передали аргументом
console.log(string.endsWith("ing")); // проверяет заканчивается ли строка с указанного аргумента
console.log(string.substring(4, 10));

// можно также пройтись циклом по строке, вывести ее побуквенно 

for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    console.log("Index: " + i + " Letter: " + letter);
}




 