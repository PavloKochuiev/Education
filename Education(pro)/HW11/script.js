'use strict'

// Вывести таблицу 10 × 10, заполненную числами от 1 до 100. Используйте стандартные теги для работы с таблицами.
// Все элементы должны создаваться через javascript. Используйте бутстрап классы для оформления таблицы.

let table = document.createElement('table');

for (let i = 1; i <= 10; i++) {
    let row = document.createElement('tr');
    row.className = "text-center border border-warning table-hover";

    for (let j = 1; j <= 10; j++) {
        let cell = document.createElement(i === 1 || j === 1 ? 'th' : 'td');

        cell.appendChild(document.createTextNode(i * j));
        cell.className = "border-warning";

        row.appendChild(cell);
    }

    table.appendChild(row);
}

document.body.appendChild(table);

table.className = "table";