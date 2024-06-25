const user1={x:1};
const user2=Object.create(user1);
console.log(user2)//it holds the property of user1 

console.log(user2.x)
/*there is 10 way to create objects
Object Literals
Object Constructor
Constructor Functions
ES6 Classes
Object.create()
Factory Functions
Singleton Pattern
Object.assign()
Spread Operator
JSON.parse()
*/