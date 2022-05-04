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