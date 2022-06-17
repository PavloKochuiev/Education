"use strict";

const maxPages = 12; 

async function getMaxPages() {
    const response = fetch("https://rickandmortyapi.com/api/character/page=1);
    if (!response.ok) return null;

    const data = await response.json();
    return data.info.pages;
}

async function run() {

}

run();

