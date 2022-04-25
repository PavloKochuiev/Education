// Написать функцию “глубокого” копирования.Функция принимает один параметр и возвращает его копию “по значению”. В функцию можно передать параметр любого типа. 
// Если передали объект, то предусмотреть ситуацию, когда свойствами этого объекта будут объекты или массивы.
// Если передали массив, то предусмотреть ситуацию, когда элементами этого массива будут объекты или массивы.
// Если передали примитив - вернуть его.

// объявление объектов / массивов / примитива

const album = {
    title: "Music For 3+",
    songs: 14,
    minutes: 59,
    isEnglish: true
};

const ep = {
    name: "For Child",
    songs: 3,
    minutesOfEachTrack: [3, 4, 3],
    tracks: {
        firstTrack: "Love",
        secondTrack: "Drugs",
        thirdTrack: "Violence"
    }
};

const song = "Pray for IT";

function deepCopy(origin) {
    // проверка если "origin" это объект
    if (origin instanceof Object) {
        return origin;
    }
    // создание пустого объекта
    let target = {};

    for (let key in origin) {
        let temp = origin[key];
        // рекурсивное "глубокое" копирование объекта
        if (typeof temp === "object" && temp !== null) {
            target[key] = deepCopy(temp);
        } else {
            target[key] = temp;
        }
    }
    return target;
}

console.log("Объекты:")
let album2 = deepCopy(album);
console.log(album);
console.log(album2);

console.log("Объекты + массивы:")
let ep2 = deepCopy(ep);
console.log(ep);
console.log(ep2);
































// function deepEquals(obj1, obj2) {
//     // объекты одинаковые 
//     if (obj1 === obj2) {
//         return true;
//     }
//     // если объекты примитивы
//     if (obj1 !== Object(obj1) && obj2 !== Object(obj2)) {
//         return obj1 === obj2;
//     }
//     // если одинаковое количество клюдчей
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false;
//     }
//     // проверить каждый ключ
//     for (let key in obj1) {
//         // второй объект не имеет этого ключа
//         if (!(key in obj2)) {
//             return false;
//             // рекурсивная функция
//         } else if (!deepEquals(obj1[key], obj2[key])) {
//             return false;
//         }
//     }
//     // объекты равны
//     return true;
// }

// let song2 = deepEquals(song);
// console.log(song);
// console.log(song2);



