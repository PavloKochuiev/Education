class Button {
    #element;

    constructor(props) {
        this.#element = document.createElement("button");

        this.#element.innerText = props.text;
        this.#element.classList.add(props.className);
    }

    onClick(callback) {
        this.#element.addEventListener("click", callback);
    }

    enable() {
        this.#element.disabled = false;
        this.#element.classList.remove("disabled");
    }

    disable() {
        this.#element.disabled = true;
        this.#element.classList.add("disabled");
    }

    render() {
        return this.#element;
    }
}
