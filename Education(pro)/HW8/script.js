// Написать функцию “глубокого” копирования.Функция принимает один параметр и возвращает его копию “по значению”. 
// В функцию можно передать параметр любого типа. 
// Если передали объект, то предусмотреть ситуацию, когда свойствами этого объекта будут объекты или массивы.
// Если передали массив, то предусмотреть ситуацию, когда элементами этого массива будут объекты или массивы.
// Если передали примитив - вернуть его.

// a !== b 
// a.c !== b.c

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

// function deepCopy(origin) {

//     if (origin instanceof Object) {
//         return origin;
//     }

//     let target = {};

//     for (let key in origin) {
//         let temp = origin[key];

//         if (typeof temp === "object" && temp !== null) {
//             target[key] = deepCopy(temp);
//         } else {
//             target[key] = temp;
//         }
//     }
//     return target;
// }

// let workerCopy = deepCopy(worker);
// console.log("Worker: ", worker);
// console.log("Worker Copy: ", workerCopy);



// let userNameCopy = deepCopy(userName);
// console.log("userName: ", userName);
// console.log("userNameCopy: ", userNameCopy);



function deepCopy(obj) {
    const copyObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if ("object" === typeof obj[key] && obj[key] !== null)
                copyObj[key] = deepCopy(obj[key]);
            else
                copyObj[key] = obj[key];
        }
    }
    return copyObj;
}



const workerCopy = deepCopy(worker);
console.log("Worker: ", worker);
console.log("Worker Copy: ", workerCopy);
console.log("Worker === WorkerCopy", worker === workerCopy);

const userNameCopy = deepCopy(userName);
console.log("userName: ", userName);
console.log("userNameCopy: ", userNameCopy);
console.log("userName === userNameCopy", userName === userNameCopy);











