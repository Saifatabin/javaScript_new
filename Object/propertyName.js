const obj={a:1,b:2,[Symbol('c')]:3}
const propName1=Object.getOwnPropertyNames(obj)
const propName2=Object.getOwnPropertySymbols(obj)
console.log(propName1)//get only property name not symbols
console.log(propName2)//get only symbol property not normal property name