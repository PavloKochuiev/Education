






























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



