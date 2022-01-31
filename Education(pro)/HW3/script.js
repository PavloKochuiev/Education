const a = 10;
const b = 5;

if (a > b) {
    console.log("Is A > B? Yes, it is.");
}



const c = 17;
if (c % 2 === 0) {
    console.log("Even");
} else {
    console.log("Not even");
}

console.log(c % 10)



const user = prompt("Как вас зовут?");
const age = +prompt("Сколько вам лет?");

const alcoholic = confirm("Алкоголь употребляем?");

if ((alcoholic) === false) {
    console.log("Так держать, " + (user));
} else if (age >= 18 && age < 40) {
    console.log("Только водку с пивом не мешай, " + (user));
} else if (age >= 40) {
    console.log("Не злоупотребляйте, " + (user));
} else if (age <= 18) {
    console.log("Ты что, " + (user) + "?! Маме расскажу!");
}
  




