// События

// ниже старый способ, проблема в том что мы не можем добавить больше одной функции

const btn = document.querySelector("#btn"); // получаем доступ к кнопке
if (btn !== null) {
    // btn.onclick = onButtonClick; // присвоили функцию событию, старый способ
    btn.addEventListener("click", onButtonClick); // правильный способ добавления

    btn.addEventListener("click", () => { // можем добавлять больше одной функции
        console.log("One More Click")
    });
}

function onButtonClick(event) { // наша функция
    console.log("Click", event.target);
    // btn.onclick = undefined; // больше одного раза функция работать не будет 
}

const cancelEventButton = document.querySelector("#cancelEvent"); // убираем у первой кнопки ее событие, событие
// со стрелочной функции удалить таким способом нельзя

if (cancelEventButton !== null) {
    cancelEventButton.addEventListener("click", () => {
        console.log("Cancel Event Button Click");
        btn.removeEventListener("click", onButtonClick);
    }, { once: true }); // у addEventListener может быть третий параметр, который говорит о том что функцию можно
    // нажать только один раз
}

// отменить можно только событие описанное отдельно созданной функцией
