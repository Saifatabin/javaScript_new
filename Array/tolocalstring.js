const array=[1,2,new Date(),'hello'];
const local=array.toLocaleString('en',{style:'currency',currency:'USD'});
console.log(local);