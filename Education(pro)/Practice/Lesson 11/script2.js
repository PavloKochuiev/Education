"use strict"

const button = document.createElement("button"); 

let count = 5; 

button.innerText = `Button (${count})`;
button.onclick = function() {
    count--;
    button.innerText = count > 0 ? `Button (${count})` : "Button";
    if (count === 0) {
        button.disabled = true;
    }
    console.log("Button", count);
}

document.body.appendChild(button);

console.log(50 / "apple");

 






