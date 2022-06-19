class Input {
    #element;

    constructor(props) {
        this.#element = document.createElement("input");

        this.#element.type = "text";
        this.#element.placeholder = props.placeholder;
    }

    get value() {
        return this.#element.value;;
    }

    onChange(callback) {
        this.#element.addEventListener("input", (event) => {
            const isEmpty = event.target.value === "";
            callback(isEmpty);
        });
    }

    focus() {
        this.#element.focus();
    }

    clear() {
        this.#element.value = "";
    }

    render() {
        return this.#element;
    }
}
