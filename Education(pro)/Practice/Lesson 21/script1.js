"use strict";

const a = {
    name: "Dima",
    work: { name: "Developer"},
    sayHi: function() {
        console.log("SayHi", this.name)
    },
    sayGoodBye: () => {
        console.log("say Goodbye", this.name);
    }
}

a.name = "Petr";

console.log(a.name);

// const sayHi = a.sayHi;
// sayHi();

Object.defineProperty(a, "name", {
    value: "Gary Osborn",
    writable: false,
});

console.log(a.name);

const descriptors = Object.getOwnPropertyDescriptor(a, "name");
console.log(descriptors);

Object.defineProperty(a, "work", {
    writable: false,
})

Object.defineProperty(a, "test", {
    value: "Hello, World!",
    writable: true,
})

console.log(a)

