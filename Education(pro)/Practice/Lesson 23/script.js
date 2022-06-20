"use strict";

const searchService = new SearchService();
const form = new SearchForm(searchService);

document.body.appendChild(form.render());
