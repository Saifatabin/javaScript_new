const user1={x:1};
const user2=Object.create(user1);
console.log(user2)//it holds the property of user1 

console.log(user2.x)