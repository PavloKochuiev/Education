"use strict";

const m = new Map();

m.set("name", "Dima");

console.log(m.size);



const s = new Set(); // как массив но без дубликатов

s.add("Bethoven");
s.add("Chopen");
s.add("Mozart");

console.log(s);

const str = "qwerty";

function hasDublicateSymbol(str) {
    for (let index = 0; index < str.length; index++) {
        for (let j = index + 1; j < str.length; j++) {
            if(str[index] === str[j]) {
                return true;
            }
        }
    }
    
    return false;
}

console.log(hasDublicateSymbol('qwerty'));



function hasDublicateSymbolSet(str) {
    const set = new Set();
    for (const s of str) {
        if (set.has(s)) {
            return true;
        }
        set.add(s);
    }
    return false; 
}