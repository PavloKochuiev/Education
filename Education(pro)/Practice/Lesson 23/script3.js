"use strict";

class SearchEngine {
    search(value) {
        ///
        console.log("SearchEngine", value)
        return Promise.resolve();
    }
}

const searchEngine = new SearchEngine();
const form = new SearchForm(searchEngine);
document.body.appendChild(form.render());
