const array=['a','b','c','d']

/*in this method it take the condition match with the array ,the moment it dosn't match the condition it will come out of it and returns "false"
and it olny retuns boolean value 
*/

const b=((val)=>{
    if (array.length>=4) {
        return true
        
    } else {
        return false
    }
})
console.log(b());
