"use strict"

// у каждой функции есть скрытый объект, к которому как разработчики мы не можем получить доступ, но внутри он создается
// и используется, это называется лексическим окружением. 

let a = 5;

function aShow() {
    console.log(a);
}

aShow();

// в примере выше присутствует замыкание



function createWorker() {
    let name = "Worker";

    return {
        readname: function () {
            return name;
        },
        setName: function (newName) {
            name = newName;
        }
    }
}

const worker = createWorker();

let n = worker.readname();

n = "Man";

worker.setName("Man");

console.log(n);
console.log(worker.readname())



// контекст вызова 

// bind позволяет привязать контекст

const g = {
    x: 0,
}

function increment() {
    this.x++;
}

const f = increment.bind(g);

f();

console.log(g);

increment.call(g);
console.log("increment.call", g);



const user = {
    age: 18,
}

function setAge(age) {
    this.age = age;
}

setAge.call(user, 25);
console.log("User:", user);

setAge.apply(user, [10]);
console.log("User:", user);



// стрелочные функции // когда используешь методы массива всегда передавать в них стрелочные функции

let group = {
    title: "Our group",
    students: ["Max", "Roma", "Gnus"],

    showList() {

        // const self = this; 
        // this.studenst.forEach(function(student) {
        //     console.log(self.title + ": " + student);
        // });
        
        // перепишем это на использование стрелочных функций >>>
        // стрелочная функция всегда использует this своего родителя

        this.students.forEach(student => {
            console.log(this.title + ": " + student);
        })
    }
}

group.showList();

