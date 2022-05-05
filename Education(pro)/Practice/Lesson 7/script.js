// Методы у примитивов

// Объект-обертка 

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


 