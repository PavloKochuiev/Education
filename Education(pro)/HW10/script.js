'use strict'

// Написать функцию generateList.Принимает массив из чисел и массивов чисел, например: [1, 2, [1.1, 1.2, 1.3], 3].
// Нужно сгенерировать список из элементов.Если в массиве встречается массив, то нужно сделать вложенный список.

let array = [1, 2, [1.1, 1.2, 1.3], 3];

generateList(array);

function generateList(array) {
    let element = "<ul>";
    const count = array.length;

    for (let i = 0; i < count; ++i) {
        let row = array[i];

        if (Array.isArray(row)) {
            element = element + "<li><ul>";

            for (let i = 0; i < row.length; ++i) {
                element = element + `<li>${row[i]}</li>`;
            }
            element = element + "</ul></li>";
        }

        else
            element = element + `<li>${row}</li>`;
    }

    element = element + "</ul>";

    document.body.innerHTML = element;
}























