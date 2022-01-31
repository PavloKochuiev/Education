// 1.Вывести на страницу в одну строку через запятую числа от 10 до 20 
  
let i = 10;
let number = "";
while (i < 20) {
    number += i + ", ";
    i++;
}
number += i
console.log(number);



//2.Вывести квадраты чисел от 10 до 20

for (let a = 10; a < 21; a++) {
    console.log("Квадрат " + a + " = " + a * a);
}



// 3.Вывести таблицу умножения на 7

let d = 7;
let c;
for (c = 1; c <= 10; c++) {
    console.log(d + "*" + c + "=" + (d * c));
}



// 4.Найти сумму всех целых чисел от 1 до 15

let sum = 0;
for (let e = 1; e <=15; e++) {
    sum += e;
}
console.log(sum);



// 5. Найти произведение всех целых чисел от 15 до 35

let numberProduct = 1;
for (let f = 15; f <= 25; f++) {
    numberProduct = numberProduct * f;
}
console.log(numberProduct);



// 6.Найти среднее арифметическое всех целых чисел от 1 до 500

let average = 0;
let g = 500; 
for (g = 1; g <=500; g++) {
    average +=g;
}
console.log(average / 500);



// 7. Вывести на страницу сумму только четных чисел в диапазоне от 30 до 80

let h = 0;
for (let k = 30; k <= 80; k++) {
     if (k % 2 == 0)
         h += k;
}
 console.log(h)



//  8. Вывести на страницу все числа в диапазоне от 100 до 200 кратные 3

let l = 200;
for (let m = 100; m < l; m++) {
    if (m % 3 === 0)
        console.log(m);
}



// 9. Дано натуральное число. Найти и вывести на страницу все его делители.
// а) oпределить количество его четных делителей
// b) найти сумму его четных делителей

let n = 100;
let even = 0;
let total = 0;
for (let divider = 2; divider <= n / 2; divider++) {
    if (n % divider === 0) {
        if (divider % 2 == 0) {
            total++;
            even += divider;
        }
    }
}
console.log(even);
console.log(total);



// 10.Напечатать полную таблицу умножения от 1 до 10

let result = 'x ';
for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
        if (i == 0 && j > 0) {
            result += '[' + j + ']';
        }
        else if (j == 0 && i > 0) {
            result += '[' + i + '] ';
        }
        else if (i > 0 && j > 0) {
            result += (i * j) + ' ';
        }
    }
    result += '\n'
}
console.log(result);


// //11.Игра “Угадай число”. Сгенерировать случайное число в диапазоне от 0 до 10. Пользователь должен угадать число. Игра продолжается до тех пор, пока пользователь не угадает число. Пользователь может остановить игру в любой момент.
// Не понимаю как сделать, чтобы пользователь мог выйти в любой момент.

// let p = Math.floor(Math.random() * 10);
// console.log(p);
// while (true) {
//     let q = prompt("Угадай число от 1 до 10 :)");
//     if (isNaN(p)) {
//         alert("Ошибка ввода!");
//     } else if (q < p) {
//         alert("Больше!");
//     } else if (q > p) {
//         alert("Меньше!");
//     } else {
//         alert("Угадал!");
//     }
// }



//12. Запросить у пользователя число, которое будет высотой вершины прямоугольного треугольника. Вывести треугольник построчно через console.log

let w = 0;
let triangle = "";
height = +prompt('Введите число, которое будет высотой вершины прямоугольного треугольника');

while (w < height) {
    for (let u = 0; u < w + 1; u++) triangle += "*";
    console.log(triangle);
    w++;
} 