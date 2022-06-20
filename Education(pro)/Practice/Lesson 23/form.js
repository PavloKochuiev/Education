class SearchForm {
    #searchService;
    #element;
    #input;
    #searchButton;
    #clearButton;
    #searchResults;

    constructor(searchService) {
        this.#searchService = searchService;

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

        this.#searchResults = new SearchResults();
    }

    async #onSearchClick() {
        try {
            const data = await this.#searchService.search(this.#input.value);
            if (data !== null) {
                this.#searchResults.hide();
                this.#searchResults.show(data);
            }
        } catch (error) {
            console.error("Error", error);
        } finally {
            this.#input.focus();
        }
        // this.#searchService.search(this.#input.value).then(data => console.log(data));
        // this.#input.focus();
    }

    #onClearClick() {
        this.#input.clear();
        this.#searchResults.hide();
        this.#input.focus();

        this.#searchButton.disable();
        this.#clearButton.disable();
    }

    #configure() {
        this.#searchButton.disable();
        this.#clearButton.disable();

        this.#input.onChange((value) => {
            if (value === "") {
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

        [
            this.#input,
            this.#searchButton,
            this.#clearButton,
            this.#searchResults,
        ].forEach((element) => {
            this.#element.appendChild(element.render());
            // document.body.appendChild(element.render());
        });

        return this.#element;
    }
}
