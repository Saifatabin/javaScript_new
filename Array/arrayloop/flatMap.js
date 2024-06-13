const a = ['1', '2', '3', '4', '5', '6', '7'];

/*first map the value then flaten */

const b=a.flatMap(num=>[num+2,num*2])
console.log(b);