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
    const p = document.createElement("p");
    const span = document.createElement("span");

    span.style.fontWeight = "bold";
    span.innerText = `Id: ${user.id} `;

    p.appendChild(span);

    const textNode = document.createTextNode(`E-mail: ${user.email}`);
    // textNode.textContent = `-mail: ${user.email}`;

    // p.innerText = `e-mail: ${user.email}`;

    p.appendChild(textNode);

    return p;
}

for (const user of users) {
    const p = createUserParagraph(user);
    document.body.appendChild(p);
}

// можно также добавить по id 

// const wrapper = document.querySelector("#wrapper");

// можно добавить класс с помощью:

// element.className = "bold";
