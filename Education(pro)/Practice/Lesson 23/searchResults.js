class SearchResults {
    #element 

    constructor() {
        this.#element = document.createElement("div");
    }

    show(items) {
        const ul = document.createElement("ul");

        for (const item of items) {
            const li = document.createElement("li");
            li.innerText = `${item.id}: ${item.name}`;

            ul.appendChild(li);
        }

        this.#element.appendChild(ul);
    }

    hide() {
        this.#element.innerHTML = '';
    }

    render() {
        return this.#element;
    }
}