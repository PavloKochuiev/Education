'use strict'

// Сделать список. По клику на любой из элементов он выделяется красным цветом. Если один уже выделен, 
// а кликнули по другому, то выделение с прошлого снимается, и ставится на тот, по которому кликнули.

const ul = document.querySelector("ul");

ul.addEventListener('click', event => {
    let active = document.querySelector('.active');
    if (active) active.classList.remove("active");
    event.target.classList.add("active");
})