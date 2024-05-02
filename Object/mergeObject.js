const object1={a:1,b:2}
const object2={c:3,d:4}
const object3=Object.assign({},object1,object2);
console.log(object3);
const ob1={a:"apple",b:"bat"}
const ob2={c:"catch",d:"dot"}
const ob3={...ob1,...ob2}
console.log(ob3)
