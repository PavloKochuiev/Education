// Объкты

const user = {
    userName: "Pasha",
    age: 25,
    isAdmin: true,
    role: null,
    hobby: {
        walking: true,
        working: false,
    }
};

console.log(user);
console.log(user.isAdmin);
console.log(user.hobby.walking);

// x > boll 
function isObject(x) {
    return typeof x === "object" && x !== null;
}

console.log("Is User an object:", isObject(user));
console.log("Is Null an object:", isObject(null));

const user2 = {
    userName: "Pasha",
    age: 25,
    isAdmin: true,
    role: null,
    hobby: {
        walking: true,
        working: false,
    }
};

delete user2.age;
userName = undefined;
console.log(user2);
console.log(user2["hobby"]); // обращение через индексатор, если есть пробелы

const test = 456;
console.log(["test"]);



// for in

const userForIn = {
    userName: "Pasha",
    age: 25,
    isAdmin: true,
    role: null,
};

for (const key in userForIn) {
    const value = userForIn[key];
    console.log("key:", key, typeof key);
    console.log("value:", value);
    console.log("***");
}

// функция принимает {}, возвращает количество number

function countObjectKeys(x) {
    let count = 0;
    for (const key in x) {
        count++;
    }

    return count;
}

console.log(countObjectKeys(userForIn));

console.log(countObjectKeys({}));

// bool -> {}, функция укажет пустой ли объект

// проходит через все ключи объекта и делает лишнюю работу

function isEmpty(x) {
    const count = countObjectKeys(x);
    return count === 0; 
}

// как только находит первый ключ возвращает результат

function isEmpty2(x) { 
    for (const key in x) {
        return false;
    } 
    return true;
}

// второе использование in, узнать есть ли такой ключ в объекте

console.log("userName" in userForIn);

const keys = Object.keys(userForIn);
const valuesInUserForIn = Object.values(userForIn);
console.log(keys, valuesInUserForIn);