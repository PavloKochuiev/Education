// На экране поле для ввода текста и кнопка“ Добавить”.При нажатии на кнопку текст из поля для ввода добавляется
// как ряд в список снизу.

// Каждый ряд в списке содержит введенный текст и кнопку“ Удалить”.При нажатии на кнопку текущий ряд удаляется из списка.

// Любое действие должно синхронизироваться с localStorage.При обновлении страницы всегда должно отображаться
// последнее состояние(все элементы) списка.

// В storage нужно записывать только данные, а не DOM элементы.

const form = document.querySelector("form");

const enteredTextInput = form.elements["enteredText"];

form.addEventListener("submit", event => {
    event.preventDefault();

    const enteredText = enteredTextInput.value;
    createElement(enteredText);
});

let itemsArray = [];
if (localStorage.getItem('items')) {
    itemsArray = JSON.parse(localStorage.getItem('items'));
} else {
    itemsArray = []
}

function createElement(value) {
    if (value !== "") {
        let div = document.createElement("div");

        let listitem = document.createElement("li");
        listitem.textContent = value;
        div.appendChild(listitem);

        let deleteButton = document.createElement("button")
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '20px';
        deleteButton.onclick = function() {
            div.remove();
            localStorage.removeItem('items', JSON.stringify(itemsArray));
        }
        div.appendChild(deleteButton);

        itemsArray.push(listitem.textContent)
        localStorage.setItem('items', JSON.stringify(itemsArray));

        document.body.appendChild(div)

        return div;
    }
}

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

data.forEach(item => {
    createElement(item)
});
