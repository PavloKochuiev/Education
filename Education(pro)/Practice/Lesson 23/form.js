class SearchForm {
    #searchEngine;
    #element;
    #input;
    #searchButton;
    #clearButton;

    constructor(searchEngine) {
        this.#searchEngine = searchEngine;

        this.#element = document.createElement("div");

        this.#input = new Input({ placeholder: "Enter..." });

        this.#searchButton = new Button({
            text: "Search",
            className: "primary",
        });

        this.#clearButton = new Button({
            text: "Clear",
            className: "secondary",
        });
    }

    #onSearchClick() {

        this.#searchEngine.search("123").then();
        this.#input.focus();
    }

    #onClearClick() {
        this.#input.clear();
        this.#searchButton.disable();
        this.#clearButton.disable();
        this.#input.focus();
    }

    #configure() {
        this.#searchButton.disable();
        this.#clearButton.disable();

        this.#input.onChange((isEmpty) => {
            if (isEmpty) {
                this.#searchButton.disable();
                this.#clearButton.disable();
            } else {
                this.#searchButton.enable();
                this.#clearButton.enable();
            }
        });

        this.#searchButton.onClick(() => this.#onSearchClick());
        this.#clearButton.onClick(() => this.#onClearClick());
    }

    render() {
        this.#configure();

        [this.#input, this.#searchButton, this.#clearButton].forEach(
            (element) => {
                this.#element.appendChild(element.render());
                // document.body.appendChild(element.render());
            }
        );

        return this.#element;
    }
}
