const Juser={
    name:"saif",
    age:30,
    location:"Odisha",
    email:"s#***#@gmail.com",
    isLogedIn:false,
    greeting:function(){console.log("hello js user")},
    lastLogInDays:["monday","saturday"],
    }
console.log(Juser.email);
console.log(Juser["age"]);
Juser.location="balasore"
Object.freeze(Juser)
Juser.location="odisha"
console.log(Juser);
console.log(Juser.greeting());