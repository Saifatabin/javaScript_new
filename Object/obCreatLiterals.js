const Juser = {
    name: "saif",
    age: 30,
    location: "Odisha",
    email: "s#***#@gmail.com",
    isLogedIn: false,
    greeting: function() {
      return "hello js user";
    },
    lastLogInDays: ["monday", "saturday"]
};
console.log(Juser.email);
console.log(Juser["age"]);
Juser.location = "balasore";
console.log(Juser);
console.log(Juser.greeting());

Juser.greetingTwo = function() {
    console.log("hello js user", this.name);
}

Juser.greetingTwo();
Object.freeze(Juser);