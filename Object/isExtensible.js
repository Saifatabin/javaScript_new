const person=
    {
    name:"alice",
    age:30
    };
console.log(Object.isExtensible(person));
console.log(Object.isFrozen(person));
console.log(Object.isSealed(person));
Object.preventExtensions(person);
console.log(Object.isExtensible(person));
Object.seal(person);
console.log(Object.isSealed(person));
Object.freeze(person);
console.log(Object.isFrozen(person));