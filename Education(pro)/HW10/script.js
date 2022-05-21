'use strict'

// Написать функцию generateList.Принимает массив из чисел и массивов чисел, например: [1, 2, [1.1, 1.2, 1.3], 3].
// Нужно сгенерировать список из элементов.Если в массиве встречается массив, то нужно сделать вложенный список.

let array = [1, 2, [1.1, 1.2, 1.3], 3];

// generateList(array);

// function generateList(array) {
//     let element = "<ul>";

//     for (let i = 0; i < array.length; ++i) {
//         let row = array[i];

//         if (Array.isArray(row)) {
//             element = element + "<li><ul>";

//             for (let i = 0; i < row.length; ++i) {
//                 element = element + `<li>${row[i]}</li>`;
//             }
//             element = element + "</ul></li>";
//         }

//         else
//             element = element + `<li>${row}</li>`;
//     }

//     element = element + "</ul>";

//     document.body.innerHTML = element;
// }

// новое решение >>> 

let generateList = function (items) {
    return items.reduce((ul, item) => {

        let li = document.createElement('li');

        if (!Array.isArray(item)) {
            li.innerText = item;
        } else {
            let newUl = generateList(item);
            li.appendChild(newUl);
        }

        ul.appendChild(li);
        return ul;

    }, document.createElement('ul'));
}

document.body.appendChild(generateList(array));

























