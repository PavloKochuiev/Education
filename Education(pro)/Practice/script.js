// Как ведут себя объекты: 

const ObjectA = {
    userName: 'Pasha', 
    age: 25,
    gender: 'male'
}

const copyOfObjectA = ObjectA;
ObjectA.citizen = 'Ukraine';

console.log(ObjectA);

console.log(typeof ObjectA)