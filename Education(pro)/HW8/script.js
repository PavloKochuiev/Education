"use strict";

// Написать функцию “глубокого” копирования.Функция принимает один параметр и возвращает его копию “по значению”. 

// a !== b 

const userName = "Pasha";

const worker = {
    name: "Dagilis",
    age: 25,
    results: [4, 5, 5, 3],
    skills: {
        firstSkill: "HTML",
        secondSkill: "CSS",
        thirdSkill: "JS",
    }
};

function deepCopy(obj) {
    const clObj = {};
    for (const i in obj) {
        if (obj[i] instanceof Object) {
            clObj[i] = deepCopy(obj[i]);
            continue;
        }
        clObj[i] = obj[i];
    }
    return clObj;
}



const workerCopy = deepCopy(worker);
console.log("Worker: ", worker);
console.log("Worker Copy: ", workerCopy);
console.log("Worker === WorkerCopy", worker === workerCopy);

const userNameCopy = deepCopy(userName);
console.log("userName === userNameCopy", userName === userNameCopy);












