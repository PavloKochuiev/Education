// Функции

function sayFromOneToTen() {
    console.log("Start");

    for (let a = 0; a < 10; a++) {
        console.log("a:", a);
    }

    console.log("End");
}

sayFromOneToTen();

for (let b = 0; b < 3; b++) {
    sayFromOneToTen();
}



function isEven(number) {
    const result = number % 2 === 0;
    return result;
}

const isMyNumberEven = isEven(10);
console.log(isMyNumberEven);

for (let r = 0; r < 5; r++) {
    const result = isEven(r);

    console.log("Is Even?", r, result)
}



function calculateSquare(x, y) {
    if (typeof x !== "number" || Number.isNaN(x)) {
        return "Invalid x";
    }

    if (typeof y !== "number" || Number.isNaN(y)) {
        return "Invalid y";
    }

    return x * y;
}

const t = calculateSquare(10, 5);
console.log("Square:", t);