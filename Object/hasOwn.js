const obj={
    name:"alice",
    toString(){return "person object"}
}
console.log(Object.hasOwn(obj,"name"))
console.log(Object.hasOwn(obj,"toString"))