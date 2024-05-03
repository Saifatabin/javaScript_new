const user={}
Object.defineProperties(user,
    {a:{value:21,
        writable:true
        },
    b:{
          value:"hello",
          writable:false  
        }});//this can take multiple properties like a,b
console.log(user.a)
console.log(user.b)
Object.defineProperty(user,
    "c",{
        value:23,
        writable:true
    });//only can take one property like c
console.log(user.c)