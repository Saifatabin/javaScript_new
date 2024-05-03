const user={a:2}
const details=Object.getOwnPropertyDescriptor(user,'a');
console.log(details)//shows the descriptor of the property