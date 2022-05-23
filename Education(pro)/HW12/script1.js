'use strict'

// Дано 5 квадратов, внутри каждого из которых изначально вписана цифра 0.
// При клике на любой квадрат цифра в нем увеличивается на один.

let squares = document.querySelectorAll("div");

        for (let i = 0; i < squares.length; ++i) {
            squares[i].addEventListener("click", counter);
        }

        function counter() {
            this.innerText = ++this.innerText;
            console.log(this.innerText);
        }