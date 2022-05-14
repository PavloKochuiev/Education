"use strict"

let id = 1;

function createUser(email) {
    return {
        id: id++,
        email
    }
}

const users = [
    createUser("Eugene"),
    createUser("Roman"),
    createUser("Petro"),
]

console.table(users);

function createUserParagraph(user) {

}

for (const user of users) {
    const p = createUserParagraph(user);
    
}

