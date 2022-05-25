"use strict";

// ДЗ12 

function createSquare() { // создаем функцию которая создает квадрат со всеми его элементами
    const square = document.createElement("div"); // создаем квадрат через div
    const count = document.createElement("span"); // добавляем в него стартовый текст текст чтобы он отображался
    count.textContent = "0";

    const plus = document.createElement("button"); // добавляем кнопку плюс
    plus.textContent = "+";
    plus.addEventListener("click", event => { // добавляем обработчик события на клик
        let value = Number(count.textContent); // достаем переменную из count 
        value++; // при каждом клике count будет увеличиваться на один

        count.textContent = String(value); // обязательно вписываем новое значение в textcontent
    })

    const minus = document.createElement("button"); // добавляем кнопку минус 
    minus.textContent = "-";
    minus.addEventListener("click", event => { // делаем все что и для кнопки плюс только с минусом
        let value = Number(count.textContent);
        value--;
        
        count.textContent = String(value);
    });

    square.appendChild(count); // добавляем все в разметку 
    square.appendChild(plus);
    square.appendChild(minus);

    return square; // возвращаем собранный квадрат
}

for (let index = 0; index < 3; index++) { // делаем цикл, создавая три квадрата с кнопками 
    const square = createSquare();
    document.body.appendChild(square); // добавляем их в конце документа
}

