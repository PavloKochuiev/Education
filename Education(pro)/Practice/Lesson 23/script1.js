"use strict";

// Классы

// Description
// Характеристики, поведение
class User {
    constructor(id, firstName, lastName) {
        console.log("constructor");
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;

        this.x = 0;
        this.y = 0;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    moveLeft() {
        console.log("moveLeft");
        if (this.x > 0) {
            this.x--;
        }
    }

    moveRight() {
        console.log("moveRight");
        this.x++;
    }

    moveUp() {
        console.log("moveUp");
        if (this.y > 0) {
            this.y--;
        }
    }

    moveDown() {
        console.log("moveDown");
        this.y++;
    }

    move(direction) {
        switch (direction) {
            case "right":
                this.moveRight();
                break;
            case "left":
                this.moveLeft();
                break;
            case "down":
                this.moveDown();
                break;
            case "up":
                this.moveUp();
                break;
            default:
                throw new Error(`Invalid Direction: ${direction}`);
        }
    }

    show() {
        console.log(
            `UserId: ${this.id}, My position: X: ${this.x}, Y: ${this.y}`
        );
    }
}

class Developer extends User {
    constructor(id, firstName, lastName, skills) {
        console.log("Developer");
        super(id, firstName, lastName);
        this.skills = skills;
    }

    work() {
        console.log(`working... using ${this.skills[0]}`);
    }

    show() {
        super.show();
        document.body.innerText = "";
    }
}

// Objects
// Instance
const user = new Developer(1, "Petro", "Borisov", [
    "JavaScript",
    "Html",
    "React",
]);
console.log(user.fullName);

user.move("right");
user.move("right");
user.move("down");
user.move("down");
user.move("up");

user.show();
user.work();

// User -> base class
// Developer -> extends User

// new Developer () -> 1. new User (constructor) 2. new Developer (constructor)
